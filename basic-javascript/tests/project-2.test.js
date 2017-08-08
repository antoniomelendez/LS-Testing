const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect;
// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('Should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('Expect 3 to be > 1', () => {
      const bigger = funcs.getBiggest(3,1);
      expect(bigger).to.be.equal(3);
    });
    it('Expect 3 to be < 5', () => {
      let x = 5;
      let y = 5;
      const bigger = funcs.getBiggest(x,y);
      assert.equal(bigger, y);
    });
    it('Expect 3 = 3 to be 3', () => {
      const bigger = funcs.getBiggest(3,3);
      assert.equal(bigger,3);
    })
  });

  describe('greeting', () => {
    it('Should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('Expect German to return Guten Tag!', () => {
      const greeting = funcs.greeting('German');
      expect(greeting).to.be.equal('Guten Tag!');
    });
    const greeting = funcs.greeting('Spanish');
    expect(greeting).to.be.equal('Hola!');
    it('Expect to sent hello to unknown, undefined  and English', () => {
      const greeting = funcs.greeting('germanlowercase');
      assert.equal(greeting, 'Hello!');
      const greetingUndefined = funcs.greeting();
      assert.equal(greetingUndefined, 'Hello!')
      const greetingEnglish = funcs.greeting('English');
      assert.equal(greetingEnglish, 'Hello!')
    });
  });

  describe('isTenOrFive', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('Should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('Should return true for 5 or 10', () => {
      const numbers = [5,10];
      numbers.forEach(number => {
        assert.equal(isTenOrFive(number),true);
      });
    });
    it('Should return false if number is not 5 or 10', () => {
      assert.equal(isTenOrFive(3), false);
    });
  });

  describe('isInRange', () => {
    const isInRange = funcs.isInRange;
    it('Should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('Should return true if number is 25', () => {
      assert.equal(isInRange(25), true);
    });
    it('Should return false if number is 19', () => {
      assert.equal(isInRange(19), false);
    });
  });

  describe('isInteger', () => {
    const isInteger = funcs.isInteger;
    it('Should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('1 Should be true ', () => {
      let number = isInteger(1);
      expect(number).to.be.equal(true);
    });
    it('1.1 Should be false', () => {
      number = isInteger(1.1);
      expect(number).to.be.equal(false);
    });
  });

  describe('fizzBuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('Should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('30 should be fizzbuzz' , () => {
      expect(fizzBuzz(30)).to.be.equal('fizzbuzz');
    });
    it('15 should be buzz' , () => {
      expect(fizzBuzz(25)).to.be.equal('buzz');
    });
    it('9 should be fizz', () => {
      expect(fizzBuzz(9)).to.be.equal('fizz');
    });
    it('22 should be 22', () => {
      expect(fizzBuzz(22)).to.be.equal(22);
    });
  });

  describe('isPrime', () => {
    const isPrime = funcs.isPrime;
    it('Should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('Should be false if number < 0', () => {
      expect(isPrime(-1)).to.be.equal(false);
    });
    it('Should be false for 0 and 1', () => {
      let numbers = [0,1];
      numbers.forEach(number => {
        assert.equal(isPrime(number), false);
      });
    });
    it('Should be false for 10', () => {
      expect(isPrime(10)).to.be.equal(false);
    });
    it('Should be true 7', () => {
      assert.equal(isPrime(7), true);
    });
  });

  describe('returnFirst', () => {
    const returnFirst = funcs.returnFirst;
    it('Should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('Should be 1', () => {
      const array = [1,2,3,4,5];
      expect(returnFirst(array)).to.be.equal(1);
    });
  });

  describe('returnLast', () => {
    const returnLast = funcs.returnLast;
    it('Should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('Should be 5', () => {
      const array = [1,2,3,4,5];
      expect(returnLast(array)).to.be.equal(5);
    });
  });

  describe('getArrayLength', () => {
    const getArrayLength = funcs.getArrayLength;
    it('Should be a function', () => {
      assert.typeOf(getArrayLength,'function');
    });
    it('Should be 5', () => {
      const array = [1,2,3,4,5];
      expect(getArrayLength(array)).to.be.equal(5);
    });
  });

  describe('incrementByOne', () => {
      const incrementByOne = funcs.incrementByOne;
    it('Should be a function', () => {
      expect(typeof incrementByOne).to.be.equal('function');
    });
    it('Should be 4,5,6', () => {
      let array = [3,4,5];
      assert(incrementByOne(array), [4,5,6]);
    });
  });

  describe('addItemToArray', () => {
    let addItemToArray = funcs.addItemToArray;
    it('Should be a function', () => {
      assert.typeOf(addItemToArray,'function');
    });
    it('Should be [1,2,3,4,5]' , () => {
      const item = 5;
      const array = addItemToArray([1,2,3,4],5);
      expect(array[array.length -1]).to.be.equal(item)
    });
  });

  describe('addItemToFront', () => {
    let addItemToFront = funcs.addItemToFront;
    it('Should be a function', () => {
      assert.typeOf(addItemToFront,'function');
    });
    it('Should be [1,2,3,4,5]' , () => {
      const item = 5;
      const array = addItemToFront([1,2,3,4],5);
      expect(array[0]).to.be.equal(item)
    });
  });

  describe('wordsToSentence', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('Should be a function', () => {
      assert.typeOf(wordsToSentence,'function');
    });
    it('Should be Hello my name is Tom', () => {
      const words = ['Hello', 'my', 'name', 'is','Tom'];
      expect(wordsToSentence(words)).to.be.equal('Hello my name is Tom');
    });
  });

  describe('contains', () => {
    const contains = funcs.contains;
    it('Should be a function', () => {
      assert.typeOf(contains,'function');
    });
    it('Should be true', () => {
      const words = ['Hello', 'my', 'name', 'is','Tom'];
      expect(contains(words, 'Hello')).to.be.equal(true);
    });
    it('Should be falso', () => {
      const words = ['Hello', 'my', 'name', 'is','Toma', 'safada'];
      expect(contains(words, 'OI CARA')).to.be.equal(false);
    });
  });

  describe('addNumbers', () => {
    const addNumbers = funcs.addNumbers;
    it('Should be function', () => {
      expect(typeof addNumbers).to.be.equal('function');
    });
    it('Should be 6', () => {
      const array = addNumbers([1,2,3]);
      expect(array).to.be.equal(6);
    });
  });

  describe('averageTestScore', () => {
    const averageTestScore = funcs.averageTestScore;
    it('Should be function', () => {
      expect(typeof averageTestScore).to.be.equal('function');
    });
    it('Should be 6', () => {
      expect(averageTestScore([6,6])).to.be.equal(6);
    });
  });
  describe('largetsNumber', () => {
      const largestNumber = funcs.largestNumber;
    it('Should be a function', () => {
      expect(typeof largestNumber).to.be.equal('function');
    });
    it('Should be 10', () => {
      const largestNum = largestNumber([1,2,10]);
      expect(largestNum).to.be.equal(10);
    });
  });
});
