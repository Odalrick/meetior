import chai, {expect} from 'chai'
import chaiImmutable from 'chai-immutable'
import 'babel-polyfill'

chai.use(chaiImmutable)

global.expect = expect
