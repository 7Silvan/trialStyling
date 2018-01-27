import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LoadingService } from './../../servies/loading.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertType } from './../../enums/alert-type.enum';
import { Alert } from './../../classes/alert';
import { AlertService } from './../../services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private alertService: AlertService,
    private loadingService: LoadingService,
    private auth: AuthService,
    private router: Router
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {
    
    if (this.loginForm.valid) {
      this.loadingService.isLoading.next(true);
      const {email, password} = this.loginForm.value;

      // TODO call the auth service
      this.subscriptions.push(
        this.auth.login(email, password).subscribe(success => {
          if (success) {
            this.router.navigate(['/chat']);
          }
          this.loadingService.isLoading.next(false);
        })
      );
    } else {
      const failedLoginAlert = new Alert('Your email or password were invalid, try again.', AlertType.Danger);
      this.loadingService.isLoading.next(false);
      this.alertService.alerts.next(failedLoginAlert);
    }
   
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
