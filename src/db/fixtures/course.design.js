/* global isArray: false, emit:false */
export default {
  views: {
    course: {
      map: function (doc) {
        if (isArray(doc.slides)) {
          emit(doc.title, doc)
        }
      },
    },
  },
}
