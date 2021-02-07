const plusButton = document.getElementById("plus-button")
const button = document.getElementById("button")
const ryokucha = document.getElementById("ryokucha")
//自販機の状態を表す
let count = 0
plusButton.onclick = function(){
  // count を更新
  count += 100

  // count を表示
  display.textContent = count
}

button.onclick = function(){
  count += 10
  display.textContent = count
}

ryokucha.onclick = function(){
//お金を引く
count -= 150
//商品を出す
}