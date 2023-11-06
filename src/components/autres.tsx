import React, { useState } from "react";

function Autres() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <label> Autres</label>
        <div className="checkbox-wrapper-25">
        <input
          type="checkbox"
          value="Autres"
          onChange={handleCheckboxChange}
        />
        </div>

      {checked && (
        <textarea placeholder="Espagnol, Mandarin... etc"></textarea>
      )}
    </div>
  );
}



export default Autres;
