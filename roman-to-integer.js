const rome = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
  }
  
  var romanToInt = function(s) {
      let int = 0
      for (let i = 0; i < s.length; i++){
          if (rome[s[i]] < rome[s[i+1]]){
              int -= rome[s[i]]
          } else {
              int += rome[s[i]]
          }
      }
      return int
  };

  //really simple once I stopped over complicating it. My first attempt was splitting the string into pairs first, but it ran into issues. 

  // now that I think of it, my rome object has a lot of unnecessary keys now.
