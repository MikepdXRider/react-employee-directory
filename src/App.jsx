// 
// App.js
// Import react router dom and necessary parts
// Set up BrowserRouter, switch, routes
// Create and import PrivateRoute component
// Wrap appropriate components in PrivateRoute component
// 

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Layout from "./views/Layout/Layout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/login'>
              {/* view component */}
          </Route>
          <Route path='/register'>
              {/* view component */}
          </Route>
          {/* will be private */}
          <Route path='/create-profile'>
              {/* view component */}
          </Route>
          {/* will be private */}
          <Route path='/edit-profile'>
              {/* view component */}
          </Route>
          {/* will be private */}
          <Route path='/profile'>
              {/* view component */}
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
