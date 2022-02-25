import React, {useState} from "react";
import {Route, Link, Switch} from "react-router-dom"
import Home from "./Components/Home"
import Form from "./Components/pizzaForm"

import schema from "./Validation/formSchema"
import * as yup from "yup"

import axios from "axios"

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  ham: false,
  pineapple: false,
}

const initialFormErrors = {
  name: ""
}


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState([])

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]:value})
  }

  const formSubmit = () => {
    axios.post("https://reqres.in/api/orders", formValues)
    .then(res => {
      setOrders([res.data, ...orders])
      setFormValues(initialFormValues)
    }).catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]:""}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">Order Pizza</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Pizza Ordering site!</h1>
          <p>Order your pizza here!</p>
          <Home />
        </Route>
        <Route path="/pizza">
          <h1>Create your pizza</h1>
          <Form values={formValues} change={inputChange} errors={formErrors} submit={formSubmit}/>
          {orders.map(order => (
            <div>
              <p>{order.name}</p>
              <p>Your order is being prepped</p>
            </div>
          ))}
        </Route>
      </Switch>

      
    </div>
  );
};
export default App;
