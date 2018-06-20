import React from 'react'

const Anecdote = ({anecdote, handleClick}) => {
    return(
        <div>
            {anecdote.content} 
            <div>has {anecdote.votes}
            <button onClick={handleClick} >vote</button>
            </div>
        </div>
    )
}

export default Anecdote