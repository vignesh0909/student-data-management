import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';


//import { AuthService } from "../../services/auth.service";
import { LoginService } from '../../services/login.service';

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

  constructor(private service: LoginService, private route: Router) {}

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  Proceedlogin() {
    if (this.loginForm.valid) {
      this.service.Proceddlogin(this.loginForm.value).subscribe(result => {
        this.responsedata = result;
        if (this.responsedata != null) {
          localStorage.setItem('token', this.responsedata.jwtToken);
          localStorage.setItem('refreshtoken', this.responsedata.refreshToken);
          this.service.updatemenu.next();
          this.route.navigate(['']);
        } else {
          alert("login Failed");
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
