import React, { useReducer } from 'react'

const Day8 = () => {
    let initialValue = {
        todos: [],
        input: ''
    }

    function reduser(state, action) {
        if (action.type == 'add') {
            return {
                ...state,
                input: action.payload
            }
        }
        else if (action.type == 'add_todo') {
            if (state.input.trim() == '') return;
            else {
                return {
                    ...state,
                    todos: [...state.todos, state.input],
                    input: ''
                }
            }
        }
    }

    const [state, dispatch] = useReducer(reduser, initialValue)

    return (
        <div>
            <input type="text" value={state.input} onChange={(e) => dispatch({ type: 'add', payload: e.target.value })} />
            <button onClick={() => dispatch({ type: 'add_todo' })}>click</button>
            {
                state.todos.map((a)=>{
                    return(
                        <h4>{a}</h4>
                    )
                })
            }


        </div>
    )
}

export default Day8