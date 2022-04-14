import React, {useState} from 'react';
import style from "../../styles/index.module.css";
import {useDispatch} from "react-redux";
import {types} from "../../redux/features/types/todo";

const RedactItem = ({todo, setIsRedact, deleteTodo}) => {
    const [inputValue, setInputValue] = useState(todo.title);
    const dispatch = useDispatch();

    return (
        <>
            <ul key={todo.id} className={style.todo__item}>
                <li><input type="checkbox"/></li>
                <li
                    onClick={() => setIsRedact(true)}
                    className={style.todo__item_title}
                    title={'Нажмите, чтобы редактировать'}
                >
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </li>
                <li><div className={style.todo__delete} onClick={() => {
                    dispatch({type: types.REDACT_TODO, payload: {id: todo.id, title: inputValue}});
                    setIsRedact(false);
                }}>Принять</div></li>
            </ul>
        </>
    );
};

export default RedactItem;
