import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";

const Home = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (count === 5) {
      console.log("In the count");
    }
    console.log("Last Step");
    return () => {
      console.log("cleanUp");
    };
  }, [count]);


  return (
    <div className="p-2">
      <div className="grid grid-cols-2 py-2 justify-items-center gap-4 ">
        <div>Click Here </div>
        <div>
          <Button className="bg-green-600" onClick={() => setCount(count + 1)}>
            Click Me
          </Button>
        </div>
        <div>You clicked for </div>
        <div>{count} times</div>
      </div>
      <div className="flex justify-center">
        <Button
          className={`bg-${click ? "green" : "pink"}-600`}
          onClick={() => setClick(!click)}
        >
          {click ? "tick" : "untick"}{" "}
        </Button>
      </div>
    </div>
  );
};

export default Home;
