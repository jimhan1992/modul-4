import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color:any = "#000000";
  fontSize:any=14;

  constructor() { }

  ngOnInit(): void {
  }

}
