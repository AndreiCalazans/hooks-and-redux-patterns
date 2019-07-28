import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { SubscriptionSelect } from "./screens/SubscriptionSelect";

import "./styles.css";

/**
 * User selection flow.
 *
 * Requirements:
 * 1) User can select a subscription
 * 2) User can select an account in the subscription
 * 3) User can add/remove a an account if he is the owner
 * 4) User can log in with any account
 * 5) User can log out.
 *
 *
 * Side notes:
 * For this tutorial, no actual inputs will be required. Let's
 * imagine we have a session for UserB who is part of a subscription, but
 * he is not the owner of it. Switching account won't require actual log in
 * credentials.
 *
 */

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={SubscriptionSelect} />
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
