var DnaTranscriber = function() {};

var replaceObject = {
  C: "G",
  G: "C",
  A: "U",
  T: "A"
}

DnaTranscriber.prototype.toRna = function(input) {
  return input.replace(/C|G|A|T/g, match);

  function match(matched) {
    var str = replaceObject[matched];
    return str;
  }
};

module.exports = DnaTranscriber;
