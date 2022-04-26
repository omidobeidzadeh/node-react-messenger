import React, { useEffect } from "react";
import userActions from '../../Store/Actions/userActions'
import { Link, Navigate } from "react-router-dom";
import {connect} from 'react-redux'

function Login({doLogin, success, message, isUserLoggedIn}) {

  const showLoginFaildMessage = (
    <div className="row">
      <div className="col">
        <div className="alert alert-danger">{message}</div>
      </div>
    </div>
  );
  
  return (
    <>
      {isUserLoggedIn && <Navigate to={'/dashbord'} />}
      <div className="sign">
        <div className="container">
          {success === false && showLoginFaildMessage}
          <div className="item">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                doLogin({
                  email: document.querySelector("#email").value,
                  password: document.querySelector("#password").value,
                });
              }}
            >
              <h2>ورود</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="ایمیل"
                  required
                  autoFocus
                />
                <button className="btn prepend">
                  <i data-eva="person"></i>
                </button>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="کلمه عبور"
                  required
                />
                <button className="btn prepend">
                  <i data-eva="lock"></i>
                </button>
              </div>
              <button type="submit" className="btn primary">
                ورود
              </button>
              <span>
                {" "}
                ثبت نام نکرده اید؟
                <Link to="/auth/register">ثبت نام</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(state => {
  return {
    success: state.users.success,
    message: state.users.message,
    isUserLoggedIn: state.users.isUserLoggedIn,
  };
}, dispatch => {
  return {
    doLogin: (payload) => {
      dispatch({ type: userActions.USER_LOGIN, payload });
    },
  };
})(Login);
