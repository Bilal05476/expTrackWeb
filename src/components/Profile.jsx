import "../css/Profile.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Profile = ({ userName, userEmail, userImage }) => {
  const [{}, dispatch] = useStateValue();
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
    <div className="profile">
      <div className="row">
        <div className="col-md-12 text-right">
          <small className="signOut alert alert-primary" onClick={signOut}>
            Sign Out
          </small>
        </div>
        <div className="left__profile col-md-3">
          <img className="profileImage" src={userImage} alt="user" />
        </div>

        <div className="right__profile col-md-9">
          <div className="profileNameAndOccu">
            <h4>{userName}</h4>
          </div>
          <div className="profileAbout">
            <h6 className="aboutName d-flex align-items-center">
              {/* <InfoIcon className="mr-2" />  */}
              About
            </h6>
            <div className="aboutDetails">
              <div className="aboutUser">
                <strong className="aboutLabelIcon">
                  {/* <AssignmentIndIcon /> */}
                  User Name
                </strong>
                <strong className="userDataGet">{userName}</strong>
              </div>
              <div className="aboutUser">
                <strong className="aboutLabelIcon">
                  {/* <EmailIcon /> */}
                  User Email
                </strong>
                <strong className="userDataGet">{userEmail}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
