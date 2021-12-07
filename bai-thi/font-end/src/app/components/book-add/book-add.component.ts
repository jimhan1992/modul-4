import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  formAddBook?: FormGroup

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router,) { }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      title:['',[Validators.required]],
      author:['',[Validators.required]],
      description:['',[Validators.required]]
    })
  }
  submit() {
    // console.log(this.formAddUser?.value)
    let data = this.formAddBook?.value
    this.bookService.createBook(data).subscribe(res => {
      this.router.navigate(['books']);
    })
  }

}
