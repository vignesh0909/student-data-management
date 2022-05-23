import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub!: Subscription;
  subscription: any;
  role: string[];

  constructor(public auth: AuthService, private router: Router) {
    this.role = [
      'student',
      'faculty'
    ]
  }
  userRole = localStorage.getItem("role");
  ngOnInit() {

  }

  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  });

  onSignup() {
    //console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.auth.createUser(this.signupForm.value);
    }else{
      return;
    }
  }

  ngOnDestroy() {

  }
}
