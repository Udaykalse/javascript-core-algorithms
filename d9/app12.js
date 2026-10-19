function PalindromeString(str)
{
    const isPalindrome = str.split('').reverse().join('')
    return str === isPalindrome

}

console.log(PalindromeString('madam'))