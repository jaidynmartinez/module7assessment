const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let results1Append = perf.stop();  // Stops timer and save time results
perf.start();                     // Starts timer
doublerAppend(largeArray);
let results2Append = perf.stop();
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let results3Append = perf.stop();
perf.start();                     // Starts timer
doublerAppend(smallArray);
let results4Append = perf.stop();
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let results5Append = perf.stop();


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let results1Insert = perf.stop();
perf.start();
doublerInsert(largeArray);
let results2Insert = perf.stop();
perf.start();
doublerInsert(mediumArray);
let results3Insert = perf.stop();
perf.start();
doublerInsert(smallArray);
let results4Insert = perf.stop();
perf.start();
doublerInsert(tinyArray);
let results5Insert = perf.stop();


// console.log('Results for the extraLargeArray');
// console.log("insert", results1Insert.preciseWords);
// console.log("append", results1Append.preciseWords);

// console.log('Results for the largeArray');
// console.log("insert", results2Insert.preciseWords);
// console.log("append", results2Append.preciseWords);

// console.log('Results for the mediumArray');
// console.log("insert", results3Insert.preciseWords);
// console.log("append", results3Append.preciseWords);

// console.log('Results for the smallArray');
// console.log("insert", results4Insert.preciseWords);
// console.log("append", results4Append.preciseWords);

// console.log('Results for the tinyArray');
// console.log("insert", results5Insert.preciseWords);
// console.log("append", results5Append.preciseWords);


const addToZero = (arr) => {
  for (let i=0; i<arr.length; i++) {
    for (let k=0; k<arr.length; k++){
      if (i !==k && arr[i] - arr[k] ===0) {
        return true
      }
    }
  }
  return false
}
console.log(addToZero([0, 2, 4, -2]))

perf.start();
doublerInsert(addToZero);
let resultsaddToZero = perf.stop();

console.log(`Results for areChars are ${resultsaddToZero.preciseWords}`);

// ////////////////////////////// ////////////////////////////// ////////////////////////////
const areCharsUnique = (phrase) => {
  let sortedPhrase = phrase.split("").sort();
  
  for (let i = 0; i < sortedPhrase.length; i++) {
    if (sortedPhrase[i] === sortedPhrase[i + 1]) {
      return false;
    } else if (i + 1 === sortedPhrase.length) {
      return true;
    }
  }
};
console.log(areCharsUnique("doog"))

perf.start();
doublerInsert(areCharsUnique);
let resultsUniqueChars = perf.stop();

console.log(`Results for areChars are ${resultsUniqueChars.preciseWords}`);


// ////////////////////////// ////////////////////////// ////////////////////////
function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
 console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

 perf.start();
 doublerInsert(isPangram);
 let resultsisPangram = perf.stop();
 
 console.log(`Results for areChars are ${resultsisPangram.preciseWords}`);


// ////////////////////////// ////////////////////////// ////////////////////////
 function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

perf.start();
doublerInsert(findLongestWord);
let resultsfindLongestWord = perf.stop();

console.log(`Results for areChars are ${resultsfindLongestWord.preciseWords}`);
