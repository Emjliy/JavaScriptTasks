'use strict'



function letterCount(word) {
  if( word.length == 0 )
  {
    console.log("---")
    return;
  }
  
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i] == word[j] && i > j) {
        break;
      }
      if (word[i] == word[j]) {
        count++;
      }
    }
    if (count > 0) {
      console.log(`${word[i]} occurs ${count} times`);


    }

  }
}
letterCount('emilyana');

