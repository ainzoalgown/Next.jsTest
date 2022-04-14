import React, {useState} from 'react';
import RedactItem from "./redactItem";
import ReadItem from "./readItem";

const Item = ({todo, deleteTodo}) => {
    const [isRedact, setIsRedact] = useState(false);

    return (isRedact ? <RedactItem setIsRedact={setIsRedact} todo={todo} deleteTodo={deleteTodo}/> : <ReadItem setIsRedact={setIsRedact} todo={todo} deleteTodo={deleteTodo}/>);
};

export default Item;
