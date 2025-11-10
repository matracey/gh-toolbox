import { hydrate } from "preact-iso";
import "./index.css";
import { App } from "./app.tsx";

// preact-iso's hydrate handles both hydration and rendering automatically
hydrate(<App />, document.getElementById("app")!);
