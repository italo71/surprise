import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { GenericInputFieldComponent } from './components/generic-input-field/generic-input-field.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    GenericInputFieldComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputFieldComponent
  ]
})
export class SharedModule { }
