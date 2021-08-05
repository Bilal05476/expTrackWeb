import { NavLink, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import "../css/AuthComponent.css";
const Account = () => {
  const [{ toggleTheme }, dispatch] = useStateValue();

  const history = useHistory();

  const signOut = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result,
        });
        localStorage.setItem("user", null);
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <NavLink
          activeClassName="is-active"
          className="breadCrumbLink mx-2"
          to="/"
        >
          Dashboard
        </NavLink>
        /<strong className="mx-2">Account</strong>
      </div>
      <div className="signOutBtn">
        <small className="signOut" onClick={signOut}>
          Sign Out
        </small>
      </div>
    </div>
  );
};

export default Account;
