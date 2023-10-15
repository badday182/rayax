// import { FormFloatingSelect } from "./components/FloatingLabel";
// import { zones } from "./data/zones";
// import { zonesWithSides } from "./data/zonesWithSides";
// import { sides } from "./data/sides";
// import { ogkViews } from "./data/ogkViews";
// import { plechKulshSuglobViews } from "./data/plechovuyKulshovuySuglobViews";
// import { normaNenorma } from "./data/normaNenorma";

// export const ImagineOptions = () => {
//   return (
//     <div>
//       <FormFloatingSelect
//         items={zones}
//         onZoneSelect={setSelectedZone}
//         label="Зона дослідження"
//       />
//       {zoneWithSides ? (
//         <FormFloatingSelect
//           items={sides}
//           onZoneSelect={setSelectedSide}
//           label="Сторона"
//         />
//       ) : null}
//       {selectedZone === "ОГК" ? (
//         <FormFloatingSelect
//           items={ogkViews}
//           onZoneSelect={setSelectedOgkViews}
//           label="Проєкія"
//         />
//       ) : null}
//       {selectedZone === "Кульшовий суглоб" ||
//       selectedZone === "Плечовий суглоб" ? (
//         <FormFloatingSelect
//           items={plechKulshSuglobViews}
//           onZoneSelect={setSelectedplechKulshSuglobViews}
//           label="Проєкія"
//         />
//       ) : null}
//       <FormFloatingSelect
//         items={normaNenorma}
//         onZoneSelect={setSelectednormaNenorma}
//         label="Норма/Не норма"
//       />
//     </div>
//   );
// };
