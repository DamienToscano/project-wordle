import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessesList from '../GuessesList/GuessesList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    function addGuess(guess) {
        const newGuess = {
            id: crypto.randomUUID(),
            value: guess,
        };
        setGuesses([...guesses, newGuess]);
    }

    return (
        <>
            <GuessesList guesses={guesses} />
            <GuessInput addGuess={addGuess} />
        </>
    );
}

export default Game;
