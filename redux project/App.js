import react from "react";
import { Switch, Route,BrowserRouter as  Router } from "react-router-dom";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" component={AddExpense} />

      </Switch>
      <div>Footer</div>
      </Router>
  );
}

export default App;
