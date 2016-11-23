import * as React from "react";
import * as Redux from "Redux";
import * as rr from "react-Redux";

export interface StateProps { }

// export interface TodoProps { done: boolean, text: string; }
// const TodoC : React.StatelessComponent<TodoProps> = p => <li>{p.done}{p.text}</li>

// export interface TodosProps { todos:TodoProps[] }

// export const Todo = rr.connect(null, null, null, {withRef:false})(TodoC)
// const TodosC : React.StatelessComponent<TodosProps> = p => <ul>{p.todos.map(t => <Todo/>)}</ul>
// export const Todos = rr.connect(null, null, null, {withRef:false})(TodosC);


export interface CounterProps { 
    value:Number;
    increment: () => void;
    decrement: () => void;
}

const _Counter : React.StatelessComponent<CounterProps> = p =>
    <div>
        <button onClick={p.decrement}>-</button>
        <span>{p.value}</span>
        <button onClick={p.increment}>-</button>
    </div>
export const Counter = rr.connect(null, null, null, {withRef:false})(_Counter);