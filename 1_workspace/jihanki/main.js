new Vue({
  //elでVueを適用する範囲を選択
  el: "#app",
  data: {
    totalMoney: 0,
  },
  methods: {
    insertCoin100: function() {
      this.totalMoney += 100
      lines:[]
    },
    buyTea: function(){
        if(this.totalMoney >=120){
            this.totalMoney -=120
            this.lines.push("お茶を買いました。")
        }else{
            this.lines.push("お金が足りません。")
        },
        
        

    },
  },
})
