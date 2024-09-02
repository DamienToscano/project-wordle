import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { AnswerContext } from '../../contexts/answerContext';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [status, setStatus] = React.useState('running');

    function addGuess(guess) {
        if (guesses.some(({ value }) => value === guess)) {
            alert('You already guessed that word!');
            return;
        }

        const newGuess = {
            id: crypto.randomUUID(),
            value: guess,
        };

        const nextGuesses = [...guesses, newGuess];
        setGuesses(nextGuesses);

        if (guess.toUpperCase() === answer) {
            setStatus('won');
        } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
            setStatus('lost');
        }
    }

    return (
        <>
            <AnswerContext.Provider value={answer}>
                <GuessResults guesses={guesses} />
            </AnswerContext.Provider>
            <GuessInput disabled={status !== 'running'} addGuess={addGuess} />
            {status === 'won' && <WonBanner triesNumber={guesses.length} />}
            {status === 'lost' && <LostBanner answer={answer} />}
        </>
    );
}

export default Game;
