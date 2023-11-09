import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export const ZoneInfoPattern = () => {
  const zone = useSelector((state) => state.zoneInfo.zone);
  const proaction = useSelector((state) => state.zoneInfo.proaction);
  const side = useSelector((state) => state.zoneInfo.side);

  let mSv = "";
  let radiography = ''

  const zoneMappings = {
    ППН: "0,12",
    Череп: "0,24",
    ШВХ: "0,3",
    ГВХ: "0,7",
    ПВХ: "0,9",
    Кисть: "0,2",
    Стопа: "0,2",
    "Ліктьовий суглоб": "0,2",
    "Променево-зап'ястковий суглоб": "0,2",
    "Колінний суглоб": "0,2",
    "Гомілково-стопний суглоб": "0,2",
    "Передні відділи стопи": "0,2",

    ОЧП: "0,16",
    Ключиця: "0,3",
    "Кісток тазу": "0,9",
    Ребра: "0,5",
  };

  if (zone === "ОГК" && proaction === "Оглядова") {
    mSv = "0,25";
    radiography = `${zone} ${proaction.toLowerCase()}`
    
  } else if (zone === "ОГК" && (proaction === "Пряма + права бічна")) {
    mSv = "0,5";
    radiography = `${zone} у прямій та правій бічній проекціях`
    
  } else if (zone === "ОГК" && proaction === "Пряма + ліва бічна") {
    mSv = "0,5";
    radiography = `${zone} у прямій та лівій бічній проекціях`
  } else
  if (zone === "Плечовий суглоб" && proaction === "В 2-х проєкціях") {
    mSv = "0,6";
  } else if (zone === "Плечовий суглоб" && proaction === "Пряма") {
    mSv = "0,3";
  } else if (zone === "Кульшовий суглоб" && proaction === "В 2-х проєкціях") {
    mSv = "1,6";
  } else if (zone === "Кульшовий суглоб" && proaction === "Пряма") {
    mSv = "0,8";
  } else {
    mSv = zoneMappings[zone] || "____";
  }


  return (
    <div>
      <table
        id={uuidv4()}
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
            <td>
              R-графiя: {zone}, {proaction}, {side}
            </td>
            {/* <td>ЕЕД: {mSv} мЗв</td> */}
            <td>ЕЕД: {mSv} мЗв</td>
          </tr>
          <tr>
            <td>
              R-графiя: {radiography}
            </td>
            {/* <td>ЕЕД: {mSv} мЗв</td> */}
            <td>ЕЕД: {mSv} мЗв</td>
          </tr>
        </tbody>
      </table>
      <p>Norm?</p>
    </div>
  );
};
