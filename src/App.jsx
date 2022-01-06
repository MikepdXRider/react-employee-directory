// 
// App.js
// Import react router dom and necessary parts
// Set up BrowserRouter, switch, routes
// Create and import PrivateRoute component
// Wrap appropriate components in PrivateRoute component
// 

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/Auth/Login.jsx";
import Register from "./views/Auth/register.jsx";
import register from "./views/Auth/register.jsx";
import Home from "./views/Home/Home.jsx";
import Layout from "./views/Layout/Layout.jsx";
import CreateProfile from "./views/Profile/CreateProfile.jsx";
import EditProfile from "./views/Profile/EditProfile.jsx";
import Profile from "./views/Profile/Profile.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/login'>
              <Login/>
          </Route>
          <Route path='/register'>
              <Register/>
          </Route>
          {/* will be private */}
          <Route path='/create-profile'>
              <CreateProfile/>
          </Route>
          {/* will be private */}
          <Route path='/edit-profile'>
              <EditProfile/>
          </Route>
          {/* will be private */}
          <Route path='/profile'>
              <Profile/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
