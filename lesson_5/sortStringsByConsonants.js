/**
 * 
 * - Remove the spaces from the input string
- Initialize a count to zero
- Initialize a temp string to an empty string
- Iterate through the input string. For each letter:
  - If the letter is a consonant, concatenate it to the temp string
  - If the letter is a vowel:
    - If the temp string has has a length greater than 1 AND the temp string has a length greater than the current count, set the count to the length of the temp string
    - Reset the temp string to an empty string
- Return the count
 */