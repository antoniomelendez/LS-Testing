const assert = require('chai').assert;
const funcs = require('../src/project-3');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Project 3 testing', () => {
  describe('makeCat', () => {
    const makeCat = funcs.makeCat;
    it('should be a function', () => {
      assert.typeOf(makeCat, 'function');
    });
    const cat = makeCat('happy', 25);
    it('should return object with properties name, age and function meow', () => {
      expect(cat).to.be.an('object');
      expect(cat).to.have.property('name');
      expect(cat).to.have.property('age');
      assert.typeOf(cat.meow, 'function');
    });
    it('should receive Meow! From Meow function', () => {
      assert.equal(cat.meow(), 'Meow!');
    });
  });

  describe('addProperty', () => {
    const addProperty = funcs.addProperty;
    it('should be a function', () => {
      assert.typeOf(addProperty, 'function')
    });
    it('should be ball[color] = null, type should be object', () => {
      const property = 'color';
      const ball = addProperty({}, property);
      expect(ball).to.have.key('color');
      assert.typeOf(ball, 'object');
      expect(ball[property]).to.be.a('null');
    });
  });

  describe('invokeMethod', () => {
    const invokeMethod = funcs.invokeMethod;
    it('should be a function', () => {
      assert.typeOf(invokeMethod, 'function');
    });
    it('should be called 1 time', () => {
      const newCat = {
        catGoes: '',
        meow() {
          this.catGoes = 'Meow!';
        }
      };
      invokeMethod(newCat, 'meow')
      expect(newCat.catGoes).to.equal('Meow!');
    });
  });

  describe('multiplyMysteryNumberByFive', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    it('should be a function', () => {
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('should be 20', () => {
      expect(multiplyMysteryNumberByFive({
        mysteryNumber: 4
      })).to.be.equal(20);
    })
  });

  describe('deleteProperty', () => {
    const deleteProperty = funcs.deleteProperty;
    it('should be a function', () => {
      assert.typeOf(deleteProperty, 'function');
    });
    it('should equal empty {}', () => {
      const obj = {
        color: 'green',
        name: 'jon'
      };
      const newObj = {
        name: 'jon'
      };
      assert.deepEqual(deleteProperty(obj, 'color'), newObj);
    })
  });

  describe('newUser', () => {
    const newUser = funcs.newUser;
    it('should be a function', () => {
      assert.typeOf(newUser, 'function');
    });
    it('newUser should have a name, email, and password', () => {
      const obj = {
        name: 'bob',
        email: 'hit@me.com',
        password: '123'
      };
      assert.deepEqual(newUser('bob', 'hit@me.com', '123'), obj);
    });
  });

  describe('hasEmail', () => {
    const hasEmail = funcs.hasEmail;
    it('should be a function', () => {
      assert.typeOf(hasEmail, 'function');
    });
    it('if user has email return true, if not return false', () => {
      const user1 = {
        email: 'yes@yas.com'
      };
      const user2 = {};
      assert.equal(hasEmail(user1), true);
      assert.equal(hasEmail(user2), false);
    });
  });

  describe('hasProperty', () => {
    const hasProperty = funcs.hasProperty;
    it('should be a function', () => {
      assert.typeOf(hasProperty, 'function');
    });
    it('if user has property return true, if not return false', () => {
      const user1 = {
        property: 'yes@yas.com'
      };
      const user2 = {
        book: 'Ice'
      };
      assert.equal(hasProperty(user1, 'property'), true);
      assert.equal(hasProperty(user2, 'property'), false);
    });
  });

  describe('verifyPassword', () => {
    const verifyPassword = funcs.verifyPassword;
    it('should be a function', () => {
      assert.typeOf(verifyPassword, 'function');
    });
    it('If password is === password return true else return false', () => {
      const user1 = {
        password: 'yup'
      };
      const user2 = {
        password: 'nope'
      };
      assert.equal(verifyPassword(user1, 'yup'), true);
      assert.equal(verifyPassword(user2, 'yup'), false);
    });
  });

  describe('updatePassword', () => {
    const updatePassword = funcs.updatePassword;
    it('should be a function', () => {
      assert.typeOf(updatePassword, 'function');
    });
    it('Password === new Password', () => {
      const user1 = {
        password: 'yup'
      };
      expect(updatePassword(user1, 'Yas!').password).to.equal('Yas!')
    });
  });

  describe('addFriend', () => {
    const addFriend = funcs.addFriend;
    it('should be a function', () => {
      assert.typeOf(addFriend, 'function');
    });
    it('newFriend should be added to user.friends array', () => {
      const user1 = {
        friends: []
      };
      const user2 = {
        friends: ['Jim']
      };
      assert.deepEqual(addFriend(user1, 'Jim'), user2);
    });
  });

  describe('setUsersToPremium', () => {
    const setUsersToPremium = funcs.setUsersToPremium;
    it('should be a function', () => {
      assert.typeOf(setUsersToPremium, 'function');
    });
    it('All objects should have isPremium set to true', () => {
      const users = [{
        isPremium: false
      }, {
        isPremium: false
      }, {
        isPremium: false
      }];
      const updatedUsers = [{
        isPremium: true
      }, {
        isPremium: true
      }, {
        isPremium: true
      }];
      assert.deepEqual(setUsersToPremium(users), updatedUsers);
    });
  });

  describe('sumUserPostLikes', () => {
    const sumUserPostLikes = funcs.sumUserPostLikes;
    it('should be a function', () => {
      assert.typeOf(sumUserPostLikes, 'function');
    });
    it('Sum of all the likes values', () => {
      const user = {
        username: 'Antone',
        posts: [{
            id: '1',
            title: 'JS adventures!',
            likes: 10
          },
          {
            id: '2',
            title: 'LambdaSchool forever!',
            likes: 100
          },
        ]
      };
      assert.equal(sumUserPostLikes(user), 110);
    });
  });

  describe('addCalculateDiscountPriceMethod', () => {
    const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
    it('should be a function', () => {
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
    });
    it('should equal 72', () => {
      const storeItem = {price: 80, discountPercentage: 0.1};
      assert.equal(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice(), 72);
    });
  });



});