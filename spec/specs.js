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
});
