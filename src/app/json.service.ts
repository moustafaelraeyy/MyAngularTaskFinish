import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  AllData:any;
  constructor() { }

  getAllData(){
    return this.AllData
  }
  getNewObject(Obj){
      return this.AllData.unshift(Obj);
  }
  getJson(json){
    this.AllData = json;
  }
}
