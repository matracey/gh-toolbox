import {
  lazy,
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
  useLocation,
} from "preact-iso";
import { textStyles } from "./utils/styles";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { Button } from "./components/ui/button";

// Synchronous import for Home (could be lazy too)
import { Home } from "./components/Home";

// Lazy-loaded Counter component for code splitting
const Counter = lazy(() =>
  import("./components/Counter").then((m) => m.Counter)
);

// 404 component
const NotFound = () => (
  <div className="text-center">
    <h2 className={textStyles.heading3 + " mb-4"}>404 - Page Not Found</h2>
    <p className={textStyles.caption + " mb-4"}>
      The page you're looking for doesn't exist.
    </p>
    <Button asChild variant="link">
      <a href="/gh-toolbox/">Go back home</a>
    </Button>
  </div>
);

function Navigation() {
  let { path } = useLocation();
  path = path.replace(/\/gh-toolbox\/?/, "");

  return (
    <nav className="flex gap-4 justify-center p-4 mb-8 border-b border-gray-300 dark:border-gray-700">
      <Button asChild variant={path === "" ? "default" : "ghost"}>
        <a href="/gh-toolbox/">Home</a>
      </Button>
      <Button asChild variant={path === "counter" ? "default" : "ghost"}>
        <a href="/gh-toolbox/counter">Counter</a>
      </Button>
    </nav>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <DarkModeToggle />
      <div className="max-w-5xl mx-auto px-8 py-8">
        <LocationProvider scope="/gh-toolbox">
          <ErrorBoundary
            onError={(error) => console.error("Router Error:", error)}
          >
            <Navigation />
            <main>
              <Router>
                <Route path="/gh-toolbox/" component={Home} />
                <Route path="/gh-toolbox/counter" component={Counter} />
                <Route default component={NotFound} />
              </Router>
            </main>
          </ErrorBoundary>
        </LocationProvider>
      </div>
    </div>
  );
}
