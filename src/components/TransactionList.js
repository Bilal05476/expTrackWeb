import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";

// import { GlobalContext } from "../Context/GlobalState";
// import { Transaction } from "./Transaction";

export const TransactionList = () => {
  // const { userTransactions } = useContext(GlobalContext);
  const [userTransactions, setUserTransactions] = useState([]);
  const getTransFromDatabase = db.collection("transactions");
  const [{ user }] = useStateValue();

  useEffect(() => {
    getTransFromDatabase.orderBy("amount", "desc").onSnapshot((snapshot) =>
      setUserTransactions(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, [user]);
  const deleteTransaction = () => {};
  const onDeleteTrans = (id) => {
    getTransFromDatabase.doc(id).delete();
  };

  //allow user to delete only his transactions
  const userIdForDeleteTransaction = user.uid.toString();

  return (
    <>
      <ul className="list mb-4">
        {userTransactions.map((trans, ind) => {
          const { data } = trans;
          const sign = data.exp === true ? "-" : "+";

          return (
            <>
              {userIdForDeleteTransaction === data.id ? (
                <li key={ind} className={data.exp === true ? "minus" : "plus"}>
                  {data.expense}
                  <span>
                    {sign}${Math.abs(data.amount)}
                  </span>

                  <button
                    onClick={() => deleteTransaction(trans.id)}
                    className="delete-btn"
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </li>
              ) : (
                ""
              )}
            </>
          );
        })}
        {userTransactions.length === 0 && (
          <small className="text-center">No Record Found</small>
        )}
      </ul>
    </>
  );
};
