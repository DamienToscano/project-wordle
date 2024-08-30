import React from 'react';
import { range } from '../../utils';

function Guess({word}) {
    return (
        <p className="guess">
            {range(5).map(number => (
                <span key={number} className="cell">
                    { word ? word[number] : undefined }
                </span>
            ))}
        </p>
    );
}

export default Guess;
