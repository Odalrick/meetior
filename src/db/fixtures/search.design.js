export default {
  _id: '_design/search',
  fulltext: {
    all: {
      index(doc) {
          var result = new Document();
          result.add(doc.title, {"type":"string", "boost":2});
          result.add(doc.title, {"type":"string", "store":"yes", "field":"title"});
          result.add(doc.description, {"type":"string", "store":"yes", "field":"description"});
          result.add(doc.description, {"type":"string" });
          result.add(doc.type, {"type":"string", "store":"yes", "field":"type"});
          return result;
      }
    }
  }
}
