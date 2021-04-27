import { Injectable } from "@angular/core";

@Injectable()

export class TemperatureConverterService {

  getTemperatureScaleList(): string[] {
    return [
      "Fahrenheit",
      "Celsius",
      "Kelvin"
    ];
  }

  getConvertedTemperature(fromValue: number, fromScale: string, toScale: string): number {

    if (fromScale == toScale) {
      return fromValue;
    }

    switch (fromScale) {
      case "Fahrenheit":
        if (toScale == "Celsius") {
          return (fromValue - 32) * 5 / 9;
        }
        else if (toScale == "Kelvin") {
          return (fromValue - 32) * 5 / 9 + 273.15;
        }
        break;
      case "Celsius":
        if (toScale == "Fahrenheit") {
          return (fromValue * 9 / 5) + 32;
        }
        else if (toScale == "Kelvin") {
          return fromValue + 273.15;
        }
        break;
      case "Kelvin":
        if (toScale == "Celsius") {
          return fromValue - 273.15;
        }
        else if (toScale == "Fahrenheit") {
          return (fromValue - 273.15) * 9 / 5 + 32;
        }
        break;
      default:
        break;
    }
  }
}
