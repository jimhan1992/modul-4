import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../../services/book.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book?: any
  id?: number

  constructor(private activeRouter: ActivatedRoute,
              private BooksService: BookService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = paramMap.get('id')
      this.BooksService.show(this.id).subscribe(res => {
        this.book = res
        console.log(this.book)
      })
    })
  }

}
