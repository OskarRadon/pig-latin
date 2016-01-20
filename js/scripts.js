var pigLatin = function(input) {
  if (input[0] === 'a' || input[0] === 'e' || input[0] === 'i' || input[0] === 'o' || input[0] === 'u') {
    return input + "ay";
  } else {
    return input.slice(1) + input[0] + ("ay");
  }
};
