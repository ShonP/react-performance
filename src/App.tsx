import { memo, useState } from "react";
import styled from "styled-components";
import CharacterList from "./components/CharacterList";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Counter = styled.p`
  color: white;
`;

const Child = ({ count }: { count: number }) => {
  console.log("child rerender");

  return <div>{count}</div>;
};

const MemoChild = memo(Child);

function App() {
  const [counter, setCounter] = useState(0);
  const [isBackgroundRed, setIsBackgroundRed] = useState(false);

  return (
    <Root style={{ background: isBackgroundRed ? "red" : "white" }}>
      <Child count={counter} />
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Increase counter
      </button>
      <button
        onClick={() =>
          setIsBackgroundRed((prevIsBackgroundRed) => !prevIsBackgroundRed)
        }
      >
        Toggle background
      </button>
    </Root>
  );
}

export default App;
