# Pig Latin App

#### Epicodus week 3 project, 1/20/16

#### By Chris Young and Oskar Radon

## Description

Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray".

Here are the rules of Pig Latin:

* For words that start with a vowel, add "ay" to the end.
* For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay". (If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)
* For words that start with "y", treat the "y" as a consonant.

## Specs
* will add ay to the end of words that start with a vowel
* takes a single consonant at the beginning of a word, moves it to the end and adds 'ay'
* takes two consecutive consonants at the beginning of a word, moves it to the end and adds 'ay'
* takes three consecutive consonants at the beginning of a word, moves it to the end and adds 'ay'
* takes first two letters when they are 'qu', moves them to the end and add 'ay'
* takes first three letters if first is consonant, second is 'qu', moves them to the end and add 'ay'
* takes words that start with the letter 'y' and treats that letter 'y' as a consonant
* takes words with 'y' as the second letter and treats that letter 'y' as a vowel

## Technologies Used

HTML, JS, jQuery, CSS, Bootstrap, Mocha and Chai.

### License

MIT

Copyright (c) 2016 CY and OR
