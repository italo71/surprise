import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
  ) { }
  alert(title:any, message:any) {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
    })
  }
  erro(title:any, message:any, btnConfirm:boolean = false, timer:number = 2000) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      showConfirmButton: btnConfirm,
      timer: timer
    })
  }
  sussecc(title:any, message:any) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
    })
  }

  custon(obj:SweetAlertOptions<any>){
    return Swal.fire(obj);
  }
}