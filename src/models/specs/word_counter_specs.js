const assert = require('assert')
const WordCounter = require('../word_counter.js')

describe('wordCounter', function () {

  let wordCounter

  beforeEach(function(){
    wordCounter = new WordCounter("Hello Heather")
  })

  it('should count the number of words', function(){
    const actual = wordCounter.countWords();
    assert.strictEqual(actual, 2)
  })
});
