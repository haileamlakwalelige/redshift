import React from 'react';
import './button2.css'

const Button = () => {
  return (
    <div className="row middle-on-small center-on-small">
      <div className="column small-12 medium-6 large-4">
        <a href="#!" className="c-button c-button--gooey">
          Need mana
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </a>
        <p className="pen-info">Hover over the button</p>
      </div>
    </div>
  );
}

export default Button;
