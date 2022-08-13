import { useCallback, useState } from "react";
import styled from "styled-components";
import CharacterList from "./components/CharacterList";
import mortyImg from "./assets/mortyImg.jpeg";
import rickImg from "./assets/rickImg.jpeg";
import pickleRickImg from "./assets/pickleRick.jpg";

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

  const charactersData = [
    {
      id: 1,
      image: rickImg,
      name: "Rick Sanchez",
      location: { name: "Citadel of Ricks" },
      origin: { name: "Earth (C-137)" },
    },
    {
      id: 2,
      image: mortyImg,
      name: "Morty Smith",
      location: { name: "Citadel of Ricks" },
      origin: { name: "Earth" },
    },
    {
      id: 5,
      image: pickleRickImg,
      name: "Pickle Rick",
      location: { name: "Citadel of Ricks" },
      origin: { name: "Earth (C-137)" },
    },
  ];

  return (
    <Root className="characters">
      <CharacterList
        onIncreaseCounter={onIncreaseCounter}
        characters={charactersData}
      />
      <Counter>{counter}</Counter>
    </Root>
  );
}

export default App;
