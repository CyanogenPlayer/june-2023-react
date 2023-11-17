import {useDispatch} from "react-redux";
import {counter2Actions} from "../redux/slices/counter2Slice";

const ComponentTwo = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(counter2Actions.increment())}>incCount2</button>
            <button onClick={() => dispatch(counter2Actions.decrement())}>decCount2</button>
            <button onClick={() => dispatch(counter2Actions.reset(555))}>resetCount2</button>
        </div>
    );
};

export {
    ComponentTwo
}