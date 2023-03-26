import { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the check icon from react-icons/fa

function ColorButton({ color }) {
  const [selected, setSelected] = useState(false); // Initialize the selected state to false

  const handleClick = () => {
    setSelected(!selected); // Toggle the selected state on click
  }

  return (
    <button
      className={`color-button ${selected ? 'selected' : ''}`} // Add the 'selected' class if the button is selected
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {selected && <FaCheck className="tick-icon" />} {/* Render the check icon if the button is selected */}
    </button>
  );
}

export default ColorButton;
