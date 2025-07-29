import React, { useReducer } from 'react'

const Day7 = () => {
    function reduser(count, action) {
        if (action.type === 'inc') {
            return count + 1
        } else if (action.type === 'dec') {
            return count - 1
        }
        else if (action.type === 'reset') {
            return 0
        } else {
            return count
        }
    }
    const [count, dispatch] = useReducer(reduser, 0)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: 'inc' })}>incre</button>
            <button onClick={() => dispatch({ type: 'dec' })}>dec</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default Day7