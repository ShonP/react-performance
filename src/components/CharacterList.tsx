import { memo, useCallback, useState } from "react";
import mortyImg from "../assets/mortyImg.jpeg";
import rickImg from "../assets/rickImg.jpeg";
import pickleRickImg from "../assets/pickleRick.jpg";
import CharacterCard from "./CharacterCard";

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
];

const pickleCharacter = {
  id: 5,
  image: pickleRickImg,
  name: "Pickle Rick",
  location: { name: "Citadel of Ricks" },
  origin: { name: "Earth (C-137)" },
};

function CharacterList() {
  const [isPickle, setIsPickle] = useState(false);
  const togglePickle = useCallback(
    () => setIsPickle((prevIsPickle) => !prevIsPickle),
    []
  );

  const modifiedCharactersData = [...charactersData, pickleCharacter];

  console.log("Im rerendering CharacterList");
  return (
    <ul className="character-list">
      {modifiedCharactersData.map((c: any) => (
        <li key={c.id} className="character-list__item">
          <CharacterCard
            imageUrl={c.image}
            name={c.name}
            locationName={c.location.name}
            originLocation={c.origin.name}
            togglePickle={togglePickle}
          />
        </li>
      ))}
    </ul>
  );
}

export default memo(CharacterList);
