import Header from "components/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        {/* <Redirect from="/post-list/:postId" to="/posts/:postId" exact /> */}

        {/* <Route path="/" component={CounterFeature} exact /> */}
        <Route path="/todos" component={TodoFeature} />
        {/* <Route path="/albums" component={AlbumFeature} /> */}
        {/* <Route path="/products" component={ProductFeature} /> */}
        {/* <Route path="/cart" component={CartFeature} /> */}

        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
