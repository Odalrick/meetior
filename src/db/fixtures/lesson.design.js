/* global isArray: false, emit:false */
export default {
  _id: '_design/lesson',
  views: {
    lesson: {
      map: function (doc) {
        if (isArray(doc.slides)) {
          emit(doc.title, { title: doc.title, _id: doc._id })
        }
      },
    },
  },
}
