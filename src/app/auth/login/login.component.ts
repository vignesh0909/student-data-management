import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators, FormsModule} from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';

//import { AuthService } from "../../services/auth.service";
import { AuthService } from "app/services/auth.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  faLock = faLock;
  isLoading = false;
  responsedata: any;
  private authStatusSub!: Subscription;
  subscription: any;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/admin']);
    }
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  Proceedlogin() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.auth.adminLogin(this.loginForm.value);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
