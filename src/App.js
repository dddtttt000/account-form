import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form onsubmit noValidate>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
              onchange
            />
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              noValidate
              onchange
            />
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              noValidate
              onchange
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onchange
            />
          </div>
          <div className="createAccount">
            <button type="submit" className>
              Create Account
            </button>
            <small class>Already Have an Account?</small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
