import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-second-level-table',
  templateUrl: './second-level-table.component.html',
  styleUrls: ['./second-level-table.component.scss']
})
export class SecondLevelTableComponent implements OnChanges {

  @Input() colsNumber: number = 0;

  displayedColumns: string[] = ['col1', 'col2', 'col3'];
  dataSource: any;
  cellData = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium magnam, quasi est atque, incidunt ipsa excepturi similique deserunt, officia autem non quo quibusdam. Delectus corrupti sit et odio odit?'];

  ngOnChanges() {
    this.displayedColumns = [];
    this.dataSource = [{}];

    for (let i = 1; i <= this.colsNumber; i++) {
      this.displayedColumns.push(`col${i}`);

      this.dataSource.push(`col${i}: ${this.cellData}`)
    }
  }
}
