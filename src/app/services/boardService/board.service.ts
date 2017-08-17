import { Injectable } from '@angular/core';
import { Cell } from '../../pojo/cell';
import { Directions } from '../../enumerations/directions';

@Injectable()
export class BoardService {

  private board: Cell[][] = [];

  constructor() { }

  public initializeBoard(): void {
    for (let row = 0; row < 20; row++) {
      this.board[row] = [];
      for (let column = 0; column <  20; column++) {
        this.board[row][column] = new Cell(false, false, Directions.NOT_DEFINED);
      }
    }
    this.board[Math.floor(this.board.length / 2)][Math.floor(this.board.length / 2)] = new Cell(true, true, Directions.LEFT);
  }

  public getBoard(): Cell[][] {
    return this.board;
  }

  public moveAnt(): void {
    for (let row = 0; row < 20; row++) {
      for (let column = 0; column < 20; column++) {
        if (this.board[row][column].getHasAnt()) {
          switch (this.board[row][column].getDirection()) {
            case Directions.UP:
              if (!this.board[row - 1][column].getIsBlack()) {
                if (!this.board[row][column + 1].getIsBlack()) {
                  this.board[row][column + 1] = new Cell(true, true, Directions.RIGTH);
                } else {
                  this.board[row][column + 1] = new Cell(true, false, Directions.RIGTH);
                }
              } else {
                if (!this.board[row][column - 1].getIsBlack()) {
                  this.board[row][column - 1] = new Cell(true, true, Directions.LEFT);
                } else {
                  this.board[row][column - 1] = new Cell(true, false, Directions.LEFT);
                }
              }
              break;
            case Directions.RIGTH:
              if (!this.board[row][column + 1].getIsBlack()) {
                if (!this.board[row + 1][column].getIsBlack()) {
                  this.board[row + 1][column] = new Cell(true, true, Directions.DOWN);
                } else {
                  this.board[row + 1][column] = new Cell(true, false, Directions.DOWN);
                }
              } else {
                if (!this.board[row - 1][column].getIsBlack()) {
                  this.board[row - 1][column] = new Cell(true, true, Directions.UP);
                } else {
                  this.board[row - 1][column] = new Cell(true, false, Directions.UP);
                }
              }
              break;
            case Directions.DOWN:
              if (!this.board[row + 1][column].getIsBlack()) {
                if (!this.board[row][column - 1].getIsBlack()) {
                  this.board[row][column - 1] = new Cell(true, true, Directions.LEFT);
                } else {
                  this.board[row][column - 1] = new Cell(true, false, Directions.LEFT);
                }
              } else {
                if (!this.board[row][column + 1].getIsBlack()) {
                  this.board[row][column + 1] = new Cell(true, true, Directions.RIGTH);
                } else {
                  this.board[row][column + 1] = new Cell(true, false, Directions.RIGTH);
                }
              }
              break;
            case Directions.LEFT:
              if (!this.board[row][column - 1].getIsBlack()) {
                if (!this.board[row - 1][column].getIsBlack()) {
                  this.board[row - 1][column] = new Cell(true, true, Directions.UP);
                } else {
                  this.board[row - 1][column] = new Cell(true, false, Directions.UP);
                }
              } else {
                if (!this.board[row + 1][column].getIsBlack()) {
                  this.board[row + 1][column] = new Cell(true, true, Directions.DOWN);
                } else {
                  this.board[row + 1][column] = new Cell(true, false, Directions.DOWN);
                }
              }
              break;
          }
          this.board[row][column] = new Cell(false, true, Directions.NOT_DEFINED);
        }
      }
    }
  }

}
