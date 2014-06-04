var makeStack = function() {
  var someInstance = {};
  var size = 0;
  var storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
  alert(someInstance)
};

var stackMethods = {
  size : function(){
    return this.size;
  }
};
