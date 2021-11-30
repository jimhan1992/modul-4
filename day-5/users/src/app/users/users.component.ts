import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  width = 50;
  txt?: any;
  // @ts-ignore
  users: User[] = [
    {
      name: 'duong',
      email: 'duong@gmail.com',
      phone: '0977460099',
      address: 'HN',
      avatar: 'https://thiepnhanai.com/wp-content/uploads/2021/04/hinh-avatar-cap-doi-1.jpg'
    },
    {
      name: 'quan',
      email: 'quan@gmail.com',
      phone: '0977460099',
      address: 'HN',
      avatar: 'https://thiepnhanai.com/wp-content/uploads/2021/04/hinh-avatar-cap-doi-1.jpg'
    },
    {
      name: 'truong',
      email: 'truong@gmail.com',
      phone: '0977460099',
      address: 'HN',
      avatar: 'https://thiepnhanai.com/wp-content/uploads/2021/04/hinh-avatar-cap-doi-1.jpg'
    },
    {
      name: 'chien',
      email: 'chien@gmail.com',
      phone: '0977460099',
      address: 'HN',
      avatar: 'https://thiepnhanai.com/wp-content/uploads/2021/04/hinh-avatar-cap-doi-1.jpg'
    },
    {
      name: 'son',
      email: 'son@gmail.com',
      phone: '0977460099',
      address: 'HN',
      avatar: 'https://thiepnhanai.com/wp-content/uploads/2021/04/hinh-avatar-cap-doi-1.jpg'
    },
    {
      name: 'thanh',
      email: 'thanh@gmail.com',
      phone: '0977460099',
      address: 'HN',
      avatar: 'https://thiepnhanai.com/wp-content/uploads/2021/04/hinh-avatar-cap-doi-1.jpg'
    },
    {
      name: 'han',
      email: 'han@gmail.com',
      phone: '0977460099',
      address: 'HN',
      avatar: 'https://thiepnhanai.com/wp-content/uploads/2021/04/hinh-avatar-cap-doi-1.jpg'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(index: any) {
    if(confirm('are you sure?')){
      this.users.splice(index, 1);
      this.txt = {
        text: 'Delete successfully.'
      }
    }
  }

}
