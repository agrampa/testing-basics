'use strict';

const greet = require('../lib/greet.js');
require('jest');

describe('Testing the Greet module', () => {
  it('Should return the input along with "Hello"', () => {
    const testGreet = greet('Allie');
    expect(testGreet).toEqual('Hello Allie');
  });
  
  it('Should return null if not given an argument', () => {
    const noArg = greet();
    expect(noArg).toBeNull();
  });
  
  it('Should return null if the argument is a number', () => {
    const numArg = greet(5);
    expect(numArg).toBeNull();
  });
  
  it('Should return null if the argument is an array', () => {
    const arrayArg = greet([]);
    expect(arrayArg).toBeNull();
  });
  
  it('Should return null if the argument is an object', () => {
    const objectArg = greet({});
    expect(objectArg).toBeNull();
  });
  
  it('Should return null if the argument is a Boolean', () => {
    const booleanArgTrue = greet(true);
    const booleanArgFalse = greet(false);
    expect(booleanArgTrue).toBeNull();
    expect(booleanArgFalse).toBeNull();
  });
});