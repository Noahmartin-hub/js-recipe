new Vue({
  el: "#app",
  data: {
    count: 0,
    memos: ["めも１", "めも２", "めも３", "ヒカキン"],
    inputText: "",
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
    hikakin: function() {
      this.memos.push("ヒカキン")
    },
    removeMemo0: function() {
      this.memos.splice(0, 1)
    },
    addMemo: function() {
      this.memos.push(this.inputText)
    },
  },
})
