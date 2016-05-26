import fetch from 'isomorphic-fetch'

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
        }).then(res => {
          return new Promise((resolve, reject) =>
          {
            console.log('Remove the delay...')
            setTimeout(() => resolve(res.json()), 10000)
          })
      })
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
