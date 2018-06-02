'use strict';

module.exports = exports = {};

exports.add = (addNum1, addNum2) => {
  if(!addNum1) return null;
  if(!addNum2) return null;
  
  if(typeof(addNum1) !== 'number') return null;
  if(typeof(addNum2) !== 'number') return null;
  
  return addNum1 + addNum2;
};

exports.sub = (subNum1, subNum2) => {
  if(!subNum1) return null;
  if(!subNum2) return null;
  
  if(typeof(subNum1) !== 'number') return null;
  if(typeof(subNum2) !== 'number') return null;
  
  return subNum1 - subNum2;
};