import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User, Gender, UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() deleted = new EventEmitter();

  public readonly Gender = Gender;

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {}

  onUserDelete(ev: MouseEvent) {
    ev.preventDefault();
    this.deleted.emit();
  }
}
