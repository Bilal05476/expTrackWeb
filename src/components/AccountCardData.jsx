const AccountCardData = ({ amount, amountName, amountClass }) => {
  return (
    <div className={`card ${amountClass}`}>
      <h5>${amount}</h5>
      <small>{amountName}</small>
    </div>
  );
};

export default AccountCardData;
