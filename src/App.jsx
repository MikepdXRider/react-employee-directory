import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProvideAuth } from "./context/ProvideAuth.jsx";
import Home from "./views/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Profile from "./views/Profile/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Auth from "./views/Auth/Auth.jsx";
import SetProfile from "./views/Profile/SetProfile.jsx";

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
                <SetProfile />
            </PrivateRoute>
            <PrivateRoute path='/edit-profile'>
                <SetProfile isEdit={true} />
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
