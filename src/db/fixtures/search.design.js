export default {
  _id: '_design/search',
  fulltext: {
    title: {
      index: {
        function(doc) {
          var result = new Document();
          result.add(doc.title, {"type":"string", "store":"yes"});
          return result;
        }
      }
    }
  }
}
