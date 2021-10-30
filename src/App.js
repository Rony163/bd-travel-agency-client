import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './pages/AddService/AddService';
import AllEvents from './pages/AllEvents/AllEvents';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import MyEvents from './pages/MyEvents/MyEvents';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/myEvents">
            <MyEvents></MyEvents>
          </Route>
          <Route path="/allEvent">
            <AllEvents></AllEvents>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
