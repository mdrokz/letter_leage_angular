import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-tray',
  templateUrl: './letter-tray.component.html',
  styleUrls: ['./letter-tray.component.scss']
})
export class LetterTrayComponent implements OnInit {

  alphabets:any= new Array(7).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

}
