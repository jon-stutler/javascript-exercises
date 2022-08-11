const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) { // This one works!
  let total = 0;
  for(let i in a) {
    total += a[i];
  };
	return total;
};

const multiply = function(a) { // This one works now :)
  let total = 1;
  for(let i in a) {
    total *= a[i];
  };
  return total;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
  if (a === 0 || a === 1)
  return 1;
  for (let i = a-1; i >= 1; i--) {
    a *= i;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
