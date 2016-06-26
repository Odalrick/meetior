import I from 'immutable'

import { toUrl } from './navigation'

describe('navigation', function () {
  describe('toUrl', function () {
    describe('using Immutable', function () {
      it('should create url with page', function () {
        const link = I.Map({ type: 'page-type', id: '123' })

        expect(toUrl(link)).to.equal('/page-type/123')
      })

      it('should create url with double id', function () {
        const link = I.Map({ type: 'page-type', id: '123', id2: '321' })

        expect(toUrl(link)).to.equal('/page-type/123/321')
      })

      it('should create url with index', function () {
        const link = I.Map({ type: 'page-type', id: '123', index: 3 })

        expect(toUrl(link)).to.equal('/page-type/i/3/123')
      })

      it('should create url with index 0', function () {
        const link = I.Map({ type: 'page-type', id: '123', index: 0 })

        expect(toUrl(link)).to.equal('/page-type/i/0/123')
      })

      it('should create url with double id', function () {
        const link = I.Map({ type: 'page-type', id: '123', id2: '321', index: 3 })

        expect(toUrl(link)).to.equal('/page-type/i/3/123/321')
      })
    })
    describe('using JavaScript', function () {
      it('should create url with page', function () {
        const link = { type: 'page-type', id: '123' }

        expect(toUrl(link)).to.equal('/page-type/123')
      })

      it('should create url with double id', function () {
        const link = { type: 'page-type', id: '123', id2: '321' }

        expect(toUrl(link)).to.equal('/page-type/123/321')
      })

      it('should create url with index', function () {
        const link = { type: 'page-type', id: '123', index: 3 }

        expect(toUrl(link)).to.equal('/page-type/i/3/123')
      })

      it('should create url with index 0', function () {
        const link = { type: 'page-type', id: '123', index: 0 }

        expect(toUrl(link)).to.equal('/page-type/i/0/123')
      })

      it('should create url with double id', function () {
        const link = { type: 'page-type', id: '123', id2: '321', index: 3 }

        expect(toUrl(link)).to.equal('/page-type/i/3/123/321')
      })
    })
  })
})
