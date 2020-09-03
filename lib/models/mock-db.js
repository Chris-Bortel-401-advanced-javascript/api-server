'use strict';

const apiDB = {

  categories: {
    count: 3,
    results: [
      {
        'id': 1,
        'name': 'reading material',
        'display_name': 'books',
        'description': 'for reading',
      },
      {
        'id': 2,
        'name': 'board games',
        'display_name': 'games',
        'description': 'for your gaming',
      },
      {
        'id': 3,
        'name': 'board games',
        'display_name': 'games',
        'description': 'for your gaming',
      },
    ],
  },

  products: {
    count: 3,
    results: [
      {
        'id': 22,
        'category': 'books',
        'name': 'Harry Potter',
        'display_name': 'Harry Potter 2',
        'description': 'for reading',
        'price': '20',
      },
      {
        'id': 30,
        'category': 'games',
        'name': 'sorry',
        'display_name': 'sorry',
        'description': 'too bad',
        'price': '500',
      },
      {
        'id': 84,
        'category': 'games',
        'name': 'tik tac toe',
        'display_name': 'cheap',
        'description': 'old school',
        'price': '2',
      },
    ],
  },

};

module.exports = apiDB;
