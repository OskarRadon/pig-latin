describe("pigLatin", function() {
  it("will add ay to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("takes a single consonant at the beginning of a word and moves it to the end", function () {
    expect(pigLatin("dog")).to.equal("ogday");
  });

});
