import {
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
  useLocation,
} from "preact-iso";
import "./app.css";

// Synchronous import for Home (could be lazy too)
import { Home } from "./components/Home";

// 404 component
const NotFound = () => (
  <div>
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/gh-toolbox/">Go back home</a>
  </div>
);

function Navigation() {
  let { path } = useLocation();
  path = path.replace(/\/gh-toolbox\/?/, "");

  return (
    <nav className="navbar">
      <a href="/gh-toolbox/" className={path === "/gh-toolbox/" ? "active" : ""}>
        Home
      </a>
    </nav>
  );
}

export function App() {
  return (
    <LocationProvider scope="/gh-toolbox">
      <ErrorBoundary onError={(error) => console.error("Router Error:", error)}>
        <Navigation />
        <main>
          <Router>
            <Route path="/gh-toolbox" component={Home} />
            <Route default component={NotFound} />
          </Router>
        </main>
      </ErrorBoundary>
    </LocationProvider>
  );
}
