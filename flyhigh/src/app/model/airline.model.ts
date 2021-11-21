import { Deserializable } from "./deserializable.model";

export class Airline implements Deserializable{
  id: number;
  name: string;
  contactNumber: string;
  contactAddress: string;
  // isActive: boolean;
  

  deserialize(input: any) : this{
    // if(input.isActive){
    //   input.isActive = "Active";
    // }
    Object.assign(this, input);
    return this;
  }

}