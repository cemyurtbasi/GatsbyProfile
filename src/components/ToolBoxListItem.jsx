import React, { memo } from "react";

const ToolBoxListItem = memo(({ id, label, onClick, activated, popOverPosition }) => (
  <li className="c-toolbox-list__item">
    <button
      id={id}
      onClick={(e) => {
        e.target.blur();
        onClick(e, id);
      }}
      className={`c-toolbox-list__btn 
        ${activated === id ? "c-toolbox-list__btn--is-active" : ""}
        ${activated === id && popOverPosition
          ? popOverPosition === "under"
            ? "c-toolbox-list__btn--is-above"
            : "c-toolbox-list__btn--is-under"
          : ""}`}
      style={{ zIndex: activated === id ? 1 : "" }}
    >
      {label}
    </button>
  </li>
));

export default ToolBoxListItem;
