import { Plan } from "./planType";

type AddOnId = 'online' | 'storage' | 'profile';

export interface AddOnsType {
  id: AddOnId;
  name: string;
  description: string;
  price: number;
  plan: Plan['plan'];
  state: boolean;
}