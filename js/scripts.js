var pigLatin = function(input) {
  if (input[0] === 'a' || input[0] === 'e' || input[0] === 'i' || input[0] === 'o' || input[0] === 'u' || input[0] === 'y') {
    return input + "ay"; //if input starts with vowel

  } else if (input[0] === 'q' && input[1] === 'u') {
    return input.slice(2) + input[0] + input[1] + ("ay");//if first two letters are 'qu'

  } else if (input[1] === 'q' && input[2] === 'u') {
    return input.slice(3) + input[0] + input[1] + input[2] + ("ay");// if second two letters are 'qu'

  } else if ((input[0] != 'a' || input[0] != 'e' || input[0] != 'i' || input[0] != 'o' || input[0] != 'u' || input[0] != 'y')
  && (input[1] === 'a' || input[1] === 'e' || input[1] === 'i' || input[1] === 'o' || input[1] === 'u' || input[1] === 'y')) {
    return input.slice(1) + input[0] + ("ay"); //if first letter is a consonant, second letter is vowel

  } else if ((input[0] != 'a' || input[0] != 'e' || input[0] != 'i' || input[0] != 'o' || input[0] != 'u' || input[0] != 'y')
  && (input[1] != 'a' || input[1] != 'e' || input[1] != 'i' || input[1] != 'o' || input[1] != 'u' || input[1] != 'y')
  && (input[2] === 'a' || input[2] === 'e' || input[2] === 'i' || input[2] === 'o' || input[2] === 'u' || input[2] === 'y')) {
    return input.slice(2) + input[0] + input[1] + ("ay"); //if first two letters are consonants and third letter is vowel

  } else {
    return input.slice(3) + input[0] + input[1] + input[2] + ("ay"); // if first three letters are consonants
  };
};
