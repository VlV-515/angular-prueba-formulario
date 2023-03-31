import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.scss'],
})
export class Hijo2Component implements OnChanges {
  @Input() variablePadre!: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changesHijo2: changes });
  }
}
