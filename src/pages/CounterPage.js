import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";
import { produce } from "immer";

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT  = 'decrement-count';
const VALUE_CHANGE = 'change-value';
const ADD_VALUE = 'add-value'

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1
       return
    case DECREMENT_COUNT:
      state.count = state.count - 1
      return
    case VALUE_CHANGE:
         state.valueToAdd = action.payload
         return
    case ADD_VALUE:
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0
        return
    default:
      return;

    }
  }

function CounterPage ({ initialCount}) {
const [state, dispatch] = useReducer(produce(reducer), {
  count: initialCount,
  valueToAdd: 0
})
 
 
const incrementCount = () => {
  dispatch({
    type: INCREMENT_COUNT
  });
}

const decrementCount = () => {
  dispatch({
    type: DECREMENT_COUNT
  });
}

const handleChange = (e) => {
  const value = parseInt(e.target.value) || 0;
  dispatch({
    type: VALUE_CHANGE,
    payload: value
  });
  
}

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch({
    type: ADD_VALUE,
  });
}

  return (
   <Panel className="m-3">
      <h1 className="text-lg mb-3">
        Count is {state.count}
      </h1>
      <div className="flex flex-row mb-3">
      <Button outline primary onClick={incrementCount}>
        Increment
      </Button>
      <Button outline primary onClick={decrementCount}>
        Decrement
      </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="mb-3 mr-3">Add a lot</label>
        <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3bg-gray-50 border border-gray-300 mb-3" />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage;
