import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {
  parkingData: any[] = [];

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    this.parkingData = JSON.parse(localStorage.getItem('parkingData') || '[]');
  }
}
