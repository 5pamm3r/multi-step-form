import React from 'react';
import { Plan } from '../types/planType';
import { AddOnsType } from '../types/addOnsType';

export interface Context {
  state: {
    planSelected: Plan;
    addOns: AddOnsType[];
    total: number;
    planPrices: Price;
    addOnsPrices: { online: number, storage: number, profile: number };
  }
  actions: {
    setPlanSelected: React.Dispatch<React.SetStateAction<Plan>>;
    setAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>;
    addToTotal: (plan: number, addOns: number) => void;
  }
}

const UserContext = React.createContext({} as Context);

interface Props {
  children: React.ReactNode;
}
interface Price {
  [key: string]: number;
}
const UserProvider: React.FC<Props> = ({ children }) => {
  const [planSelected, setPlanSelected] = React.useState<Plan>({
    name: '',
    price: 0,
    plan: 'monthly',
  });
  const planPrices: Price = planSelected.plan === "monthly" ? {
    arcade: 9,
    advanced: 12,
    pro: 15,
  } : {
    arcade: 90,
    advanced: 120,
    pro: 150,
  }
  const addOnsPrices = planSelected.plan === 'monthly' ? {
    online: 1,
    storage: 2,
    profile: 2,
  } : {
    online: 10,
    storage: 20,
    profile: 20
  }

  const [addOns, setAddOns] = React.useState<AddOnsType[]>([
    {
      id: 'online',
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: addOnsPrices.online,
      plan: planSelected.plan === 'monthly' ? 'mo' : 'yr',
      state: false,
    }, {
      id: 'storage',
      name: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      price: addOnsPrices.storage,
      plan: planSelected.plan === 'monthly' ? 'mo' : 'yr',
      state: false,
    }, {
      id: 'profile',
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: addOnsPrices.profile,
      plan: planSelected.plan === 'monthly' ? 'mo' : 'yr',
      state: false,
    }
  ])

  const [total, setTotal] = React.useState<number>(0);

  const addToTotal = (plan: number, addOns: number) => {
    setTotal(plan + addOns);
  }


  const state: Context['state'] = {
    planSelected,
    addOns,
    total,
    planPrices,
    addOnsPrices

  }
  const actions: Context['actions'] = {
    setPlanSelected,
    setAddOns,
    addToTotal,
  }

  return <UserContext.Provider value={{ state, actions }}>{children}</UserContext.Provider>
}

export { UserContext as default, UserProvider as Provider }