import fetch from 'isomorphic-fetch'
import R from 'ramda'

const serialise = (data, functionExpressions) => functionExpressions ?
  serialiseFunctionExpressions(data) : serialiseFunctionStatements(data)

const serialiseFunctionExpressions = data => JSON.stringify(data,
  (key, value) => (typeof value === 'function') ? '(' + value.toString() + ')' : value
)

const serialiseFunctionStatements = data => JSON.stringify(data,
  (key, value) => (typeof value === 'function') ? value.toString() : value
)

export default config => {
  const protocol = config.protocolSecure ? 'https' : 'http'
  return {
    loadType(type) {
      const sType = serialise(type)
      return fetch(
        `${protocol}://${config.couchUrl}/${config.dataDB}/_design/docs/_view/type?key=${sType}`, {
          method: 'GET',
        }).then(res => res.json())
    },
    load(_id) {
      return fetch(
        `${protocol}://${config.couchUrl}/${config.dataDB}/${_id}`, {
          method: 'GET',
        }).then(res => res.json())
    },
    save(doc, functionExpressions = true) {
      return fetch(`${protocol}://${config.couchUrl}/${config.dataDB}/${doc._id}`, {
        method: 'PUT',
        body: serialise(doc, functionExpressions),
      })
    },
    uploadAttachment(doc, file) {
      return fetch(`${protocol}://${config.couchUrl}/${config.dataDB}/${doc._id}/${file.name}?rev=${doc._rev}`, {
        method: 'PUT',
        body: file,
      })
        .then(res => res.json())
        .then(json => R.assoc('url', `${config.couchUrl}/${config.dataDB}/${doc._id}/${file.name}`, json))
    },
    createDb() {
      return fetch(`${protocol}://${config.couchUrl}/${config.dataDB}`, { method: 'PUT' })
    },
    deleteDb() {
      return fetch(`${protocol}://${config.couchUrl}/${config.dataDB}`, { method: 'DELETE' })
    },
    getUser() {
      return fetch(`${protocol}:${config.user}:${config.pass}//${config.couchUrl}/_users/_all_docs`, { method: 'GET' })
    },
  }
}
