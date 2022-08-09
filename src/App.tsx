import { useState } from "react";
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

function App() {
  const [counter, setCounter] = useState(0);
  const [isTransformed, setIsTransformed] = useState(false);

  return (
    <Root className="characters">
      <CharacterList />
      <Counter>{counter}</Counter>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increase counter
      </button>
    </Root>
  );
}

export default App;
