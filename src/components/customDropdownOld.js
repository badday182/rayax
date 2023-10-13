import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

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
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
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
      <Dropdown.Menu as={CustomMenu} >  
        <Dropdown.Item eventKey="Red">Red</Dropdown.Item>
        <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="Orange" active>Orange</Dropdown.Item>
        <Dropdown.Item eventKey="Red-Orange">Red-Orange</Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>
  );
}
