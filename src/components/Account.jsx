import { NavLink } from "react-router-dom";

const Account = () => {
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
    </div>
  );
};

export default Account;
