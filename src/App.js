import React, {useRef} from 'react';

const App = () => {
    const name = useRef();
    const age = useRef();

    const save = (e) => {
        e.preventDefault()

        // console.log(e.target.name.value);
        // console.log(e.target.age.value);

        console.log(name.current.value);
        console.log(age.current.value);

        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={save}>
                <input type="text" placeholder={'name'} ref={name}/>
                <input type="text" placeholder={'age'} ref={age}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default App;