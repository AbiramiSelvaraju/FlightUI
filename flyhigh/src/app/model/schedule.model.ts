import { Deserializable } from "./deserializable.model";

export class Schedule implements Deserializable{
  id: number;
  days: string;

  deserialize(input: any) : this{
    Object.assign(this, input);
    return this;
  }

}