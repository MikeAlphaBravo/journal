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
  $('#time').text(moment());
});
