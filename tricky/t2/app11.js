const scores = [45,72,88,30,55]
const result = scores.map(function(score){
    return score >= 50 ? "Pass" : "Fail"
})

console.log(result)