const WordCounter = function (words) {
  this.words = words;
};

WordCounter.prototype.countWords = function () {
  return this.words.split(' ').length
};

module.exports = WordCounter
