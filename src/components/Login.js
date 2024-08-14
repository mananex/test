import { Link } from "react-router-dom";
import "../styles/register.css";

const Login = () => {
  return ( 
    <section className="register login">
      <div className="dark__overlay"></div>
      <div className="wrapper">
        <form className="register__form">
          <div className="register__form-field">
            <label className="register__form-field__label">Login</label>
            <input className="register__form-field__input" type="text"/>
          </div>
          <div className="register__form-field">
            <label className="register__form-field__label">Password</label>
            <input className="register__form-field__input" type="password"/>
          </div>
          <div className="register__form__submit">
            <div className="register__form__submit__blocks">
              <div className="register__form__submit__blocks-row">
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
              </div>
              <div className="register__form__submit__blocks-row">
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
              </div>
              <div className="register__form__submit__blocks-row">
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
                <div className="register__form__submit__blocks-block"></div>
              </div>
            </div>
            Login
          </div>
          <Link to="/register" className="register__form__link">Dont have an account? Register!</Link>
        </form>
      </div>
    </section>
  );
}
 
export default Login;