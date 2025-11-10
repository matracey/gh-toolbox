import preactLogo from "../assets/preact.svg";
import viteLogo from "/vite.svg";
import { textStyles } from "../utils/styles";
import { Button } from "./ui/button";

export function Home() {
  return (
    <div className="text-center space-y-8">
      <div className="flex gap-8 justify-center items-center">
        <a href="https://vite.dev" target="_blank" rel="noopener" className="group">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] group-hover:animate-pulse"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://preactjs.com"
          target="_blank"
          rel="noopener"
          className="group"
        >
          <img
            src={preactLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#673ab8aa] group-hover:animate-pulse"
            alt="Preact logo"
          />
        </a>
      </div>

      <h1 className={textStyles.heading1}>Vite + Preact</h1>

      <div className={`space-y-4 ${textStyles.body}`}>
        <p>
          Navigate to the{" "}
          <Button asChild variant="link" className="h-auto p-0">
            <a href="/gh-toolbox/counter">Counter</a>
          </Button>{" "}
          page to see the routing in action!
        </p>

        <p>
          Edit <code className={textStyles.code}>src/app.tsx</code> and save to test
          HMR
        </p>

        <p>
          Check out{" "}
          <Button asChild variant="link" className="h-auto p-0">
            <a
              href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
              target="_blank"
              rel="noopener"
            >
              create-preact
            </a>
          </Button>
          , the official Preact + Vite starter
        </p>

        <p className={textStyles.caption}>
          Click on the Vite and Preact logos to learn more
        </p>
      </div>
    </div>
  );
}

export default Home;
