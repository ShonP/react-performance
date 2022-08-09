import { memo } from "react";

function CharacterCard({
  name,
  imageUrl,
  locationName = "Unknown",
  originLocation,
}: any) {
  return (
    <div className="character-card">
      <img
        src={imageUrl}
        alt="Character Avatar"
        className="character-card__avatar"
      />
      <div className="character-card__bio">
        <h2 className="character-card__name character-card__text">{name}</h2>
        <div className="character-card__location">
          <p className="character-card__location-text character-card__label">
            Last known location:
          </p>
          <p className="character-card__location-name character-card__text">
            {locationName}
          </p>
        </div>
        <div className="character-card__origin-location">
          <p className="character-card__origin-location-text character-card__label">
            First seen in:
          </p>
          <p className="character-card__origin-location-name character-card__text">
            {originLocation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(CharacterCard);
