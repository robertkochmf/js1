var person = {
  name: 'Ash',
  friends: '3',
  favFood: [
    'Curry', 'Soup'
  ],
  talk: {
    introduce: function () {
      console.log('Hi my name is ' + person.name);
    },
    food: function () {
      var foods = Object.keys(person.favFood);
      foods.forEach(function(food, index, array) {
        console.log('My favourite foods are ' + person.favFood[food]);
      });
      // console.log('My favourite foods are ' + person.favFood);
    }
  }
};

// person.talk.introduce();
// person.talk.food();

function makePerson (name, friends) {
  return {
    setName: function(newName) {
      if (typeof(newName) !== 'string') {
        console.error('The persons\' name must be string!');
        return;
      }
      name = newName;
    },
    getName: function () {
      return name;
    },
    setFriends: function (setFriends) {
      if (typeof(setFriends) !== number) {
        console.error('The persons\' age must be a number!');
        return;
      }
      friends = newFriends;
    },
    getFriends: function () {
      return friends;
    }
  };
}

var person = makePerson('robert', 12);
console.log(person.getFriends());





// var foods = Object.keys(person.favFood);

// console.log('My favourite foods are ' + person.favFood[food] + (person.favFood[0]) + " and " + (person.favFood[1]));
