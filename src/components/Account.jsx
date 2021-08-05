import { NavLink } from "react-router-dom";

import Profile from "./Profile";
const Account = ({ userName, userImage, userEmail }) => {
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

      <Profile
        userEmail={userEmail}
        userImage={userImage}
        userName={userName}
      />
    </div>
  );
};

export default Account;
