import Vue from 'vue'
const WordCount = require('./models/word_counter.js')

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      words: "",
      count: 0
    },
    methods: {
      countWords: function (){
        //new up a wordcounter from our wordcounter class, passing in this.words
        const wordCount = new WordCount(this.words)
        //call .wordCount on our wordcounter object
        this.count = wordCount.countWords()
        //set the result... somewhere(the count variable in the data)
      }
    }
  })
})
