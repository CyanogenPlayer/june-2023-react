import {useDispatch} from "react-redux";
import {counter1Action} from "../redux/slices/counter1Slice";

const ComponentOne = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(counter1Action.increment())}>incCount1</button>
            <button onClick={() => dispatch(counter1Action.decrement())}>decCount1</button>
            <button onClick={() => dispatch(counter1Action.reset())}>resetCount1</button>
        </div>
    );
};

export {
    ComponentOne
}