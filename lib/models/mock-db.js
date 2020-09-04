'use strict';

const apiDB = {

  categories: {
    count: 3,
    results: {

      1: {
        'name': 'reading material',
        'display_name': 'books',
        'description': 'for reading',
      },


      2: {
        'name': 'board games',
        'display_name': 'games',
        'description': 'for your gaming',
      },

      3: {
        'name': 'board games',
        'display_name': 'games',
        'description': 'for your gaming',
      },
    },
  },

  products: {
    count: 3,
    results: {
      1: {
        'category': 'books',
        'name': 'Harry Potter',
        'display_name': 'Harry Potter 2',
        'description': 'for reading',
        'price': '20',
      },

      2: {
        'category': 'games',
        'name': 'sorry',
        'display_name': 'sorry',
        'description': 'too bad',
        'price': '500',
      },

      3: {
        'category': 'games',
        'name': 'tik tac toe',
        'display_name': 'cheap',
        'description': 'old school',
        'price': '2',
      },
    },
  },

};

module.exports = apiDB;
