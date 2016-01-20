var pigLatin = function(input) {
  if (input[0] === 'a' || input[0] === 'e' || input[0] === 'i' || input[0] === 'o' || input[0] === 'u') {
    return input + "ay";
  } else {
    if (input[1] === 'a' || input[1] === 'e' || input[1] === 'i' || input[1] === 'o' || input[1] === 'u') {
      return input.slice(2) + input[0,1] + ("ay");
    } else {
    return input.slice(1) + input[0] + ("ay");
    };
  };
};
