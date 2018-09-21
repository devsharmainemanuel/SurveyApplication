import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Survey } from '../../survey';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createSurveyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createSurveyForm = this.formBuilder.group({
      survey_name: ['', Validators.required],
      survey_category: ['', Validators.required]
    });
  }

  get f() { return this.createSurveyForm.controls; }

  createSurvey() {

            // stop here if form is invalid
            // if (this.createSurveyForm.invalid) {
            //     return;
            // } else {
            //   if (this.f.userid.value === this.model.userid && this.f.password.value === this.model.password) {
            //     console.log('Login successful');
            //     // this.authService.authLogin(this.model);
            //     localStorage.setItem('isLoggedIn', 'true');
            //     localStorage.setItem('token', this.f.userid.value);
            //     this.router.navigate([this.returnUrl]);
            //   } else {
            //     this.message = 'Please check your userid and password';
            //   }
            // }

            console.log(this.f.survey_name.value);
        }
}
