import { Route } from "react-router-dom";
import Navigation from "../src/components/Navigation/NavBar";
import Home from "../src/components/Home/Home";
import CategoryPhone from "../src/components/Phones/Category";
import Phones from "../src/components/Phones/Phones";
import CategoryService from "../src/components/Services/Category";
import CategoryDelivery from "../src/components/Deliveries/Category";
import info from "../src/components/Info/info";
import Delivery from "../src/components/Deliveries/Delivery";
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/category_phones" component={CategoryPhone} />
      <Route exact path="/phones/:categoryId" component={Phones} />
      <Route exact path="/category_services" component={CategoryService} />
      <Route exact path="/category_deliveries" component={CategoryDelivery} />
      <Route exact path="/info" component={info} />
      <Route exact path="/delivery" component={Delivery} />
    </>
  );
}

export default App;
