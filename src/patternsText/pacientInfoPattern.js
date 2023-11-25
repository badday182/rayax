import { useSelector, useDispatch } from "react-redux";
// import { addDocText } from "./redux/slices/documentSliseReducer";
import { v4 as uuidv4 } from "uuid";

export const PacientInfoPattern = () => {
  const pacientInfostateNumberExam = useSelector(
    (state) => state.pacientInfo.examNumber
  );
  const pacientInfostateDate = useSelector(
    (state) => state.pacientInfo.examDate
  );
  const pacientInfostateName = useSelector(
    (state) => state.pacientInfo.examName
  );
  const pacientInfostateBirthYear = useSelector(
    (state) => state.pacientInfo.examBirthYear
  );

  return (
    <div>
      <table
      width="100%"
      border-collapse="collapse"
      border="2px solid white">
        <tbody>
          <tr>
            {/* <td width="70%"> */}
            <td>
              <h5>РЕНТГЕНОДІАГНОСТИЧНЕ ВІДДІЛЕННЯ</h5>
              <h3>РЕЗУЛЬТАТИ R-ДОСЛІДЖЕННЯ</h3>
            </td>
            {/* <td align="right">
              вул. Віталія Шума, 4, м.Чорноморськ Одеська область, 68004 код
              ЄДРПОУ 01982212
            </td> */}
          </tr>
        </tbody>
      </table>
      <table
        width="100%"
        border-collapse="collapse"
        border="2px solid white"
        id={uuidv4()}
        //   style="border-collapse: collapse; width: 100%; border-color:transparent"
        //   border="1"
      >
        <tbody>
          <tr higth="20px">
            <td >№: {pacientInfostateNumberExam}</td>
            <td >Дата: {pacientInfostateDate}</td>
            <td >ПIБ: {pacientInfostateName}</td>
            <td align="right">
              {pacientInfostateBirthYear} р.н.
            </td>
          </tr>
          {/* <tr>
          <td>R-графiя:</td>
          <td>ЕЕД:</td>
        </tr> */}
        </tbody>
      </table>
    </div>
  );
};
