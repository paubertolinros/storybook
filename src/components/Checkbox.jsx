import { useState } from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

function Checkbox({ messageOn, messageOff, backgroundColor }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="checkbox-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={`custom-checkbox ${isChecked ? "checked" : "unchecked"}`}
      />
      <span className={`checkbox-label ${isChecked ? "checked" : "unchecked"}`}>
        {isChecked ? messageOn : messageOff}
      </span>
    </div>
  );
}

Checkbox.propTypes = {
  messageOn: PropTypes.string.isRequired,
  messageOff: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Checkbox.defaultProps = {
  messageOn: "Seleccionado",
  messageOff: "No seleccionado",
  backgroundColor: "#1f1f1f",
};

export default Checkbox;
