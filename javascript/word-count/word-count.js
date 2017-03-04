"use strict"

module.exports = class {
   count(words){
     return words.toLowerCase()
     .match(/[\wéпривет\']+/g)
      .reduce((count, word)=>{
        word = word.replace(/^['"]|['"]$/g,'');
        count[word]=(isNaN(count[word]))?1:count[word]+1;
        return count;
     },{})
   }
}
