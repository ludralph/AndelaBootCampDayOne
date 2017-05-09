'use strict';

var exports=module.exports={};
exports.dataTypes = function (value)
{
  switch (typeof value)
  {
    case "number":
    {
     if (value < 100){
       return "less than 100";
     }
     else if ( value > 100) {
       return "more than 100";
     }
     else{
       return "equal to 100";
     }
      break;
    }
      case "string":
      {
        return value.length;
        break;
      }
      case "object":
      {
        if(typeof null === "object"){
          return 'no value';
        }
        else if (Array.isArray(value) && value.length >0)
        {
            return value[2];

        }
        break;
      }
      case "undefined":
      {
        if (typeof value === "undefined"){
          return 'no value';
        }

        break;
      }
      case "boolean":
      {
        return value;
        break;
      }

      case "function":
      {
        return value(true);
        break;
      }
      default:
  }

}
