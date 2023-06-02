// import React, { useContext } from 'react';
// import { Price } from '../types/usePrice';

// export interface Context {
//   state: {
//     selectedPrices: Price;
//   }
//   actions: {
//     setSelectedPrices: React.Dispatch<React.SetStateAction<Price>>;
//   }
// }

// export const PriceContext = React.createContext({} as Context);

// interface Props {
//   children: React.ReactNode;
// }
// export const PriceProvider: React.FC<Props> = ({ children }) => {
//   const [selectedPrices, setSelectedPrices] = React.useState<Price>({
//     'btn1': 0,
//     'btn2': 0,
//     'btn3': 0,
//   });

//   const state: Context['state'] = {
//     selectedPrices
//   }
//   const actions: Context['actions'] = {
//     setSelectedPrices,
//   }

//   return <PriceContext.Provider value={{ state, actions }}>{children}</PriceContext.Provider>
// }