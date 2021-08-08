import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import AuthComponent from "./components/AuthComponent";
import { useState } from "react";
import { db } from "./firebase";

function App() {
  const [{ user, userDetails }, dispatch] = useStateValue();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (user) {
      const getUserData = db.collection("users").doc(user.uid);
      getUserData.get().then((doc) => {
        setUserId(user.uid);
        dispatch({
          type: "USER_DETAILS",
          userDetails: doc.data(),
        });
        localStorage.setItem("userDetails", JSON.stringify(doc.data()));
      });
    }
  }, [user]);

  const userIncome = userDetails?.income;
  const userExpense = userDetails?.expense;
  const userName = userDetails?.name;
  const userEmail = userDetails?.email;
  const userImage = userDetails?.avatar;

  const userTransaction = (
    parseFloat(userIncome) + parseFloat(userExpense)
  ).toFixed(2);

  const userBalance = (
    parseFloat(userIncome) - parseFloat(userExpense)
  ).toFixed(2);

  return (
    <>
      {!user ? (
        <AuthComponent />
      ) : (
        <div className="project-view">
          <LeftPanel userBalance={userBalance} />
          <RightPanel
            userIncome={userIncome.toFixed(2)}
            userExpense={userExpense.toFixed(2)}
            userBalance={userBalance}
            userTransaction={userTransaction}
            userName={userName}
            userEmail={userEmail}
            userImage={userImage}
            userId={userId}
          />
        </div>
      )}
    </>
  );
}

export default App;
