import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { AnswerContext } from '../../contexts/answerContext';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Game() {
    const [answer, setAnswer] = React.useState(sample(WORDS));
    const [guesses, setGuesses] = React.useState([]);
    // running | won | lost
    const [status, setStatus] = React.useState('running');

    console.log({ answer });

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

    function restart() {
        const newAnswer = sample(WORDS);
        setAnswer(newAnswer);
        setGuesses([]);
        setStatus('running');
    }

    return (
        <>
            <button className='restart-button' onClick={() => restart()}>Restart</button>
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
