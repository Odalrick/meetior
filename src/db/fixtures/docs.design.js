/* global isArray: false, emit:false */
export default {
  _id: '_design/docs',
  views: {
    type: {
      map: function (doc) {
        if (doc.type) {
          emit(doc.type, { title: doc.title })
        }
      },
    },
  },
}
