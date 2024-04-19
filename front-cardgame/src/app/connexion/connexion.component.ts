import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnexionService } from './service/connexion.service';
import { Router } from '@angular/router'; // Importez Router depuis @angular/router

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  ConnexionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private connexionService: ConnexionService, private router: Router){
  this.ConnexionForm = this.formBuilder.group({
    
    login:['', Validators.required],
    password:['', Validators.required]
  });

  }

  onSubmit() {
    if(this.ConnexionForm.valid){
      this.connexionService.connexionUtilisateur(this.ConnexionForm.value)
      .subscribe(
        response => {
          console.log('Connexion Réussie', response);
          this.router.navigate(['/admin'])// ici direction vers page admin
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
