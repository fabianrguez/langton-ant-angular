import { Component, OnInit } from '@angular/core';
import { Cell } from '../../pojo/cell';
import { BoardService } from '../../services/boardService/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardService]
})
export class BoardComponent implements OnInit {

  board: Cell[][];

  constructor(private _boardService: BoardService) {
    this._boardService.initializeBoard();
    this.board = this._boardService.getBoard();
  }

  ngOnInit() {
    this.startGame();
  }

  private startGame(): void {
    setInterval(() => {
      this._boardService.moveAnt();
      this.board = this._boardService.getBoard();
    }, 1500);
  }
}
