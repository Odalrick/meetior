import fetch from 'isomorphic-fetch'

const serialise = data => JSON.stringify(data,
  (key, value) => (typeof value === 'function') ? value.toString() : value
)

export default config => {

  return {
    loadLessons() {
      return fetch(
        `${config.couchUrl}/${config.dataDB}/_design/lesson/_view/lesson`, {
          method: 'GET',
        }).then(res => res.json())
    },
    load(_id) {
      return fetch(
        `${this.config.couchUrl}/${this.config.dataDB}/${_id}`, {
          method: 'GET',
        }).then(res => res.json())
    },
    save(doc) {
      return fetch(`${config.couchUrl}/${config.dataDB}/${doc._id}`, {
        method: 'PUT',
        body: serialise(doc),
      })
    },
    createDb() {
      return fetch(`${config.couchUrl}/${config.dataDB}`, { method: 'PUT' })
    },
    deleteDb() {
      return fetch(`${config.couchUrl}/${config.dataDB}`, { method: 'DELETE' })
    },
  }
}
