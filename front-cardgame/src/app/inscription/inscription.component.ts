import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    identifiant: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    const formData = this.form.value;
    console.log(formData);
  }
}
