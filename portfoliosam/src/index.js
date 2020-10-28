/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch} from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  <HashRouter>
      <Switch>
        <Route
          path="/"
          render={(props) => <ProfilePage {...props} />}
        />
      </Switch>
  </HashRouter>,
  document.getElementById("root")
);
