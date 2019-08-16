const squareRoot = (num, guess) => {
  if(!guess) {
    g = n / 2.0
  }
  let divider = n / g;
  let newGuess = (d + g) / 2.0;
  if(guess === newGuess) {
    return guess;
  }
  return squareRoot(num, guess);
}

// Take an initial guess at the square root
// Divide our guess into the number
// Use average of g and d as our new guess
// The new guess is the same as the old guess; further guesses
// can get no more accurate so we return this guess
// Recursively solve for closer and closer approximations of the square root
[]