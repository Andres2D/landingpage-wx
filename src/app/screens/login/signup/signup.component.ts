import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  countries: string[] = [
    'Argentina',
    'Chile',
    'Colombia',
    'Mexico',
    'Peru'
  ];

  argentinaProvinces: string[] = [
    'Buenos Aires',
    'Cordoba',
    'Santa Fe',
    'Mendoza',
    'Chaco'
  ];

  colombiaProvinces: string[] = [
    'Bolivar',
    'Boyaca',
    'Caldas',
    'Cauca',
    'Magdalena'
  ];

  chileProvinces: string[] = [
    'Santiago',
    'La Serena',
    'Concepción',
    'Temuco',
    'Vina del Mar'
  ];

  mexicoProvinces: string[] = [
    'Monterrey',
    'Guadalajara',
    'Merida',
    'Acapulco',
    'Saltillo'
  ];

  peruProvinces: string[] = [
    'Lima',
    'Cusco',
    'Trujillo',
    'Callao',
    'Arequipa'
  ];

  provinceList: string[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      country: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]+$')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]+$')]),
      abeasData: new FormControl(false, Validators.required)
    });
  }

  SingUp(){
    if(!this.form.invalid){
      this.loginService.SingUp(this.form.value)
      .subscribe(token => {
        console.log(token);
      }, error => {
        console.log(error);
      });
    }else{
      const invalid = [];
        const controls = this.form.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        console.log(invalid);
      console.log(this.form.value);
    }
  }

  LoadProvinces(){
    switch(this.form.value.country){
      case 'Argentina':
        this.provinceList = this.argentinaProvinces;
        break;
      case 'Chile':
        this.provinceList = this.chileProvinces;
        break;
      case 'Colombia':
        this.provinceList = this.colombiaProvinces;
        break;
      case 'Peru':
        this.provinceList = this.peruProvinces;
        break;
      case 'Mexico':
        this.provinceList = this.mexicoProvinces;
        break;
      default:
        break;
    }
  }
}
