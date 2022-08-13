import { memo, useCallback, useState } from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({
  onIncreaseCounter,
  characters,
}: {
  onIncreaseCounter: () => void;
  characters: any[];
}) {
  const [isPickle, setIsPickle] = useState(false);
  const togglePickle = useCallback(
    () => setIsPickle((prevIsPickle) => !prevIsPickle),
    []
  );

  console.log("Im rerendering CharacterList");
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
              togglePickle={togglePickle}
            />
          </li>
        ))}
      </ul>
      <button onClick={onIncreaseCounter}>Increase counter</button>
    </div>
  );
}

export default memo(CharacterList);
