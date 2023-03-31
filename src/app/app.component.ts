import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  formulario!: FormGroup;
  campoForm!: FormControl;
  campoNgModel = '';
  constructor() {}
  ngOnInit(): void {
    this.campoForm = new FormControl('', []);
    this.iniciaFormulario();
  }

  public ngModelCambio(event: any): void {
    console.log({ campoNgModel: this.campoNgModel });
    console.log({ event });
  }

  private iniciaFormulario(): void {
    this.formulario = new FormGroup({
      name: new FormControl('', []),
      lastName: new FormControl('', []),
    });
    this.iniciaSubcriptions();
  }
  private iniciaSubcriptions(): void {
    this.formulario.valueChanges.subscribe((fomValue) => {
      console.log({ fomValue });
      console.log({ formulario: this.formulario });
    });
    this.formulario.statusChanges.subscribe((formStatus) => {
      console.log({ formStatus });
      console.log({ formulario: this.formulario });
    });
    this.formulario.get('name')?.valueChanges.subscribe((nameValue) => {
      console.log({ nameValue });
      console.log({ formulario: this.formulario });
    });
    this.formulario.get('lastName')?.valueChanges.subscribe((lastNameValue) => {
      console.log({ lastNameValue });
      console.log({ formulario: this.formulario });
    });
    this.campoForm.valueChanges.subscribe((campoFormValue) => {
      console.log({ campoFormValue });
      console.log({ formulario: this.formulario });
    });
  }
}
