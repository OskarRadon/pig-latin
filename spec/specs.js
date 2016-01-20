describe("pigLatin", function() {
  it("will add ay to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

});
