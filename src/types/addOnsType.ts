import { Plan } from "./planType";

export interface AddOnsType {
  id: string;
  name: string;
  description: string;
  price: number;
  plan: Plan['plan'];
  state: boolean;
}