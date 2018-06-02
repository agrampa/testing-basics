'use strict';

module.exports = name => {
  if(!name) return null;
  if(typeof(name) !== 'string') return null;

  return `Hello ${name}`;
};