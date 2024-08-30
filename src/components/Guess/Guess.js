import { useContext } from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { AnswerContext } from '../../contexts/answerContext';

function Cell({ letter, status }) {
    const className = status
        ? `cell ${status}`
        : 'cell';

    return (
        <span className={className}>{letter}</span>
    );
}

function Guess({ word }) {
    const answer = useContext(AnswerContext);
    const check = word ? checkGuess(word, answer) : null;

    return (
        <p className="guess">
            {range(5).map(number => (
                <Cell
                    key={number}
                    letter={check?.[number].letter}
                    status={check?.[number].status}
                />
            ))}
        </p>
    );
}

export default Guess;
