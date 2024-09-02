import React from 'react';
import Banner from '../Banner';

function WonBanner({ triesNumber }) {
    return (
        <Banner status="happy">
            <p>
                <strong>Congratulations!</strong> Got it in
                {' '}
                <strong>
                    {triesNumber === 1 ? '1 guess' : `${triesNumber} guesses`}
                </strong>.
            </p>
        </Banner>
    );
}

export default WonBanner;
