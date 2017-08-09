const assert = require('chai').assert;
const funcs = require('../src/project-4.js');
const expect = require('chai').expect;
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-4 Functions', () => {
    describe('multiplyaRGUMENTS', () => {
            const multiplyArguments = funcs.multiplyArguments;
        it('Should be a function', () => {
            assert.typeOf(multiplyArguments, 'function');
        });
        it('should be 0',() => {
            expect(multiplyArguments()).to.be.equal(0);
        });
        it('should be 10', () => {
            assert.equal(multiplyArguments(5,2), 10);
        });
    });

    describe('invokeCallback', () => {
        const invokeCallback = funcs.invokeCallback;
        it('Should be a function', () => {
            assert.typeOf(invokeCallback, 'function');
        });
    });

    describe('sumArray', () => {
        const sumArray = funcs.sumArray;
        it('Should be a function', () => {
            assert.typeOf(sumArray, 'function');
        });
    });

    describe('forEach', () => {
        const forEach = funcs.forEach;
        it('Should be a function', () => {
            assert.typeOf(forEach, 'function');
        });
    });

    describe('map', () => {
        const map = funcs.map;
        it('Should be a function', () => {
            assert.typeOf(map, 'function');
        });
    });

    describe('getUserConstructor', () => {
        const getUserConstructor = funcs.getUserConstructor;
        it('Should be a function', () => {
            assert.typeOf(getUserConstructor, 'function');
        });
    });

    describe('addPrototypeMethod', ()  => {
        const addPrototypeMethod = funcs.addPrototypeMethod;
        it('Should be a function', () => {
            assert.typeOf(addPrototypeMethod, 'function');
        });
    });

    describe('addReverseString', () => {
        const addReverseString = funcs.addReverseString;
        it('Should be a function', () => {
            assert.typeOf(addReverseString, 'function');
        });
    });

    describe('nFactorial', () => {
        const nFactorial = funcs.nFactorial;
        it('Should be a function', () => {
            assert.typeOf(nFactorial, 'function');
        });
    });

    describe('cacheFunction', () => {
        const cacheFunction = funcs.cacheFunction; 
        it('Should be a function', () => {
            assert.typeOf(cacheFunction, 'function');
        });
    });
    
});