const imageElement = document.getElementById("cat-image")

// 指定したサーバーにデータを取りに行く
fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    // fetch がおわったら１つめの then の中の関数を実行し、
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    // １つめが終わったら２つめの then の中の関数を実行します。
    imageElement.src = data.message // 画像を表示する
  })
