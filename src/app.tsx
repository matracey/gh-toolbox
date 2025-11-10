import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";
import "./app.css";

// 404 component
const NotFound = () => (
  <div>
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/gh-toolbox/">Go back home</a>
  </div>
);

function Navigation() {
  return <nav className="navbar"></nav>;
}

export function App() {
  return (
    <LocationProvider scope="/gh-toolbox">
      <ErrorBoundary onError={(error) => console.error("Router Error:", error)}>
        <Navigation />
        <main>
          <Router>
            {[<Route default component={NotFound} />]}
          </Router>
        </main>
      </ErrorBoundary>
    </LocationProvider>
  );
}
