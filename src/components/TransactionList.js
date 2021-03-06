import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import moment from "moment";

export const TransactionList = () => {
  const [userTransactions, setUserTransactions] = useState([]);
  const getTransFromDatabase = db.collection("transactions");
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      getTransFromDatabase.orderBy("amount", "desc").onSnapshot((snapshot) =>
        setUserTransactions(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    }
  }, [user, getTransFromDatabase]);

  const onDeleteTrans = (id) => {
    getTransFromDatabase.doc(id).delete();
  };

  //allow user to show only his transactions
  const userIdForTransaction = user.uid.toString();

  return (
    <>
      <ul className="list mb-4">
        {userTransactions.map((trans, ind) => {
          const { data } = trans;
          const sign = data.exp === true ? "-" : "+";
          const transDate = moment(
            data.transTime.toDate().toString()
          ).fromNow();

          return (
            <>
              {userIdForTransaction === data.id ? (
                <li key={ind} className={data.exp === true ? "minus" : "plus"}>
                  {data.expense}
                  <span>
                    {sign}${Math.abs(data.amount)}
                  </span>
                  <span
                    className="m-0 text-secondary"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {transDate}
                  </span>

                  <button
                    onClick={() => onDeleteTrans(trans.id)}
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
        {!userTransactions && (
          <small className="text-center">No Record Found</small>
        )}
      </ul>
    </>
  );
};
