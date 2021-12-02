import { Deserializable } from "./deserializable.model";
import { Place } from "./place.model";
import { TripType } from "./tripType.model";

export class SearchReq implements Deserializable{
    
    fromPlace: Place;
    toPlace: Place;
    tripType: TripType;
    departOn: string;

  deserialize(input: any) : this{
    Object.assign(this, input);
    return this;
  }

}