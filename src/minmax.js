'use strict';

var exports=module.exports={};
exports.findMinMax = function (value)
{
  var minMax = [];
  let largest = findMaximum(value);
  let smallest = findMinimum(value);
  if (largest === smallest){
    minMax.push(smallest);
    return minMax;
  }
  else{
    minMax.push(smallest);
    minMax.push(largest);
    return minMax;
  }

}

function findMaximum(array)
{
  if (Array.isArray(array)){
    var max = Number.NEGATIVE_INFINITY,
        arrLength = array.length,
        counter;

    for (counter=0;counter<arrLength;counter++)
    {
        if (array[counter] > max)
        {
            max = array[counter];
        }
    }
    return max;
  }
  else {
    return "Argument must be an Array";
  }
}

function findMinimum(array)
{
  if (Array.isArray(array)){
    var min = Number.POSITIVE_INFINITY,
        arrLength = array.length,
        counter;

    for (counter=0;counter<arrLength;counter++)
    {
        if (array[counter] < min)
        {
            min = array[counter];
        }
    }
    return min;

  }
  else{
    return "Argument must be an array"
  }
}
