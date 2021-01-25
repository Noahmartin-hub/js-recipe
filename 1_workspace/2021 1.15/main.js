const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")
const feedback=document.getElementById("feedback")

button1.onclick = function() {
  feedback.textContent = "こんなに下手じゃねえわｗ"
}
button2.onclick = function() {
  feedback.textContent = "もとうまいんだよなあ"
}
button3.onclick = function() {
  feedback.textContent = "あたりでーすわーい"
}

const noah = {
  name:"のあ",
  age:21,
  birthDay:"1999/09/02",
  hobbies:["basketball","workout","golf"],

}

console.log(Noah.name)
console.log(Noah.age)
console.log(Noah.birthDay)

const character = {
  name:"martin" ,
  mother:{
    name:"garrix"
  },
  hobbies["music","dancing"],
}

const multyply = function(a, b) {
  return a * b
}
