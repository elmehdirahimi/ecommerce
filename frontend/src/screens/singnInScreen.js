import React, { useEffect, useState } from "react";
import { set } from "mongoose";
import { Link } from "react-router-dom";
import signin from "../actions/signInAction";
import { useSelector, useDispatch } from "react-redux";

const UserSignInScreen = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = useSelector((state) => state.signIn);
  const { loading, userInfo, error } = signIn;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  return (
    <form
      onSubmit={submitHandler}
      className="modal-dialog"
      role="document"
      style={{ "padding-top": "50px" }}
    >
      {loading && (
        <div class="d-flex justify-content-center text-center" id="pluswrap">
          <div class="spinner-border text-secondary plus" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
      <div className="modal-content">
        <div className="modal-header text-center">
          <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body mx-3">
          <div className="md-form mb-5">
            <i className="fas fa-envelope prefix grey-text" />
            <input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="defaultForm-email"
              className="form-control validate"
            />
            <label
              data-error="wrong"
              data-success="right"
              htmlFor="defaultForm-email"
            >
              Your email
            </label>
          </div>
          <div className="md-form mb-4">
            <i className="fas fa-lock prefix grey-text" />
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="defaultForm-pass"
              className="form-control validate"
            />
            <label
              data-error="wrong"
              data-success="right"
              htmlFor="defaultForm-pass"
            >
              Your password
            </label>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-center">
          <button className="btn btn-default">Login</button>
        </div>
      </div>
    </form>
  );
};

export default UserSignInScreen;
