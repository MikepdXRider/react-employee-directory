// 
// App.js
// Import react router dom and necessary parts
// Set up BrowserRouter, switch, routes
// Create and import PrivateRoute component
// Wrap appropriate components in PrivateRoute component
// 

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProvideAuth } from "./context/ProvideAuth.jsx";
import Home from "./views/Home/Home.jsx";
import Layout from "./views/Layout/Layout.jsx";
import CreateProfile from "./views/Profile/CreateProfile.jsx";
import EditProfile from "./views/Profile/EditProfile.jsx";
import Profile from "./views/Profile/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Auth from "./views/Auth/Auth.jsx";

export default function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/login'>
                <Auth />
            </Route>
            <Route path='/register'>
                <Auth isSigningUp={true}/>
            </Route>
            <PrivateRoute path='/create-profile'>
                <CreateProfile/>
            </PrivateRoute>
            <PrivateRoute path='/edit-profile'>
                <EditProfile/>
            </PrivateRoute>
            <PrivateRoute path='/profile'>
                <Profile/>
            </PrivateRoute>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ProvideAuth>  
  )
}
