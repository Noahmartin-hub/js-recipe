const genkiFunction = function(number){
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n=1; n<=number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

const kisuu = function (n){
  return 2 * n + 1
}

kisuu (5)

const plus = function (x, y) {
  return x + y
}
plus (11, 31) 

const multiply = function (x, y) {
  return x * y 
}

genkiFunction(100)