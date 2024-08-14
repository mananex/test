import { Link } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  return ( 
    <section className="register">
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
          <div className="register__form-field">
            <label className="register__form-field__label">Confirm password</label>
            <input className="register__form-field__input" type="password"/>
          </div>
          <div className="register__form-field">
            <label className="register__form-field__label">Email</label>
            <input className="register__form-field__input" type="email"/>
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
            Register
          </div>
          <Link to="/login" className="register__form__link">Already have an account?</Link>
        </form>
      </div>
    </section>
  );
}
 
export default Register;