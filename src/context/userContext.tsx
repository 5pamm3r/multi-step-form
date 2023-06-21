import React, { useEffect, useState } from 'react';
import { Plan } from '../types/planType';
import { AddOnsType } from '../types/addOnsType';
import { User } from '../types/userType';

export interface Context {
  state: {
    user: User;
    error: boolean;
    planSelected: Plan;
    addOns: AddOnsType[];
    total: number;
    planPrices: Price;
    addOnsPrices: { online: number, storage: number, profile: number };
  }
  actions: {
    setUser: React.Dispatch<React.SetStateAction<User>>;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [user, setUser] = useState<User>({ name: '', email: '', phone: '' })
  const [error, setError] = useState<boolean>(false);

  const [planSelected, setPlanSelected] = useState<Plan>({
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
  const [addOnsPrices, setAddOnsPrices] = useState({
    online: 1,
    storage: 2,
    profile: 2,
  })

  React.useEffect(() => {
    planSelected.plan === 'monthly' ? setAddOnsPrices({
      online: 1,
      storage: 2,
      profile: 2,
    }) : setAddOnsPrices({
      online: 10,
      storage: 20,
      profile: 20
    })
  }, [planSelected])

  const [addOns, setAddOns] = useState<AddOnsType[]>([
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

  const [total, setTotal] = useState<number>(0);

  const addToTotal = (plan: number, addOns: number) => {
    setTotal(plan + addOns);
  }


  const state: Context['state'] = {
    user,
    error,
    planSelected,
    addOns,
    total,
    planPrices,
    addOnsPrices

  }
  const actions: Context['actions'] = {
    setUser,
    setError,
    setPlanSelected,
    setAddOns,
    addToTotal,
  }

  return <UserContext.Provider value={{ state, actions }}>{children}</UserContext.Provider>
}

export { UserContext as default, UserProvider as Provider }