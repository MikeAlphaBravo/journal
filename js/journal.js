function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  return body.split(" ").length;
};

Entry.prototype.vowelCount = function(body) {
  var vowels = body.match(/[AEIOUaeiou]/gi);
  return vowels === null ? 0 : vowels.length;
};

Entry.prototype.consonantCount = function(body) {
  var consonants = body.replace(/[AEIOUaeiou]/gi, '');
  return consonants === null ? 0 : consonants.length;
};

Entry.prototype.getTeaser = function(body) {
  var arry = body.split(/([.!?])\s/);
  var sentences = [];
  for (var i=0; i < arry.length; i+=2) {
    if (i < arry.length-1) {
      sentences.push(arry[i] + arry[i+1]);
    } else {
      sentences.push(arry[i]);
    }
  }
  var sentence = sentences[0].split(' ');
  if (sentence.length >= 8) {
    return sentence.slice(0, 8).join(' ') + '...';
  } else {
    return sentence.join(' ');
  }
};


exports.entryModule = Entry;
