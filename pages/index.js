import MainLayout from "../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {types} from "../redux/features/types/todo";
import {useState} from "react";
import style from '../styles/index.module.css'
import Item from "./Item/item";

function Index() {
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector((state) => state.todos.items)
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch({type: types.ADD_TODO, payload: {id: Math.random(), title: inputValue}});
        setInputValue('');
    }

    const deleteTodo = (id) => {
        dispatch({type: types.DELETE_TODO, payload: id});
    }

    return (
        <MainLayout>
            <h1 className={style.main__title}>Hello Next.JS!</h1>
            <div className={style.todo}>
                <div className={style.todo__add}>
                    <span>completed</span>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button onClick={addTodo}>добавить</button>
                </div>
                <div className={style.todo__list}>
                    {todos.map((item) => {
                        return <Item key={item.id} todo={item} deleteTodo={deleteTodo}/>
                    })}
                </div>
            </div>
        </MainLayout>
    )
}

export default Index
