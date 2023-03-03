/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++){
    newArray.push(callbackFn(this[i], i, this));
  }
  return newArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++){
    if (callbackFn(this[i], i, this)){
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++){
    if (callbackFn(this[i], i, this)) return true;
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++){
    if (!callbackFn(this[i], i, this)) return false;
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let accumulator = (initialValue === undefined ? undefined : initialValue);
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined){
      accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++){
    if (this[i] === searchElement) return true;
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length; i++){
    if (this[i] === searchElement) return i;
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for (let i = this.length - 1; i >= 0; i--){
    if (this[i] === searchElement) return i;
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  const keys = [];
  for (let key in object){
    if (object.hasOwnProperty(key)) keys.push(key);
  }
  return keys;
};

// VALUES //
Object.myValues = function(object) {
  const values = [];
  for (let key in object){
    if (object.hasOwnProperty(key)) values.push(object[key]);
  }
  return properties;
};