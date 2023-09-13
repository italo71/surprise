import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export function createCustomInputControlValueAccessor(extendedInputComponent: any) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => extendedInputComponent),
    multi: true
  };
}

/* @Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
}) */
@Component({
  template: ''
})


export class GenericInputFieldComponent implements ControlValueAccessor, OnInit {
  @ViewChild('input') inputRef: ElementRef;

  // The internal data model
  public innerValue: any = '';

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onChangeCallback: any;

  // implements ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }
  // implements ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  // implements ControlValueAccessor interface - not used, used for touch input
  registerOnTouched() { }

  // change events from the textarea
  private onChange() {
    const input = <HTMLInputElement>this.inputRef.nativeElement;
    // get value from text area
    const newValue = input.value;

    // update the form
    this.onChangeCallback(newValue);
  }

  ngOnInit() {
    const inputElement = <HTMLInputElement>this.inputRef.nativeElement;
    inputElement.onchange = () => this.onChange();
    inputElement.onkeyup = () => this.onChange();
  }

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';/* 
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>(); */
  constructor() { }
}

