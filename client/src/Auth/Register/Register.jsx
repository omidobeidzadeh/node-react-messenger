import React from "react";
import {connect} from 'react-redux'
import userActions from '../../Store/Actions/userActions'
import {Link} from 'react-router-dom'

function Register({ registerUser, success, message }) {
  const showSuccessRegisterMessage = (
    <div className="row">
      <div className="col">
        <div className="alert alert-success">{message}</div>
      </div>
    </div>
  );
  return (
    <div className="sign">
      <div className="container">
        {success && showSuccessRegisterMessage}
        <div className="item">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerUser({
                full_name: document.querySelector("#userName").value,
                email: document.querySelector("#userEmail").value,
                password: document.querySelector("#userPassword").value,
              });
            }}
          >
            <h2>ثبت نام</h2>
            <div className="form-group">
              <input
                type="text"
                id="userName"
                className="form-control"
                placeholder="مانند محمد بهرامی اصل"
                required
                autoFocus
              />
              <button className="btn prepend">
                <i data-eva="person"></i>
              </button>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="userEmail"
                className="form-control"
                placeholder="مانند mohammad.ba@gmail.com"
                required
              />
              <button className="btn prepend">
                <i data-eva="email"></i>
              </button>
            </div>
            <div className="form-group">
              <input
                type="password"
                id="userPassword"
                className="form-control"
                placeholder="********"
                required
              />
              <button className="btn prepend">
                <i data-eva="lock"></i>
              </button>
            </div>
            <button type="submit" className="btn primary">
              ثبت نام
            </button>
            <span>
              اکانت دارید؟
              <Link to="/auth/login">ورود</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    success: state.users.success,
    message: state.users.message
  }
}, dispatch => {
  return {
    registerUser: (payload) => {
      dispatch({
        type: userActions.USER_REGISTER,
        payload
      })
    }
  }
})(Register)
