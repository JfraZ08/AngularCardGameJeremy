import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  ConnexionForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    const formData = this.ConnexionForm.value
    console.log(formData)
  }
}
