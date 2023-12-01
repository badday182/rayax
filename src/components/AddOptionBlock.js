import { useEffect } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cherepViews } from "../data/Cherep/cherepViews";
import { editSemicolonUniversalArray_1 } from "./redux/slices/universalSliceReducer";

export const AddOptionBlock = ({
  items,
  onZoneSelect,
  label,
  counter,
  onAddClick,
}) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (cherepViews.includes(items[0])) {
  //     dispatch(editSemicolonUniversalArray_1({ floatingId: counter[0].id, selectedZone: items[0] }));
  //   }
  // }, []);

  return (
    <div className="b1">
      <div className="mb-2">
        {counter.map((option) => (
          <div className="itemZones addOption">
            <FormFloatingSelect
              key={option.id}
              items={items}
              onZoneSelect={onZoneSelect}
              label={label}
            />
            <button type="button" class="btn btn-outline-danger mb-2 zoneAddButton">
              ✖
            </button>
          </div>
        ))}
      </div>
      <Button variant="btn btn-primary w-75 mb-1" className="" onClick={onAddClick}>
        Додати {label.toLowerCase()}
      </Button>{" "}
    </div>
  );
};
