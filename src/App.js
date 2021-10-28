import Components from "./Components/Components.js";
import * as Env from "./environments";
import Parse from "parse";

// init and instantiate parse SDK, using Back4App server
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

export default function App() {
  return <Components />;
}
