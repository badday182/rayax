import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";


export const ZoneInfoPattern = () => {
    const zone = useSelector((state) => state.zoneInfo.zone);
    const proaction = useSelector((state) => state.zoneInfo.proaction);
    const side = useSelector((state) => state.zoneInfo.side);


  return (
   <div>

     <table id={uuidv4()}
     //   style="border-collapse: collapse; width: 100%; border-color:transparent"
     //   border="1"
     >
       <tbody>
         {/* <tr>
           <td>Дата: {pacientInfostateDate}</td>
           <td>№: {pacientInfostateNumberExam}</td>
           <td>ПIБ: {pacientInfostateName}</td>
           <td>{pacientInfostateBirthYear} р.н.</td>
         </tr> */}
         <tr>
           <td>R-графiя: {zone}, {proaction}</td>
           <td>ЕЕД: ___ мЗв</td>
         </tr>
       </tbody>
     </table>
     <p>Norm?</p>
    
   </div>
  );
};

