import { Component } from '@angular/core';

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css']
})
export class ParkingFormComponent {
  onSubmit(form: any) {
    const data = form.value;
    this.saveToLocalStorage(data);
    form.reset();
  }

  saveToLocalStorage(data: any) {
    const existingData = JSON.parse(localStorage.getItem('parkingData') || '[]');
    existingData.push(data);
    localStorage.setItem('parkingData', JSON.stringify(existingData));
  }
}
