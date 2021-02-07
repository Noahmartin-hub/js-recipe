const inputElement = document.getElementById("input")
const addButton = document.getElementById("addButton")
const cardsContainer = document.getElementById("cardcontainer")

let list = []

if (localStorage ["list"]) {　　//localstorageのlistが存在するなら8行目の処理を行う
  list = JSON.parse (localStorage ["list"])　//localstorageのlistを使えるようにして、listに入れる
}
for ( let i = 0; i < list.length; i++) {　//8行目のlistを基にto do listを構築、listの個数分だけ追加

  const card = document.createElement("div")
  card.textContent = list[i] //
  cardsContainer.append(card)
}

//コメント

addButton.onclick= function() {
  const card = document.createElement("div")
  card.textContent = inputElement.value

  list.push(inputElement.value)
  localStorage["list"]=JSON.stringify(list)
}
