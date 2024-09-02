import React from 'react';

function GuessInput({addGuess, disabled}) {
    const [guess, setGuess] = React.useState('');
    const input = React.useRef(null);

    // Automatically focus the input when the game starts.
    React.useEffect(() => {
        if (!disabled) {
            input.current.focus();
        }
    }, [disabled]);

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
                ref={input}
                required
                disabled={disabled}
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
