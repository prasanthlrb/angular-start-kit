import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';
export interface PeriodicElement {
  name: string;
  company: string;
  email: string;
  phone: string;
  gstStatus: string;
  receive: number;
  pay: number;
}
const data: PeriodicElement[] = [
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 5000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 6000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 10000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 6000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 3000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 2000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'prasanth', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
  { name: 'Austin', company: 'Swimlane', email: 'info@Swimlane.com',
   phone: '9087654321', gstStatus: 'Unregistered Business', receive: 15000, pay: 4000 },
];
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows = [];
  temp = [];
  myDrop: any;
  myDrop1: any;
  columns = [
    { name: 'Name' },
    { name: 'Company Name' },
    { name: 'Email' },
    { name: 'Phone' },
    { name: 'GST TREATMENT' },
    { name: 'RECEIVABLES' },
    { name: 'PAYABLES' }
  ];

  constructor() {
    this.temp = [...data];
    this.rows = data;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
}


}
