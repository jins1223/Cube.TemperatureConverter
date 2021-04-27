import { Component } from '@angular/core';
import { TemperatureConverterService } from "./temperature-converter.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public value1: number;
  public value2: number;
  public scale1: string;
  public scale2: string;
  public temperatureScaleList: string[];

  constructor(private temperatureConverterService: TemperatureConverterService) { }

  ngOnInit(): void {
    this.value1 = 1;
    this.temperatureScaleList = this.temperatureConverterService.getTemperatureScaleList();
    this.scale1 = this.temperatureScaleList[0];
    this.scale2 = this.temperatureScaleList[1];
    this.value2 = this.temperatureConverterService.getConvertedTemperature(this.value1, this.scale1, this.scale2);
  }
  
  public convertValue1() : void {
    this.value2 = this.temperatureConverterService.getConvertedTemperature(this.value1, this.scale1, this.scale2);
  }

  public convertValue2() : void {
    this.value1 = this.temperatureConverterService.getConvertedTemperature(this.value2, this.scale2, this.scale1);
  }

}
