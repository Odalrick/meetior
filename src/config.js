module.exports = Object.freeze({
  couchUrl: 'localhost:5984',
  protocolSecure: false,
  dataDB: 'm-data',
  logDB: 'm-log',
  dbs: {
    user: 'p-users',
    learner: 'p-learners',
    teacher: 'p-teachers',
    admin: 'p-admins',
    anonymous: 'p-anonymous',
  },
  name: 'server',
  pass: 'server',
})
