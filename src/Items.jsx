import React from "react";
import "./styles.css";

function Items({ itemInfo, actionClick }) {
  return (
    <li key={itemInfo.id} className="item">
      {itemInfo.nom}
      {!itemInfo.isComplet ? (
        <input
          type="checkbox"
          //checked={itemInfo.isComplet}
          onChange={(e) => {
            if (e.target.checked) {
              actionClick();
              itemInfo.isComplet = true;
            }
          }}
        />
      ) : (
        ""
      )}
    </li>
  );
}

export default Items;
