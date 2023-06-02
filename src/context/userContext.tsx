import React from 'react';
import { User } from '../types/userType';
import { Plan } from '../types/planType';
import { AddOnsType } from '../types/addOnsType';

export interface Context {
  state: {
    user: User;
    planSelected: Plan;
    addOns: AddOnsType[];
    total: number;
  }
  actions: {
    setUser: React.Dispatch<React.SetStateAction<User>>;
    setPlanSelected: React.Dispatch<React.SetStateAction<Plan>>;
    setAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>;
    addToTotal: (plan: number, addOns: number) => void;
  }
}

const UserContext = React.createContext({} as Context);

interface Props {
  children: React.ReactNode;
}
const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState<User>({ name: '', email: '', phone: '' })
  const [planSelected, setPlanSelected] = React.useState<Plan>({
    name: '',
    price: 0,
    plan: 'monthly',
  });

  const [addOns, setAddOns] = React.useState<AddOnsType[]>([
    {
      id: 'btn1',
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: 1,
      plan: planSelected.plan === 'monthly' ? 'mo' : 'yr',
      state: false,
    }, {
      id: 'btn2',
      name: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
      plan: planSelected.plan === 'monthly' ? 'mo' : 'yr',
      state: false,
    }, {
      id: 'btn3',
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: 2,
      plan: planSelected.plan === 'monthly' ? 'mo' : 'yr',
      state: false,
    }
  ])
  const [total, setTotal] = React.useState<number>(0);

  const addToTotal = (plan: number, addOns: number) => {
    setTotal(plan + addOns);
  }


  const state: Context['state'] = {
    user,
    planSelected,
    addOns,
    total,

  }
  const actions: Context['actions'] = {
    setUser,
    setPlanSelected,
    setAddOns,
    addToTotal,
  }

  return <UserContext.Provider value={{ state, actions }}>{children}</UserContext.Provider>
}

export { UserContext as default, UserProvider as Provider }