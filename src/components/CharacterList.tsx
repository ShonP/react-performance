import { memo } from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({
  onRemoveCharacter,
  characters,
}: {
  onRemoveCharacter: () => void;
  characters: any[];
}) {
  console.log("Im rerendering CharacterList");
  if (!characters.length) {
    return null;
  }

  return (
    <div>
      <ul className="character-list">
        {characters.map((c: any) => (
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
      <button onClick={onRemoveCharacter}>Remove character</button>
    </div>
  );
}

export default memo(CharacterList);
