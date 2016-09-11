import fetch from 'isomorphic-fetch'
import R from 'ramda'

const serialiseFunctionExpressions = data => JSON.stringify(data,
  (key, value) => ((typeof value === 'function') ? '(' + value.toString() + ')' : value)
)

const serialiseFunctionStatements = data => JSON.stringify(data,
  (key, value) => ((typeof value === 'function') ? value.toString() : value)
)
const serialise = (data, functionExpressions) => (functionExpressions ?
  serialiseFunctionExpressions(data) : serialiseFunctionStatements(data))

export default conf => {
  let config = conf
  return {
    setConfig(newConfig) {
      config = newConfig
    },
    loadType(type) {
      const sType = serialise(type)
      return fetch(
        `${config.protocol}://${config.name}:${config.pass}@${config.couchUrl}/${config.dataDB}/_design/docs/_view/type?key=${sType}`, {
          method: 'GET',
        }).then(res => res.json())
    },
    load(_id) {
      return fetch(
        `${config.protocol}://${config.name}:${config.pass}@${config.couchUrl}/${config.dataDB}/${_id}`, {
          method: 'GET',
        }).then(res => res.json())
    },
    save(doc, functionExpressions = true) {
      return fetch(`${protocol}://${config.name}:${config.pass}@${config.couchUrl}/${config.dataDB}/${doc._id}`, {
        method: 'PUT',
        body: serialise(doc, functionExpressions),
      })
    },
    uploadAttachment(doc, file) {
      return fetch(`${config.protocol}://${config.name}:${config.pass}@${config.couchUrl}/${config.dataDB}/${doc._id}/${file.name}?rev=${doc._rev}`, {
        method: 'PUT',
        body: file,
      })
        .then(res => res.json())
        .then(json => R.assoc('url', `${config.couchUrl}/${config.dataDB}/${doc._id}/${file.name}`, json))
    },
    createDb() {
      return fetch(`${config.protocol}://${config.name}:${config.pass}@${config.couchUrl}/${config.dataDB}`, { method: 'PUT' })
    },
    deleteDb() {
      return fetch(`${config.protocol}://${config.name}:${config.pass}@${config.couchUrl}/${config.dataDB}`, { method: 'DELETE' })
    },
  }
}
