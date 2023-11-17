import {useSelector} from "react-redux";

const Header = () => {
    const {count1} = useSelector(state => state.counter1);
    const {count2} = useSelector(state => state.counter2);

    return (
        <div>
            <h1>count1: {count1}</h1>
            <h1>count2: {count2}</h1>
        </div>
    );
};

export {
    Header
}