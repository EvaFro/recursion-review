// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  // Obj: {}
  // Array: []
  // string: ""
  // values: values

  // pairs: value:value 

  // spaces: " " 
  while (json[0] === ' ') { json = json.substr(1); }
  while (json[json.length - 1] === ' ') { 
    json = json.substr(0, json.length - 1);
  }
  // json.substr(1)
  parseJSON(json);
  // for an object
  if (json[0] === '{' && json[json.length - 1] === '}') {
    var result = {};
  }
  
  // 4 an array
  if (json[0] === '[' && json[json.length - 1] === ']') {

  }
    
};

//'{"genre":"comedy","movies":[{"name":"Elf","score":8.7},{"name":"Spaceballs","score" : 7.7}]}'
