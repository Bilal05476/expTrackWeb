const AccountCardData = ({ amount, amountName, amountClass }) => {
  return (
    <div className={`col-md-2 col-10 card ${amountClass}`}>
      <h5>${amount}</h5>
      <small>{amountName}</small>
    </div>
  );
};

export default AccountCardData;
