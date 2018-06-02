'use strict';

const math = require('../lib/arithmetic.js');
require('jest');

describe('Testing the Arithmentic module', () => {
  describe('Testing the add method', () => {
    it('Should add the two numbers', () => {
      const testAdd = math.add(4, 5);
      expect(testAdd).toBe(9);
    });
    
    it('Should return null if an argument is missing', () => {
      const missingFirst = math.add(null, 5);
      const missingSecond = math.add(5);
      expect(missingFirst).toBeNull();
      expect(missingSecond).toBeNull();
    });
    
    it('Should return null if an argument is a string', () => {
      const stringFirst = math.add('5', 5);
      const stringSecond = math.add(5, '5');
      expect(stringFirst).toBeNull();
      expect(stringSecond).toBeNull();
    });
    
    it('Should return null if an argument is an array', () => {
      const arrayFirst = math.add([], 5);
      const arraySecond = math.add(5, []);
      expect(arrayFirst).toBeNull();
      expect(arraySecond).toBeNull();
    });
    
    it('Should return null if an argument is an object', () => {
      const objectFirst = math.add({}, 5);
      const objectSecond = math.add(5, {});
      expect(objectFirst).toBeNull();
      expect(objectSecond).toBeNull();
    });
    
    it('Should return null if an argument is a Boolean', () => {
      const boolFirst = math.add(true, 5);
      const boolSecond = math.add(5, false);
      expect(boolFirst).toBeNull();
      expect(boolSecond).toBeNull();
    });
  });
  
  describe('Testing the sub method', function() {
    it('Should subtract the two numbers', () => {
      var testSub = math.sub(15, 8);
      expect(testSub).toBe(7);
    });
    
    it('Should return null if an argument is missing', () => {
      const missingFirst = math.sub(null, 8);
      const missingSecond = math.sub(15, null);
      expect(missingFirst).toBeNull();
      expect(missingSecond).toBeNull();
    });
    
    it('Should return null if an argument is a string', () => {
      const stringFirst = math.sub('15', 8);
      const stringSecond = math.sub(15, '8');
      expect(stringFirst).toBeNull();
      expect(stringSecond).toBeNull();
    });
    
    it('Should return null if an argument is an array', () => {
      const arrayFirst = math.sub([], 8);
      const arraySecond = math.sub(15, []);
      expect(arrayFirst).toBeNull();
      expect(arraySecond).toBeNull();
    });
    
    it('Should return null if an argument is an object', () => {
      const objectFirst = math.sub({}, 8);
      const objectSecond = math.sub(15, {});
      expect(objectFirst).toBeNull();
      expect(objectSecond).toBeNull();
    });
    
    it('Should return null if an argument is a Boolean', () => {
      const boolFirst = math.sub(false, 8);
      const boolSecond = math.sub(15, true);
      expect(boolFirst).toBeNull();
      expect(boolSecond).toBeNull();
    });
  });
});