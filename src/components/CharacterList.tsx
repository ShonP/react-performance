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

interface IHightlightedDict {
  [key: number]: boolean;
}

function CharacterList() {
  const [highlightedDict, setIsHighlightedDict] = useState<IHightlightedDict>(
    {}
  );
  const toggleHighlight = (id: number) =>
    setIsHighlightedDict((prevHighlighted) => ({
      ...prevHighlighted,
      [id]: !prevHighlighted[id],
    }));

  return (
    <ul className="character-list">
      {charactersData.map((c: any) => (
        <li key={c.id} className="character-list__item">
          <CharacterCard
            id={c.id}
            imageUrl={c.image}
            name={c.name}
            locationName={c.location.name}
            originLocation={c.origin.name}
            toggleHighlight={toggleHighlight}
            isHighlighted={highlightedDict[c.id]}
          />
        </li>
      ))}
    </ul>
  );
}

export default memo(CharacterList);
