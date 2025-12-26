import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Step 1: Initialize state with useState hook - counter starts at 0
  const [count, setCount] = useState(0);

  // Step 2: Create event handler to increment the counter
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        
        {/* Step 3: Display the counter - Initial: "Button clicked 0 times" */}
        <p>Button clicked {count} times</p>
        
        {/* Step 4: Button with onClick event handler */}
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
