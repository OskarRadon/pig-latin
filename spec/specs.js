describe("pigLatin", function() {
  it("will add ay to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("takes a single consonant at the beginning of a word, moves it to the end and adds ay", function () {
    expect(pigLatin("dog")).to.equal("ogday");
  });

  it ("takes two consecutive consonants at the begining of a word, moves it to the end and adds ay", function () {
    expect(pigLatin("twenty")).to.equal("entytway");
  });

  it ("takes three consecutive consonants at the begining of a word, moves it to the end and adds ay", function(){
    expect(pigLatin("three")).to.equal("eethray");
  });

  it ("takes first two letters when they are 'qu', moves them to the end and add 'ay'", function(){
    expect(pigLatin("question")).to.equal("estionquay");
  });

  it ("takes first three letters if first is consonant, second is 'qu', moves them to the end and add 'ay'", function(){
      expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it ("takes words that start with the letter 'y' and treats that letter 'y' as a consonant", function(){
      expect(pigLatin("yellow")).to.equal("ellowyay");
  });

  it ("takes words with 'y' as the second letter and treats that letter 'y' as a vowel", function(){
      expect(pigLatin("pyro")).to.equal("yropay");
  });

});
