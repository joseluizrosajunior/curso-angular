import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {

  @Input() url:  String;
  @Input() title: String;


  constructor() { }

  ngOnInit() {
  }

}
