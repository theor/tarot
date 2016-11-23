import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, connect, MapDispatchToPropsFunction } from "react-Redux";
import { createStore, Store, Action, Dispatch, bindActionCreators } from 'redux'
// import { Counter } from "./components/Hello";
// import { todoApp } from "./reducers/TodoApp";

type Actions = "INCR" | "DECR"

interface CounterProps
{
    counter:number;
}
interface DispatchProps
{
    incr:() => void;
    decr:() => void;
}
interface IncrAction extends Action
{

}
let store:Store<CounterProps> = createStore(
    <A extends Action>(state:CounterProps, action:A):CounterProps => {
        switch (action.type as Actions) {
            case 'INCR':
                return { counter: state.counter + 1 };
            case 'DECR':
                return { counter: state.counter - 1 };
            default:
                return state;
        }
    },
    { counter: 0});

const _Counter : React.StatelessComponent<CounterProps & DispatchProps> = p => 
            <div>
                <p>
                    <label>Counter: </label><b>{p.counter}</b>
                </p>
                <button onClick={e =>p.incr() }>INCREMENT</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => p.decr() }>DECREMENT</button>
            </div>;
const creator:MapDispatchToPropsFunction<DispatchProps,{}>= d => 
    bindActionCreators({
        incr: () => ({type:"INCR"}),
        decr: () => ({type:"DECR"})
    }, d);
const Counter = connect<CounterProps, DispatchProps, {}>((x:CounterProps) => x, creator)(_Counter);

ReactDOM.render(
    <Provider store={store}>
       <Counter/>
    </Provider>,
    document.getElementById("example")
);