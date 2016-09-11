function configFactory(config) {
  const couchUrl = config.couchUrl
  const dbs = config.dbs
  const protocol = config.protocol
  return {
    get(role, name, pass) {
      const dataDB = dbs[role]
      if (!dataDB) {
        throw new Error(`no such role: ${role}`)
      }
      return {
        name,
        pass,
        dataDB,
        protocol,
        couchUrl,
      }
    },
  }
}

module.exports = configFactory
