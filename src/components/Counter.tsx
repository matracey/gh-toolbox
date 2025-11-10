import { useState } from "preact/hooks";
import { buttonStyles, cardStyles, textStyles } from "../utils/styles";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="text-center space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Counter</CardTitle>
          <CardDescription>This is a routed component using preact-iso!</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col items-center gap-4">
          <Button
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export { Counter };
export default Counter;
