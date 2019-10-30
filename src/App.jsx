import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./pages/Home";
import Footer from "./component/footer/Footer";
import Category from "./pages/Category";
import Details from "./pages/Details";
import { Provider } from "react-redux";
import store from "./store/index";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Provider store={store}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/category' component={Category} />
              <Route path='/details/:id' component={Details} />
            </Switch>
          </Provider>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}
export default App;
