// Write a function that takes a string as input and returns the number of vowels in the string.
function getVowels(word){
    const count=word.match(/[a,e,i,o,u]/gi).length
    return count
    
}
let word="orishaba"
console.log(getVowels(word))


// Write a function that takes an array of numbers as input and returns the sum of all the numbers.
function get_sum(){
    let nums=[1,2,3,4,5,6]
   sum =0;
   for (let i =0;i<=nums.length;i++){
    sum+=nums[i];
    
   }
   return sum;
}
console.log(get_sum(nums))
   


// Write a function that takes two numbers as input and returns true if their sum is greater than 100, and false otherwise.
function greatNumbers(number1,number2){
    let sum =number1+number2
    if(sum>100){
        return "true"
    }else {
        return "false"
    }
}
console.log(greaterNum(30,40));
// Write a function that takes in a array of numbers as a parameter and returns the second largest number in the array
function getPalindrome(name){
    const len = name.length;    
    for (let i = 0; i < len / 2; i++) {
        if (name[i] == name[len - 1 - i]) {
            return "true";

        }
        else{
           return "false";
        }
}
}
console.log(getPalindrome("noon"));






