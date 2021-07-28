// import { Header } from "./components/Header";
// import { Balance } from "./components/Balance";
// import { IncomeExpenses } from "./components/IncomeExpenses";
// import { TransactionList } from "./components/TransactionList";
// import { AddTransaction } from "./components/AddTransaction";
// import { GlobalProvider } from "./Context/GlobalState";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { BrowserRouter as Router } from "react-router-dom";

import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    // <GlobalProvider>
    //   <Header />
    //   <div className="container">
    //     <Balance />
    //     <IncomeExpenses />
    //     <TransactionList />
    //     <AddTransaction />
    //   </div>
    // </GlobalProvider>
    <div className="project-view">
      <Router>
        <LeftPanel />
        <RightPanel />
      </Router>
    </div>
  );
}

export default App;
