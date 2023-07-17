import './App.css';
import Container from "./Components/UI/Container/Container";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (data != '') {
                setData('')
            }
        },1000);
 

        return () => {
            clearTimeout(timeOut);
        };
    }, [data]);

    const changeInputHandler = (ev) => {
        setData(ev.target.value);
    };

    return (
        <Container>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Test Type</label>
                <input onChange={changeInputHandler}
                       type="email"
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp"
                       value={data}
                />
            </div>
        </Container>
    );
}

export default App;
