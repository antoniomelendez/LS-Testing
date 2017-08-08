const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you, 
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work. 
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {

  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should multiplyByTen(5) => 50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50 );
    });
    it('should multiplyByTen(-5) => -50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(-5), -50);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtractFive(5) => 0', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(5), 0);
    });
    it('should subtractFive(-5) => -10' , () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(-5), -10);
    });
  });


  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
      it('should areSameLength(hello, whats up) => false', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hello', 'whats up'), false);
    });
      it('should areSameLength(cool, dude) => true', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('cool', 'dude'), true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should areEqual(1,1) => true', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1,1), true);
    });
    it('should areEqual(1,2) => false', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1,2), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be lessThanNinety(10) => true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(10), true);
    });
    it('should be lessThanNinety(100) => false', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(100), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be greaterThanFifty(55) => true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(55), true);
    });
    it('should be a greaterThanFifty(49) => false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(49), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add(2,3) => 5', () => {
      const add = funcs.add;
      assert.equal(add(2,3), 5);
    });
    it('should add(2,-3) => -1', () => {
      const add = funcs.add;
      assert.equal(add(2,-3), -1);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should substract(2,-3) => 5', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(2,-3), 5);
    });
    it('should substract(-3,-3) => 0', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(-3,-3), 0);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.equal(divide(10, 5), 2);
    });
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.equal(divide(5, 5), 1);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('should multiply(10,10) => 100', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(10, 10), 100);
    });
    it('should multiply(-10,-10) => 100', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(-10, -10), 100);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should getRemainder(25/2) => 1', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(25,2), 1);
    });
    it('should getRemainder(24/2) => 1', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(24,2), 0);
    });
    
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should isEven(4) => true', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(4), true);
    });
    it('should isEven(9) => false', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(9), false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should isOdd(9) => true', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(9), true);
    });
    it('should isOdd(90) => false', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(90), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should square(4) => 16', () => {
      const square = funcs.square;
      assert.equal(square(4), 16);
    });
    it('should square(-4) => 16', () => {
      const square = funcs.square;
      assert.equal(square(-4), 16);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should cube(2) => 8 ', () => {
      const cube = funcs.cube;
      assert.equal(cube(2), 8);
    });
    it('should cube ', () => {
      const cube = funcs.cube;
      assert.equal(cube(-2), -8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should raiseToPower(2,2) => ', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2,2), 4);
    });
    it('should raiseToPower(2,4) => ', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2,4), 16);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should roundNumber(5.5) => 6', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(5.5), 6);
    });
    it('should roundNumber(55.5) => 6', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(55.5), 56);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should roundUp() =>', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(8.1), 9);
    });
    it('should roundUp() =>', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(8.8), 9);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('should addExclamationPoint(hello) => hello!', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('hello'), 'hello!');
    });
    it('should addExclamationPoint(!) => !!', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('!'), '!!')
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('should combineNames(antonio,melendez)', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('antonio','melendez'), 'antonio melendez');
    });
    it('should combineNames(jim,bob)', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('jim','bob'), 'jim bob');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('should getGreeting(steve => hello steve)', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('steve'), 'Hello steve!');
    });
    it('should getGreeting(hello => hello steve)', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('hello'), 'Hello hello!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
    it('should getRectangleArea(2,2)', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(2,2), 4)
    });
    it('should getRectangleArea(2,2)', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(2,3), 6)
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('should getTriangleArea(1,2)', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(1,2), 1);
    });
    it('should getTriangleArea(2,2)', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(2,2), 2);
    });
    it('should getTriangleArea(5,2)', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(5,2), 5);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(0), 0)
    });
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(1), 3.141592653589793);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should getRectangularPrismVolume(1,2,3) => 6', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(1,2,3), 6);
    });
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(1,2,4), 8);
    });
  });

});