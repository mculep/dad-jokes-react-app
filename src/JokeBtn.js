import React from 'react';

function JokeBtn(props) {
    return (
        < nav >
            <button onClick={props.getJoke}> Dad Jokes </button>
        </nav >
    )
}

export default JokeBtn;