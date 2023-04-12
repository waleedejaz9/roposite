import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import appRoutes from "./appRoutes";
import PublicLayout from "../containers/Layout/PublicLayout";
import setAuthToken from "../utils/setAuthToken";

import LoginPage from "../pages/Login";
import AccessDeniedPage from "../pages/AccessDenied";
import FaqPage from "../pages/Faq";
import RopoResourcePage from "../pages/RopoResource";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUs";
import LostPetsPage from "../pages/LostPets";
import MinorProjectPage from "../pages/MinorProject";
import MajorProjectPage from "../pages/MajorProject";
import HouseCheckPage from "../pages/HouseCheck";
import ForgetPasswordPage from "../pages/ForgetPassword";
import ResetPasswordPage from "../pages/ResetPassword";
import ProfilePage from "../pages/Profile";
import RopoFaqPage from "../pages/FaqPage";
import AdminPage from "../pages/Admin";

// we will use this components for the restricted routes which can be accessed after login only
const RestrictedRoute = (props) => (
  <Fragment>
    {props.isLoggedIn === true ? (
      <Route exact path={props.path} component={props.component} />
    ) : (
      <Redirect to={appRoutes.login} from={props.path} />
    )}
  </Fragment>
);

// We will use this component for public routes which cannot be access after login
const PublicRoute = (props) => (
  <Fragment>
    {props.isLoggedIn === false ? (
      <Route exact path={props.path} component={props.component} />
    ) : (
      <Redirect to="/" from={props.path} />
    )}
  </Fragment>
);

class AppRoutes extends PureComponent {
  render() {
    const { history } = this.props;
    const auth = this.props.auth;

    //set the token even after page refreshes
    setAuthToken(auth.token ? auth.token : false);

    return (
      <>
        <Router history={history}>
          <Switch>
            <PublicLayout>
              <PublicRoute
                path={appRoutes.homePage}
                component={HomePage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.login}
                component={LoginPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.admin}
                component={AdminPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.accessDenied}
                component={AccessDeniedPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.faq}
                component={FaqPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.ropoResources}
                component={RopoResourcePage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.contactUs}
                component={ContactUsPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.lostPets}
                component={LostPetsPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.minorProject}
                component={MinorProjectPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.majorProject}
                component={MajorProjectPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.houseCheck}
                component={HouseCheckPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.forgetPassword}
                component={ForgetPasswordPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.resetPassword}
                component={ResetPasswordPage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.profile}
                component={ProfilePage}
                isLoggedIn={auth.isLoggedIn}
              />
              <PublicRoute
                path={appRoutes.faqPage}
                component={RopoFaqPage}
                isLoggedIn={auth.isLoggedIn}
              />
            </PublicLayout>

            {/* <PublicRoute
              path="/register"
              component={Register}
              isLoggedIn={auth.isLoggedIn}
            />
            <PublicRoute
              path="/forgot-password"
              component={ForgotPassword}
              isLoggedIn={auth.isLoggedIn}
            />
            <PublicRoute
              path="/reset-password"
              component={ResetPassword}
              isLoggedIn={auth.isLoggedIn}
            /> */}

            {/*  <Route path="/dashboard">
              <Switch>
               <DashboardLayout>
                  <RestrictedRoute
                    path="/dashboard/home"
                    component={Dashboard}
                    isLoggedIn={auth.isLoggedIn}
                  /> 
                </DashboardLayout>
              </Switch>
            </Route>*/}

            {/* <Route component={Error404} path="/404" /> */}
            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppRoutes);
