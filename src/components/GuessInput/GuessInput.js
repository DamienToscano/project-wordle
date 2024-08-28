import React from 'react';

function GuessInput({addGuess}) {
    const [guess, setGuess] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        addGuess(guess);
        setGuess('');
    }

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={handleSubmit}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                id="guess-input"
                type="text"
                pattern="[a-zA-Z]{5}"
                title='Please enter a 5-letter word.'
                value={guess}
                onChange={event => {
                    const nextGuess = event.target.value.toUpperCase();
                    setGuess(nextGuess);
                }}
            />
        </form>
    );
}

export default GuessInput;
