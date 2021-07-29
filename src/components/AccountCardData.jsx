const AccountCardData = ({ amount, amountName, amountClass }) => {
  return (
    <div className={`card ${amountClass}`}>
      <h5>${amount}</h5>
      <small className="text-secondary">{amountName}</small>
    </div>
  );
};

export default AccountCardData;
