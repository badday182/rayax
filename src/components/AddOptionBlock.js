import { FormFloatingSelect } from "./FloatingLabel";
import { Button } from "react-bootstrap";

export const AddOptionBlock = ({ items, onZoneSelect, label, counter, onAddClick }) => {
    return (
      <div className="itemZones addOption">
        <div>
          {counter.map((option) => (
            <FormFloatingSelect
              key={option.id}
              items={items}
              onZoneSelect={onZoneSelect}
              label={label}
            />
          ))}
        </div>
        <Button variant="primary" className="zoneAddButton" onClick={onAddClick}>
          Add
        </Button>{" "}
      </div>
    );
  };