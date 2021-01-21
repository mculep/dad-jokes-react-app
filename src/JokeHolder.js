import React from 'react';

function JokeHolder(props) {
    return (
        <section>
            <h3>All da jokes:</h3>
            <p>{props.joke}</p>
        </section>
    )
}

export default JokeHolder;