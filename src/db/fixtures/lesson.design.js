/* global isArray: false, emit:false */
export default {
  views: {
    lesson: {
      map: function (doc) {
        if (isArray(doc.slides)) {
          emit(doc.title, {title: doc.title, _id: doc._id})
        }
      },
    },
  },
}
