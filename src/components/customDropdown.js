
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import { zones } from '../data/zones';
// const zones = ['Череп', 'ППН','ШВХ','ГВХ','ПВХ','ОГК','ОЧП']

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    const zoneToItem = (zone) => {
      const fixedZone = zone.replace('\$\'', "'");
            return (
        <Dropdown.Item key={fixedZone} eventKey={fixedZone}>
          {fixedZone}
        </Dropdown.Item>
      );
    };

    const filteredZones = zones.filter((zone) =>
      !value || zone.toLowerCase().startsWith(value.toLowerCase()),
    );

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {filteredZones.map(zoneToItem)}
        </ul>
      </div>
    );
  },
);

export default function CustomDropdown({ name }) {
  const [selectedOption, setSelectedOption] = useState(name);

  const handleSelect = (eventKey, event) => {
    event.preventDefault();
    setSelectedOption(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle id="dropdown-custom-components" className="m-1">
        {selectedOption}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu} zones={zones} />
    </Dropdown>
  );
}
