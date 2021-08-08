import "../css/AuthComponent.css";
import { useState } from "react";
import { auth, db } from "../firebase";
import { useStateValue } from "../StateProvider";
import logo from "../img/trackerlogo.png";

const SignIn = ({ isFlipped, setIsFlipped }) => {
  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signError, setSignError] = useState("");
  const [{ user, toggleTheme }, dispatch] = useStateValue();

  const onToggleTheme = () => {
    dispatch({
      type: "DARK_THEME",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //validate data from database
    auth
      .signInWithEmailAndPassword(signEmail, signPass)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        localStorage.setItem("user", JSON.stringify(result.user));
        const getUserData = db.collection("users").doc(user.uid);
        getUserData.get().then((doc) => {
          dispatch({
            type: "USER_DETAILS",
            userDetails: doc.data(),
          });
          localStorage.setItem("userDetails", JSON.stringify(doc.data()));
        });
      })
      .catch((error) => {
        setSignError(error.message);
      });
    setSignEmail("");
    setSignPass("");
    setSignError("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="signIn" style={{ color: toggleTheme ? "#424242" : "#fff" }}>
      <div className="expense-tracker-sign-heading my-1">
        <img src={logo} alt="logo" />
        <h4>Expense Tracker</h4>
      </div>
      <div
        className={`${
          toggleTheme ? "darkTheme mb-2" : "lightTheme mb-2"
        } toolTip`}
        style={{ color: toggleTheme ? "#424242" : "#fff" }}
        onClick={onToggleTheme}
      >
        {/* <span className={toggleTheme ? "tooltipTextLight" : "tooltipText"}>
          Toggle theme
        </span> */}
      </div>
      <form
        onSubmit={onSubmit}
        className="signInForm"
        style={{ background: toggleTheme ? "#fff" : "#484848" }}
      >
        <h3 style={{ fontSize: "1.9rem" }} className="mb-0">
          Sign in
        </h3>
        <small className="mt-1 mb-3">
          Stay updated with your financial track
        </small>
        <input
          value={signEmail}
          onChange={(e) => setSignEmail(e.target.value)}
          type="text"
          placeholder="Email or phone"
          required
          style={{
            border: toggleTheme ? "1px solid #ccc" : "1px solid #585858",
            background: toggleTheme ? "#fff" : "#585858",
            color: toggleTheme ? "#424242" : "#ccc",
          }}
        />
        <input
          value={signPass}
          onChange={(e) => setSignPass(e.target.value)}
          type="password"
          placeholder="Password"
          style={{
            border: toggleTheme ? "1px solid #ccc" : "1px solid #585858",
            background: toggleTheme ? "#fff" : "#585858",
            color: toggleTheme ? "#424242" : "#ccc",
          }}
        />
        {signError && <div className="my-1 signError">{signError}</div>}

        <span className="signInLink my-1 mb-4">{/* Forgot Password? */}</span>
        {!signEmail || !signPass ? (
          <p
            className="disabledBtn"
            style={{
              background: toggleTheme ? "#ccc" : "#585858",
            }}
          >
            Sign in
          </p>
        ) : (
          <button type="submit" className="joinNowButton">
            Sign in
          </button>
        )}
      </form>

      <p className="m-0 my-5 text-center">
        New here ?{" "}
        <span onClick={handleClick} className="signInLink">
          Join Now
        </span>
      </p>
    </div>
  );
};

export default SignIn;
