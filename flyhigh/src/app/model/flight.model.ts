import { Airline } from "./airline.model";
import { Deserializable } from "./deserializable.model";


export class Flight implements Deserializable{
  id: number;
  number: string;
  instrumentUsed: string;
  totalBusinessSeats: string;
  totalNonBusinessSeats: string;
  numberOfRows: string;
  airline: Airline;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.airline = new Airline().deserialize(input.airline);
    return this;
  }

}