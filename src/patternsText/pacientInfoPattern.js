import { useSelector, useDispatch } from "react-redux";
// import { addDocText } from "./redux/slices/documentSliseReducer";
import { v4 as uuidv4 } from "uuid";


export const PacientInfoPattern = () => {
    const pacientInfostateNumberExam = useSelector((state) => state.pacientInfo.examNumber);
    const pacientInfostateDate = useSelector((state) => state.pacientInfo.examDate);
    const pacientInfostateName = useSelector((state) => state.pacientInfo.examName);
    const pacientInfostateBirthYear = useSelector((state) => state.pacientInfo.examBirthYear);


  return (
   
    <table id={uuidv4()}
    //   style="border-collapse: collapse; width: 100%; border-color:transparent"
    //   border="1"
    >
      <tbody>
        <tr>
          <td>Дата: {pacientInfostateDate}</td>
          <td>№: {pacientInfostateNumberExam}</td>
          <td>ПIБ: {pacientInfostateName}</td>
          <td>{pacientInfostateBirthYear} р.н.</td>
        </tr>
        {/* <tr>
          <td>R-графiя:</td>
          <td>ЕЕД:</td>
        </tr> */}
      </tbody>
    </table>
  );
};

