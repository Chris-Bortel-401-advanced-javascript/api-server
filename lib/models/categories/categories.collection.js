'use strict';

const schema = require('./categories.schema.js');

class CategoriesCollection {
    
  create(newRecord) {
    let record = new schema(newRecord);
    return record.save();
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