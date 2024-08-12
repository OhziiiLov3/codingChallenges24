// FIZZ BUZZ
const fizzBuzz = (n) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString());
    }
  }
  return answer;
};

// console.log("Answer",fizzBuzz(3));
// console.log("Answer",fizzBuzz(10));
// console.log("Answer",fizzBuzz(15));

// TwoSum
const twoSum = (nums, target) => {
  let result = {};
  for (let i = 0; i <= nums.length; i++) {
    let diff = target - nums[i];
    if (result[diff] === undefined) {
      result[nums[i]] = i;
    } else {
      return [result[diff], i];
    }
  }
  return;
};
// console.log("Result:",twoSum([2,7,11,15], 9));
// console.log("Result:",twoSum([3,2,4], 6));

// search suggestions
const products = [
  "mobile",
  "mouse",
  "moneypot",
  "monitor",
  "mousepad",
  "moguel",
];
const searchWord = "mogul";

const suggestedProducts = (products, searchWord) => {
  products.sort();

  const result = [];
  //  empty string to construct string for searWord
  let prefix = "";
  for (let char of searchWord) {
    // constructs string as each char is checked
    prefix += char;
    const suggestions = products.filter((product) =>
      product.startsWith(prefix)
    );
    // console.log("Prefix:", prefix);
    // console.log("sugestions:", suggestions);
    result.push(suggestions.slice(0, 3));
  }
  return result;
};

// console.log(suggestedProducts(products, searchWord));


// Reverse Link List - leetcode soultion 
// const reversedLinkList = (head) =>{
//     let prev = null;
//     let current = head;

//     while(current !== null){
//         let nextNode = current.next;
//         current.next = prev;
//         prev = current;
//         current = nextNode;
//     }
//     return prev; 
// }


// Reorder Log Files leetcode-> #937
const logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];

const reorderLogFiles = (logs) =>{
  let letterLogs = [];
  let digitLogs = [];

    // Separate logs into letter-logs and digit-logs
    // This loop iterates over each log entry in the logs array.
  for(let log of logs){
    // extracts data using destructing to get the first element, followed by the rest of the conent
    const [identifier, ...rest] = log.split(' ');
    if(isNaN(rest[0])){
        letterLogs.push({identifier, content: rest.join(' ')});
    }else{
        digitLogs.push(log)
    }
  }


  letterLogs.sort((a,b)=>{
    if(a.content === b.content){
        return a.identifier.localeCompare(b.identifier);
    }
    return a.content.localeCompare(b.content);
});

const sortedLetterLogs = letterLogs.map(log => `${log.identifier} ${log.content}`)
// console.log("Letter Logs Sort:", letterLogs)
return [...sortedLetterLogs, ...digitLogs]
};
// console.log(reorderLogFiles(logs));


// 973. K Closest Points to Origin

const points = [[1,3],[-2,2]];
const k = 1;

const kCloset = (points, k) =>{
    const getSqaureDistance = (point) =>{
       let distance =  point[0] * point[0] + point[1] * point[1];
       return distance;
    }
    points.sort((a,b) => getSqaureDistance(a) - getSqaureDistance(b))
    let result = points.slice(0,k)
    return result
}
// Sorting Method: O(N log N) time complexity due to sorting and O(N) space complexity.

// console.log(kCloset(points, k));

// 242 Valid Anagram 
let s = "anagram";
let t = "nagaram"

const isAnagram = (s,t) =>{
 if(s.length !== t.length){
    return false
 }
 let charCount = {};

for(let char of s){
    charCount[char] = (charCount[char] || 0) +1;
}

for(let char of t){
    if(!charCount[char]){
        return false
    }
    charCount[char]--;
}
return true
}

// console.log(isAnagram(s,t));

// longest prefix leetcode 14 

const strs = ["flower","flow","flight","float","flow"]

const longestCommonPrefix = (strs) => {
if(strs.length === 0) return "";
let commonStr = strs.sort();

let firstStr = commonStr[0];
let lastStr = commonStr[commonStr.length - 1];
let result = '';

for(char in firstStr){
   if(firstStr[char] === lastStr[char]){
    result += firstStr[char];
   }else{
    return result
   }
}
return result
};

console.log(longestCommonPrefix(strs))