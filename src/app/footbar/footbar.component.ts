import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.sass']
})
export class FootbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
contact(){
	alert("Our agent is on the way to your current location. It may be a Katze or a hamster!")
}
}