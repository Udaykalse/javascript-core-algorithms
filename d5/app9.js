function canVote(age) {
  const legalAge = 10;
  const isEligible = age >= legalAge;

  if (isEligible) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

console.log(canVote(17))