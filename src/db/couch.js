import fetch from 'isomorphic-fetch'
import R from 'ramda'

const serialise = data => JSON.stringify(data,
  (key, value) => (typeof value === 'function') ? '(' + value.toString() + ')' : value
)

export default config => {
  return {
    loadType(type) {
      const sType = serialise(type)
      return fetch(
        `${config.couchUrl}/${config.dataDB}/_design/docs/_view/type?key=${sType}`, {
          method: 'GET',
        }).then(res => res.json())
    },
    load(_id) {
      return fetch(
        `${config.couchUrl}/${config.dataDB}/${_id}`, {
          method: 'GET',
        }).then(res => res.json())
    },
    save(doc) {
      return fetch(`${config.couchUrl}/${config.dataDB}/${doc._id}`, {
        method: 'PUT',
        body: serialise(doc),
      })
    },
    uploadAttachment(doc, file) {
      return fetch(`${config.couchUrl}/${config.dataDB}/${doc._id}/${file.name}?rev=${doc._rev}`, {
        method: 'PUT',
        body: file,
      })
      .then(res => res.json())
      .then(json => R.assoc('url', `${config.couchUrl}/${config.dataDB}/${doc._id}/${file.name}`, json))
    },
    createDb() {
      return fetch(`${config.couchUrl}/${config.dataDB}`, {method: 'PUT'})
    },
    deleteDb() {
      return fetch(`${config.couchUrl}/${config.dataDB}`, {method: 'DELETE'})
    },
  }
}
