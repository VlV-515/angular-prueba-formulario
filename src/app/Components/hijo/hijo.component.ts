import {
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnChanges {
  detectionRef = Inject(ChangeDetectorRef);
  constructor() {}
  @Input() variablePadre!: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changesHijo: changes });
    const { variablePadre } = changes;
    console.log({ variablePadre });
    this.detectionRef.detectChanges();
  }
}
