import { PaymentDetail } from './../../shared/payment-detail.model';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.scss']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service:  PaymentDetailService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getAll();
  }

  populateForm(paymentDetail: PaymentDetail) {
    this.service.formData = Object.assign({}, paymentDetail);
  }

  delete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.delete(id).subscribe(
        res => {
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
          this.service.getAll();
        },
        err => {
          console.log(err);
        });
    }
  }
}
