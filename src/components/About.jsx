import AccountCardData from "./AccountCardData";

const About = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong>About</strong>
      </div>
      <div className="user-account-details-cards">
        <AccountCardData
          amount="44,330"
          amountName="Income"
          amountClass="income"
        />
      </div>
    </div>
  );
};

export default About;
