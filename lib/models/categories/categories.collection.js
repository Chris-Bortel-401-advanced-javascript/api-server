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

  //FIX THIS:
  update(id, updatedRecord) {
    try {
      let record = new schema(updatedRecord)
      return record.findByIdAndUpdate(id);
    }
    catch(e) {
      console.log(e);
    }
  }

  destroy(id) {
    try {
      return schema.findByIdAndRemove(id);
    }
    catch (e) {
      console.error(e);
    }
  }

}


// says that whenever you require, make a new collection
module.exports = new CategoriesCollection();