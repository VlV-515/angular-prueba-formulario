import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnChanges {
  @Input() variablePadre!: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changesHijo: changes });
    const { variablePadre } = changes;
    console.log({ variablePadre });
  }
}
