import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail;
  constructor(private http: HttpClient) { }

  post(formData: PaymentDetail) {

  }
}
