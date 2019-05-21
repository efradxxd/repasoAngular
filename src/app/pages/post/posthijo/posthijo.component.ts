import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posthijo',
  templateUrl: './posthijo.component.html',
  styleUrls: ['./posthijo.component.css']
})
export class PosthijoComponent implements OnInit {

  @Input()postRemoto;
  // @Output()clickpost = new EventEmitter<number>();
  @Output()clickpost = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickHijo() {
    this.clickpost.emit(this.postRemoto.id);
    //console.log(this.postRemoto.id);
  }
}
