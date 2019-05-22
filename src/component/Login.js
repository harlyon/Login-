import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert';

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false
  };


emailValidate = email => {
  const re = /(.+)@(.+){2,}\.(.+){2,}/;
  return re.test(email);
};

passwordValidate = password => {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(password);
};

checkCase = (password) => {
  const reguxCase = /[A-Z]/;
  return reguxCase.test(password);
}

validation = (e) => {
  e.preventDefault();
  if (this.emailValidate(this.state.email) === false) {
      swal("Error", "All fields must be filled in correctly", "error", {
        dangerMode: true
      });
  }  else {
    this.formSubmit();
  }
};

formSubmit = () => {
  this.setState({ redirect: true });
}

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/landing"} />;
    }
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-header">
                  <h3>Login</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <section id="content" className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-xs-12">
                <div className="page-login-form box">
                  <h3>
                    Login
                  </h3>
                  <form onSubmit={this.validation} className="login-form">
                    <div className="form-group">
                      <div className="input-icon">
                        <i className="lni-user" />
                        <input type="text"
                                id="sender-email"
                                onChange={e => this.setState({ email: e.target.value })}
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                 />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-icon">
                        <i className="lni-lock" />
                        <input type="password"
                                name="password"
                                onChange={e => this.setState({ password: e.target.value })}
                                className="form-control"
                                placeholder="Password"
                                autocomplete="new-password" />
                      </div>
                    </div>
                    <button className="btn btn-common log-btn">Submit</button>
                     <a href="/register">Sign Up</a>
                  </form>
                  <br />
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;