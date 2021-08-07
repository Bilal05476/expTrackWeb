import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { useEffect } from "react";
// import { GlobalContext } from "./Context/GlobalState";
import { useStateValue } from "./StateProvider";
import AuthComponent from "./components/AuthComponent";
import { useState } from "react";
import { db } from "./firebase";

function App() {
  // const { userTransactions } = useContext(GlobalContext);
  const [{ user }] = useStateValue();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userIncome, setUserIncome] = useState(0.0);
  const [userExpense, setUserExpense] = useState(0.0);

  if (user) {
    const getUserData = db.collection("users").doc(user.uid);
    getUserData.get().then((doc) => {
      setUserName(doc.data().name);
      setUserImage(doc.data().avatar);
      setUserEmail(doc.data().email);
      setUserIncome(doc.data().income);
      setUserExpense(doc.data().expense);
      setUserId(user.uid);
    });
  }

  // const amounts = userTransactions.map((transaction) => transaction.amount);
  // const transState = userTransactions.map((transaction) => transaction);
  // const userTransaction = amounts
  //   .reduce((acc, item) => (acc += item), 0)
  //   .toFixed(2);

  const userTransaction = (
    parseFloat(userIncome) + parseFloat(userExpense)
  ).toFixed(2);

  // const userIncome = transState
  //   .filter((item) => item.inc === true)
  //   .reduce((acc, item) => (acc += item.amount), 0)
  //   .toFixed(2);

  // const userExpense = (
  //   transState
  //     .filter((item) => item.exp === true)
  //     .reduce((acc, item) => (acc += item.amount), 0) * 1
  // ).toFixed(2);

  const userBalance = (
    parseFloat(userIncome) - parseFloat(userExpense)
  ).toFixed(2);

  return (
    <>
      {!user ? (
        <AuthComponent />
      ) : (
        <div className="project-view">
          <LeftPanel
            userBalance={userBalance}
            userName={userName}
            userImage={userImage}
          />
          <RightPanel
            userIncome={userIncome.toFixed(2)}
            userExpense={userExpense.toFixed(2)}
            userBalance={userBalance}
            userTransaction={userTransaction}
            userEmail={userEmail}
            userName={userName}
            userImage={userImage}
          />
        </div>
      )}
    </>
  );
}

export default App;
