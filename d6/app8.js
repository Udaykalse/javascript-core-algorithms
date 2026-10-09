function isAnagram(str1, str2) {
  let cleaned_S1 = str1.split("").reverse().sort().join("");
  let cleaned_S2 = str2.split("").reverse().sort().join("");
  return cleaned_S1 === cleaned_S2
}

console.log(isAnagram("listen", "silent"))
