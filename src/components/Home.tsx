import preactLogo from "../assets/preact.svg";
import viteLogo from "/vite.svg";

export function Home() {
  return (
    <div className="home-page">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noopener">
          <img src={preactLogo} className="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <p>
        Navigate to the <a href="/gh-toolbox/counter">Counter</a> page to see the routing in action!
      </p>
      <p>
        Edit <code>src/app.tsx</code> and save to test HMR
      </p>
      <p>
        Check out{" "}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
          rel="noopener"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p className="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </div>
  );
}

export default Home;
