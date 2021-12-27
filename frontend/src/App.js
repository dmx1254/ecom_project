import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import NavBar from './components/NavBar';
import Backdrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';
function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <NavBar click = {() =>{setSideToggle(true)}}/>
      <SideDrawer show = {sideToggle} click = {() =>{setSideToggle(false)}}/>
      <Backdrop show = {sideToggle} click = {() =>{setSideToggle(false)}} />
     <main>
       <Switch>
         <Route exact path = "/" component = {HomeScreen}/>
         <Route exact path = "/product:id" component = {ProductScreen} />
         <Route exact path = "/cart" component = {CartScreen} />
       </Switch>
     </main>
    </Router>
  );
}

export default App;
