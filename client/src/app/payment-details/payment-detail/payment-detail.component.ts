import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form != null) {
      form.resetForm();
    }

    this.service.formData = {
      Id:  0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '' ,
      CVV: ''
    };
  }

  submit(form: NgForm): void {
    // form.value
    console.log(form.value);
  }
}
