import { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
    
}

const Editor = (props: Props) => {

    const dispatch = useTodoDispatch();

    const [text, setText] = useState("");

    const onchangeInput= (e : React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    }

    return ( 
        <div>

            <input value={text} onChange={onchangeInput}/>
            <button onClick={onClickButton}>추가</button>
        </div>
    );
}

export default Editor;