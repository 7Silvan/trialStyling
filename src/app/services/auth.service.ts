import { AlertType } from './../enums/alert-type.enum';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../classes/user';
import { AlertService } from './alert.service'
import { Alert } from './../classes/alert';

@Injectable()
export class AuthService {

  public currentUser: Observable<User | null>;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) {
    // TODO fetch the user from Firebase backend, then set the user
  }

  public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
    // TODO call Firebase signup function
    return Observable.create(true);
  }

  public login(email: string, password: string): Observable<boolean> {
    // TODO call Firebase login function
    return Observable.create(true);
  }

  public logout(): void {
    // TODO call Firebase logout function
    this.router.navigate(['/login']);
    this.alertService.alerts.next(new Alert('You have been signed out.'))
  }

  private handleError(error: Error) {
    this.alertService.alerts.next(new Alert(error.message, AlertType.Danger));
  }

}
