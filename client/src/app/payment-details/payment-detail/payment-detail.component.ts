import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailService,
              private toastr: ToastrService) { }

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

  onSubmit(form: NgForm): void {
    if (this.service.formData.Id === 0) {
      this.insert(form);
    } else {
      this.update(form);
    }
  }

  private insert(form: NgForm) {
    this.service.post().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');

        this.service.getAll();
      },
      err => {
        console.log(err);
      });
  }

  private update(form: NgForm) {
    this.service.put().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'Payment Detail Register');

        this.service.getAll();
      },
      err => {
        console.log(err);
      });
  }
}
