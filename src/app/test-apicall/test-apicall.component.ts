import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-test-apicall',
  templateUrl: './test-apicall.component.html',
  styleUrls: ['./test-apicall.component.css']
})
export class TestAPICallComponent implements OnInit {

  constructor(private http:HttpClient) {}
  
  information : any;
  name: string = ''
  
  apiUrl = "http://api.openweathermap.org/data/2.5/weather"
  apiKey = "aeacd8b970383a81ed67de5237eef1a0"
  
  newUrl = this.apiUrl + '?' + 'q=' + "Tampa" + '&units=imperial' + '&appid=' + this.apiKey

  getWeatherAndTemp = () => {
    const x = this.name
    let resp = this.http.get(this.apiUrl + '?' + 'q=' + x + '&units=imperial' + '&appid=' + this.apiKey)
    resp.subscribe((data) => this.setData(data))
  }

  getWeatherAndTempTampa = () => {
    let resp = this.http.get(this.newUrl)
    resp.subscribe((data) => this.setData(data))
    console.log(this.name)
  }

  setData = (data) => {
    this.information = data
    console.log(this.information, "information")
    this.name = ''
  }
  

  ngOnInit() {
    this.getWeatherAndTempTampa()
  }

}
