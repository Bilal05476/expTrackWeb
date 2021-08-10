const TransactionsTable = ({
  colorClass,
  transactionName,
  transactionAmount,
  transactionTime,
}) => {
  return (
    <tr>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          padding: "4px 10px",
          border: "1px solid #ccc",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <small className={`transaction-point ${colorClass}`}></small>
        <small className="transaction-name ml-2">{transactionName}</small>
      </td>
      <td
        style={{
          border: "1px solid #ccc",
          padding: "2px 10px",
        }}
      >
        <small className="transaction-amount">${transactionAmount}</small>
      </td>
      <td>
        {/* <small className="transaction-amount">{transactionTime}</small> */}
        <span
          style={{
            fontSize: "0.7rem",
          }}
          className="text-secondary p-2"
        >
          {transactionTime}
        </span>
      </td>
    </tr>
  );
};

export default TransactionsTable;
