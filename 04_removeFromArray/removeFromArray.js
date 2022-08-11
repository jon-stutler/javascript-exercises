const removeFromArray = function(keep, ...remove) {

  return keep.filter(x => !remove.includes(x));

};


// Do not edit below this line
module.exports = removeFromArray;
