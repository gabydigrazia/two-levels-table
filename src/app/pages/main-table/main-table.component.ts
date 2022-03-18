import { Component } from '@angular/core';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {

  columns: number = 3;

  displayedColumnsMain: string[] = ['header'];
  displayedColumnsSecondLevel: string[] = ['col1', 'col2', 'col3'];

  addNewColumn(): void {
    this.columns += 1;
  }
}
