import { useCallback, useMemo, useState } from "react";
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

function App() {
  const [counter, setCounter] = useState(0);
  const [isBackgroundRed, setIsBackgroundRed] = useState(false);
  const onRemoveCharacter = useCallback(
    () => setCounter((prevCounter) => prevCounter + 1),
    []
  );

  const characters = useMemo(() => charactersData.slice(counter), [counter]);

  return (
    <Root
      className="characters"
      style={{ background: isBackgroundRed ? "#DC143C" : "rgb(36, 40, 47)" }}
    >
      <CharacterList
        onRemoveCharacter={onRemoveCharacter}
        characters={characters}
      />
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
