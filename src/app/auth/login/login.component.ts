import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators, FormsModule} from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';

//import { AuthService } from "../../services/auth.service";
import { AuthService } from "app/services/auth.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  responsedata: any;
  private authStatusSub!: Subscription;
  subscription: any;
  role: string[];

  constructor(private auth: AuthService, private router: Router) {}

  userRole = localStorage.getItem("role");

  ngOnInit() {
    if(this.auth.getIsAuth() && this.userRole == "admin"){
      this.router.navigate(['/admin']);
    }
    else if(this.auth.getIsAuth() && this.userRole == "student"){
      this.router.navigate(['/student']);
    }
    else if(this.auth.getIsAuth() && this.userRole == "faculty"){
      this.router.navigate(['/faculty']);
    }
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  Proceedlogin() {
    //console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.auth.loginUser(this.loginForm.value);
    }
    else{
      return;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
