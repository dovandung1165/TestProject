import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./pages/Home";
import Footer from "./component/footer/Footer";
import Category from "./pages/Category";
import Details from "./pages/Details";
function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/category' component={Category} />
          <Route path='/details' component={Details} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

{
  /* <BrowserRouter>
<>
  <Header onNavigate={this.handleNavigate} />
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  </main>
</>
</BrowserRouter> */
}
export default App;
