import { useCallback, useState } from "react";
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
  const onIncreaseCounter = useCallback(
    () => setCounter((prevCounter) => prevCounter + 1),
    []
  );

  return (
    <Root className="characters">
      <CharacterList onIncreaseCounter={onIncreaseCounter} />
      <Counter>{counter}</Counter>
    </Root>
  );
}

export default App;
