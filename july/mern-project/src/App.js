import { Switch, Route } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={Math.random()} {...route} />
      ))}
    </Switch>
  );
}

export default App;
