import ButtonIcon from 'components/ButtonIcon';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      
      <form>

        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
        </div>
        <br/>
        <br/>

        <div className="login-submit">
          <NavLink to="/admin/boards" activeClassName="active">
            <ButtonIcon text="Logar"/>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;


