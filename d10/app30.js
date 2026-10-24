const isPalindrome = (s) => s === [...s].reverse().join("");
console.log(isPalindrome("madam"), isPalindrome("hello"));
