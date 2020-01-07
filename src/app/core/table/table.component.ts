import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Subscription} from 'rxjs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
// import {exportTOExcel} from "../core.functions";


@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class TableComponent implements OnInit, OnChanges {
  /** Collections of subscribed variables */
  fundDataSource: any;
  @Input() headerNames: Array<string>;
  @Input() columnsToDisplay: any;
  @Input() actionBool = false;
  @Output() actionData: any = new EventEmitter();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild('filter', {static: false}) filter: ElementRef;

  ngOnInit(): void {
    this.fundDataSource = new MatTableDataSource(this.columnsToDisplay);
    this.fundDataSource.paginator = this.paginator;
    this.fundDataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fundDataSource = new MatTableDataSource(this.columnsToDisplay);
    this.fundDataSource.paginator = this.paginator;
    this.fundDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.fundDataSource.filter = filterValue.trim().toLowerCase();
  }

  downloadXLSX(data) {
  }

  actionClick(element) {
    this.actionData.emit(element);
  }

  pageLength = 0;
  pageSize = 15;
  sortData(val) {
  }
  next(event) {
  }
}
