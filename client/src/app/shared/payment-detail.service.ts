import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail;
  readonly apiURL = 'https://localhost:44303/api';
  list: Array<PaymentDetail>;

  constructor(private http: HttpClient) { }

  post() {
    return this.http.post(`${this.apiURL}/PaymentDetail`, this.formData);
  }

  put() {
    return this.http.put(`${this.apiURL}/PaymentDetail/${this.formData.Id}`, this.formData);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/PaymentDetail/${id}`);
  }

  getAll() {
    this.http.get(`${this.apiURL}/PaymentDetail`)
    .toPromise()
    .then(res => {
        this.list = res as Array<PaymentDetail>;
    });
  }
}
