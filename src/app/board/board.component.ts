import { Component, Input, OnInit } from '@angular/core';

import { Board, Tile, TileType } from '../utils/types';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board;

  @Input() size: number = 15;

  constructor() {
    console.log(this.size);

    this.board = {
      grid: new Array(this.size).
        fill(new Array<Tile>(this.size).
          fill({
            letter: "",
            position: { x: 0, y: 0 },
            tile: TileType.Empty
          }))
    }
  }

  generateBoard() {

  }

  ngOnInit(): void {
  }

}
