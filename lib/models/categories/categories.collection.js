'use strict';

const schema = require('./categories.schema.js');

class CategoriesCollection {
    
  create(newEntry) {
    let entry =new schema(newEntry);
    return entry.save();
  }

  read(id) {
    if (!id) {
      return schema.find({});
    } else {
      return schema.findById(id);
    }
  }

  update(id, obj) {
    return schema.findByIdAndUpdate({'_id': id}, {...obj});
  }
  
  destroy(id) {
    return schema.findByIdAndRemove(id);
  }

}

module.exports = new CategoriesCollection();