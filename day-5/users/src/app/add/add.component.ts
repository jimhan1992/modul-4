import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   profileForm?: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      avata: new FormControl(''),
    });
  }
  onSubmit(){
    // @ts-ignore
    console.log(this.profileForm.value);

  }

}
