import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = (props) => {
    return (
        <Card>
            <div>Login</div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email"/>

            <label htmlFor="password">Password</label>
            <input type="text" id="password"/>
            <Button>Login</Button>
        </Card>
    );
}

export default Login;