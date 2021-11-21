import { Flight } from "./flight.model";
import { Deserializable } from "./deserializable.model";
import { Place } from "./place.model";
import { Schedule } from "./schedule.model";
import { TripType } from "./tripType.model";


export class FlightSchedule implements Deserializable{
  id: number;
  toTime: string;
  fromTime: string;
  estimateJourneyDuration: string;
  fromPlace: Place;
  toPlace: Place;
  tripType: TripType;
  schedule: Schedule;
  flight: Flight;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.flight = new Flight().deserialize(input.flight);
    return this;
  }

}