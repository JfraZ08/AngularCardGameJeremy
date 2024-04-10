import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InscriptionServiceService } from './service/inscription-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private inscriptionService : InscriptionServiceService) {
this.form = this.formBuilder.group({
  name:['', Validators.required],
  login:['', Validators.required],
  password:['', Validators.required]

});
  }

  onSubmit() {
    if (this.form.valid) {
      this.inscriptionService.inscrireUtilisateur(this.form.value)
        .subscribe(
          response => {
            console.log('Inscription réussie', response);
            // Ajoutez ici le code pour gérer la réponse du backend, par exemple, rediriger l'utilisateur
          },
          error => {
            console.error('Erreur lors de l\'inscription', error);
            // Ajoutez ici le code pour gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
          }
        );
    }
  }

  }

