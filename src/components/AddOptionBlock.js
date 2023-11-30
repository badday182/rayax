import { useEffect } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cherepViews} from "../data/Cherep/cherepViews";
import { editSemicolonUniversalArray_1 } from "./redux/slices/universalSliceReducer";



export const AddOptionBlock = ({ items, onZoneSelect, label, counter, onAddClick }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (cherepViews.includes(items[0])) {
  //     dispatch(editSemicolonUniversalArray_1({ floatingId: counter[0].id, selectedZone: items[0] }));
  //   }
  // }, []);

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