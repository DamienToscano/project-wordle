import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const remainingGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length;
    const disabled = remainingGuesses === 0;

    function addGuess(guess) {

        if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
            alert('You have no more guesses left!');
            return;
        }

        if (guesses.some(({ value }) => value === guess)) {
            alert('You already guessed that word!');
            return;
        }

        const newGuess = {
            id: crypto.randomUUID(),
            value: guess,
        };
        setGuesses([...guesses, newGuess]);
    }

    return (
        <>
            <GuessResults guesses={guesses} />
            <GuessInput disabled={disabled} addGuess={addGuess} />
        </>
    );
}

export default Game;
