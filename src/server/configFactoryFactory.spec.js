const configFactory = require('./configFactoryFactory')

const baseConfig = {
  couchUrl: 'localhost:5984',
  protocol: 'http',
  dbs: {
    server: 'm-data',
    user: 'p-users',
    learner: 'p-learners',
    teacher: 'p-teachers',
    admin: 'p-admins',
    anonymous: 'p-anonymous',
  },
}

describe('config factory', function () {
  it('should generate a server config', function () {
    const name = 'Lando Calrisian'
    const pass = 'I am a bad guy'
    const i = configFactory(baseConfig)
    expect(i.get('server', name, pass)).to.deep.equal({
      couchUrl: 'localhost:5984',
      protocol: 'http',
      dataDB: 'm-data',
      name,
      pass,
      role: 'server',
    })
  })

  it('should throw exception for missing roles', function () {
    const name = 'Lando Calrisian'
    const pass = 'I am a bad guy'
    const i = configFactory(baseConfig)
    expect(() => i.get('missing', name, pass)).to.throw()
  })
})
