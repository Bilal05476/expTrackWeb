import "../css/AuthComponent.css";
import Google from "../img/google.png";
import { useState } from "react";
import { auth, provider, db, storage } from "../firebase";
import { useStateValue } from "../StateProvider";
import logo from "../img/trackerlogo.png";
import ExSpinner from "./ExSpinner";

const JoinNow = ({ isFlipped, setIsFlipped }) => {
  //user details
  const [joinEmail, setJoinEmail] = useState("");
  const [joinPass, setJoinPass] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinImage, setJoinImage] = useState(null);
  //transactions details
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  //utilities
  const [joinError, setJoinError] = useState("");
  const [toggleForm, setToggleForm] = useState(false);
  const [loading, setLoading] = useState(false);
  // reducer
  const [{ toggleTheme }, dispatch] = useStateValue();

  const onFileChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = await storageRef.child(file.name);
    await fileRef.put(file);
    setJoinImage(await fileRef.getDownloadURL());
    setLoading(false);
  };

  const onToggleTheme = () => {
    dispatch({
      type: "DARK_THEME",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //auth
    auth
      .createUserWithEmailAndPassword(joinEmail, joinPass)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        localStorage.setItem("user", JSON.stringify(result.user));
        //send data to database
        return db.collection("users").doc(result.user.uid).set({
          email: joinEmail,
          name: joinName,
          avatar: joinImage,
          income,
          expense,
        });
      })
      .catch((error) => {
        setJoinError(error.message);
        setJoinEmail(joinEmail);
        setJoinName(joinName);
        setJoinPass(joinPass);
      });
    setJoinEmail("");
    setJoinPass("");
    setJoinName("");
    setJoinImage(null);
    setIncome(0);
    setExpense(0);
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        localStorage.setItem("user", JSON.stringify(result.user));
        //send data to database
        return db.collection("users").doc(result.user.uid).set({
          email: result.user.email,
          name: result.user.displayName,
          avatar: result.user.photoURL,
        });
      })
      .catch((error) => {
        setJoinError(error.message);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="joinNow"
      style={{ color: toggleTheme ? "#424242" : "#fff" }}
    >
      <div className="expense-tracker-sign-heading my-1">
        <img src={logo} alt="logo" />
        <h4>Expense Tracker</h4>
      </div>
      <h2 style={{ fontWeight: "300", fontSize: "1.8rem" }}>
        Join now to stay updated with your financial track
      </h2>
      <div
        className={`${toggleTheme ? "darkTheme" : "lightTheme"} toolTip`}
        style={{ color: toggleTheme ? "#424242" : "#fff" }}
        onClick={onToggleTheme}
      >
        {/* <span className={toggleTheme ? "tooltipTextLight" : "tooltipText"}>
          Toggle theme
        </span> */}
      </div>
      <div
        className="joinNowDetails"
        style={{ background: toggleTheme ? "#fff" : "#484848" }}
      >
        <form onSubmit={onSubmit} className="joinNowForm">
          {!toggleForm ? (
            <>
              <label className="m-0 mt-1" htmlFor="email">
                Email Address
              </label>
              <input
                value={joinEmail}
                onChange={(e) => setJoinEmail(e.target.value)}
                type="email"
                name="email"
                required
                style={{
                  border: toggleTheme ? "1px solid #ccc" : "1px solid #585858",
                  background: toggleTheme ? "#fff" : "#585858",
                  color: toggleTheme ? "#424242" : "#ccc",
                }}
              />
              <label className="m-0 mt-1" htmlFor="password">
                Password
              </label>
              <input
                value={joinPass}
                onChange={(e) => setJoinPass(e.target.value)}
                type="password"
                name="password"
                required
                style={{
                  border: toggleTheme ? "1px solid #ccc" : "1px solid #585858",
                  background: toggleTheme ? "#fff" : "#585858",
                  color: toggleTheme ? "#424242" : "#ccc",
                }}
              />
            </>
          ) : (
            ""
          )}
          {toggleForm ? (
            <>
              <label className="m-0 mt-1" htmlFor="fullName">
                Full Name
              </label>
              <input
                value={joinName}
                onChange={(e) => setJoinName(e.target.value)}
                type="text"
                name="fullName"
                required
                style={{
                  border: toggleTheme ? "1px solid #ccc" : "1px solid #585858",
                  background: toggleTheme ? "#fff" : "#585858",
                  color: toggleTheme ? "#424242" : "#ccc",
                }}
              />{" "}
              <label className="m-0 mt-1" htmlFor="profile">
                Profile
              </label>
              <input
                onChange={onFileChange}
                type="file"
                name="profile"
                accept="image/jpeg, image/png"
                style={{
                  border: toggleTheme ? "1px solid #ccc" : "1px solid #585858",
                  background: toggleTheme ? "#fff" : "#585858",
                  color: toggleTheme ? "#424242" : "#ccc",
                }}
              />
            </>
          ) : (
            ""
          )}
          {joinError && <div className="my-2 joinError">{joinError}</div>}

          <small className="text-center m-4" style={{ fontSize: ".7rem" }}>
            By clicking Agree & Join, you agree to the Expense Tracker
            <span className="policy"> User Agreement, Privacy Policy</span>, and{" "}
            <span className="policy">Cookie Policy.</span>
            <ExSpinner loading={loading} />
          </small>

          {!joinImage || !joinName ? (
            <>
              {toggleForm && (
                <p
                  style={{
                    background: toggleTheme ? "#ccc" : "#585858",
                  }}
                  className="disabledBtn"
                >
                  Agree & Join
                </p>
              )}
            </>
          ) : (
            <>
              {toggleForm && (
                <button type="submit" className="joinNowButton">
                  Agree & Join
                </button>
              )}
            </>
          )}
        </form>
        {!joinEmail || !joinPass ? (
          <>
            {!toggleForm && (
              <p
                style={{
                  background: toggleTheme ? "#ccc" : "#585858",
                }}
                className="disabledBtn"
              >
                Next
              </p>
            )}
          </>
        ) : (
          <>
            {!toggleForm && (
              <button
                onClick={() => setToggleForm(!toggleForm)}
                className="joinNowButton nextButton"
              >
                Next
              </button>
            )}
          </>
        )}
        <div className="partition">
          <div className="line"></div>
          <small>or</small>
          <div className="line"></div>
        </div>
        <button onClick={googleSignIn} className="googleBtn">
          <img src={Google} width="8%" className="mr-2" alt="google" />
          Join With Google
        </button>
        <p className="m-0 text-center">
          Already have an account ?{" "}
          <span onClick={handleClick} className="signInLink">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default JoinNow;
