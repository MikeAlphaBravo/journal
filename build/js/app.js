(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var wordCountOutput = newEntry.wordCount(body);
    var vowelCountOutput = newEntry.vowelCount(body);
    var consonantCountOutput = newEntry.consonantCount(body);
    var firstSentence = newEntry.getTeaser(body);
    $('#journal-entry').append(body);
    $('#word-count').append('<li>' + wordCountOutput + '</li>');
    $('#vowel-count').append('<li>' + vowelCountOutput + '</li>');
    $('#consonant-count').append('<li>' + consonantCountOutput + '</li>');
    $('#first-sentence').append('<p>' + firstSentence + '</p>');
  });
});

$(document).ready(function(){
  console.log("hello");
  $('#time').text(moment());
});

},{"./../js/journal.js":1}]},{},[2]);
