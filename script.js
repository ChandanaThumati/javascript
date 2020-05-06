

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var i = 0;
var len = names.length;
for (; i < len; i++) {
    var n =names[i]
    var res = n.charAt(0)


  if ((res=='j' || res=='J') ){
    console.log("GoodBye" + " " + names[i]);
   
  } 
  else {
    console.log("Hello" + " " + names[i]);
    
  }
}