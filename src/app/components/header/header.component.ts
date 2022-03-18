import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() colsNumber: number = 0;

  colsArr: string[] = [];
  isOdd = false;
  colWidth: string = '';
  middleColNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.colWidth = (100 / this.colsNumber).toString() + '%';
    this.middleColNumber = Math.trunc(this.colsNumber / 2);
  }

  ngOnChanges() {
    this.colsArr = [];

    this.colWidth = (100 / this.colsNumber).toString() + '%';
    this.middleColNumber = Math.trunc(this.colsNumber / 2);

    this.colsNumber % 2 === 0 ? this.isOdd = false : this.isOdd = true;

    for (let i = 1; i <= this.colsNumber; i++) {
      this.colsArr.push('');
    }
  }
}
