import React, { useState } from "react";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);

  return (
    <div className="row">
      <form className="col s4">
        <div className="input-field">
          <div className="label">Email</div>
          <input
            value={email}
            onChange={e => {
              setEmail(e);
            }}
          />
        </div>
        <div className="input-field">
          <div className="label">Name</div>
          <input
            vale={password}
            onChange={e => {
              setPassword(e);
            }}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
