import { memo } from "react";
import mortyImg from "../assets/mortyImg.jpeg";
import rickImg from "../assets/rickImg.jpeg";
import CharacterCard from "./CharacterCard";

const charactersData = [
  {
    id: 1,
    image: rickImg,
    name: "Rick Sanchez",
    location: { name: "Citadel of Ricks" },
    origin: { name: "Earth (C-137)" },
  },
  ,
  {
    id: 2,
    image: mortyImg,
    name: "Morty Smith",
    location: { name: "Citadel of Ricks" },
    origin: { name: "Earth" },
  },
];

function CharacterList() {
  console.log("Im rerendering CharacterList");
  return (
    <ul className="character-list">
      {charactersData.map((c: any) => (
        <li key={c.id} className="character-list__item">
          <CharacterCard
            imageUrl={c.image}
            name={c.name}
            locationName={c.location.name}
            originLocation={c.origin.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
