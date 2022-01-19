import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css'],
})
export class UsersComponentComponent implements OnInit {
  userId: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.userId = +params['id'];
    });
  }
  ngOnInit(): void {}
}
