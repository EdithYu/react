import React, { useState, useEffect  } from 'react';
import Child from "./child";

function Hooks() {
  // 声明一个新的状态变量，我们将其称为 "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
      debugger
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    setCount(100)

    return () => {
        console.log(10000)
        setCount(10000)
    }
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Child count={count}></Child>
    </div>
  );
}

export default Hooks