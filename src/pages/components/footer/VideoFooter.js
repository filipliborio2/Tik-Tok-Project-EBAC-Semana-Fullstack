import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function videofooter({ name, description, music }) {
  return (
    <div className="videofooter">
      <div className="videoFooter__text">
        <h2>@{name}</h2>
        <p>{description}</p>

        <div class="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
        alt="Imagem de vinil girando"
      />
    </div>
  );
}

export default videofooter;
