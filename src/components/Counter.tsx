import { useState } from "preact/hooks";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-page">
      <h2>Counter</h2>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is a routed component using preact-iso!
        </p>
      </div>
    </div>
  );
}

export { Counter };
export default Counter;
