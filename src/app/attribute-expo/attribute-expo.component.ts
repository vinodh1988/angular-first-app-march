import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-expo',
  templateUrl: './attribute-expo.component.html',
  styleUrl: './attribute-expo.component.css'
})
export class AttributeExpoComponent {
  dataItems:string[]=["Furniture","Vegetables","Fruits","Goods"]
  theme1:any = {
    backgroundColor: "#f0f8ff",
    fontFamily: "Arial, sans-serif",
    padding: "10px",
    margin: "10px",
    border: "1px solid black",
    height: "300px",
    width: "360px",

  }

  theme2:any = {
    backgroundColor: "#faebd7",
    fontFamily: "Verdana, sans-serif",
    padding: "10px",
    margin: "10px",
    border: "1px solid black",
    height: "300px",
    width: "360px",
  }

  theme3:any = {
    backgroundColor: "#ffd4e1",
    fontFamily: "courier",
    padding: "10px",
    margin: "10px",
    border: "1px solid #000",
    height: "300px",
    width: "360px",
  }

  currentTheme:any=this.theme1;

  changeTheme(theme:string){
    switch(theme) {
      case 'theme1':
      this.currentTheme = this.theme1;
      break;
      case 'theme2':
      this.currentTheme = this.theme2;
      break;
      case 'theme3':
      this.currentTheme = this.theme3;
      break;
      default:
      this.currentTheme = this.theme1;
    }
  }
}
