import React from 'react';
import style from "../../styles/index.module.css";

const ReadItem = ({todo, deleteTodo, setIsRedact}) => {
    return (
        <>
            <ul key={todo.id} className={style.todo__item}>
                <li><input type="checkbox"/></li>
                <li
                    onClick={() => setIsRedact(true)}
                    className={style.todo__item_title}
                    title={'Нажмите, чтобы редактировать'}
                >
                    {todo.title}
                </li>
                <li><div className={style.todo__delete} onClick={() => deleteTodo(todo.id)}>x</div></li>
            </ul>
        </>
    );
};

export default ReadItem;
