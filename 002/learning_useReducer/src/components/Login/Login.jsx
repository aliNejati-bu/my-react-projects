import {useReducer} from "react";

const emailReducer = (prevState, action) => {
    if (action.type === 'INPUT') {
        return {
            validation: action.value.includes('@'),
            value: action.value
        };
    } else {
        return {
            value: prevState.value,
            validation: prevState.value.includes('@')
        }
    }
};

const passwordReducer = (prevState, action) => {
    if (action.type === 'INPUT') {
        return {
            validation: action.value.length > 5,
            value: action.value
        };
    } else {
        return {
            value: prevState.value,
            validation: prevState.value.length > 5
        }
    }
};


export default ({onLogin}) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        validation: null,
        value: ''
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        validation: null,
        value: ''
    });
    const emailChangeHandler = (ev) => {
        dispatchEmail({
            type: 'INPUT',
            value: ev.target.value
        })
    }

    const emailBlurHandler = () => {
        dispatchEmail({
            type: 'VALIDATION'
        })
    }
    const passwordChangeHandler = (ev) => {
        dispatchPassword({
            type: 'INPUT',
            value: ev.target.value
        });
    }

    const passwordBlurHandler = () => {
        dispatchPassword({
            type: 'VALIDATION'
        });
    }


    return <div className="login-page">
        <div className="form">
            <form className="login-form">
                <input
                    type="email"
                    value={emailState.value}
                    className={emailState.validation === false && 'err'}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    placeholder="email"/>
                <input type="password" placeholder="password"
                       value={passwordState.value}
                       onChange={passwordChangeHandler}
                       className={passwordState.validation === false && 'err'}
                       onBlur={passwordBlurHandler}
                />
                <button disabled={true}
                        className={(!emailState.validation || !passwordState.validation) ? 'disabled' : ''}>login
                </button>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
            </form>
        </div>
    </div>;
}