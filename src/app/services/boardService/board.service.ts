import { Injectable } from '@angular/core';
import { Cell } from '../../pojo/cell';
import { Directions } from '../../enumerations/directions';
import { Colors } from '../../enumerations/colors';


@Injectable()
export class BoardService {

  private board: Cell[][] = [];

  constructor() { }

  public initializeBoard(): void {
    for (let row = 0; row < 20; row++) {
      this.board[row] = [];
      for (let column = 0; column < 20; column++) {
        this.board[row][column] = new Cell(false, Colors.WHITE, Directions.NOT_DEFINED);
      }
    }
    this.board[Math.floor(this.board.length / 2)][Math.floor(this.board.length / 2)] = new Cell(true, Colors.WHITE, Directions.LEFT);
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
              if (this.board[row][column].getColor() === Colors.WHITE) {
                this.board[row][column] = new Cell(false, Colors.BLACK, Directions.NOT_DEFINED);
                if (this.board[row][column + 1].getColor() === Colors.WHITE) {
                  this.board[row][column + 1] = new Cell(true, Colors.WHITE, Directions.RIGTH);
                } else {
                  this.board[row][column + 1] = new Cell(true, Colors.BLACK, Directions.RIGTH);
                }
              } else {
                this.board[row][column] = new Cell(false, Colors.WHITE, Directions.NOT_DEFINED);
                if (this.board[row][column - 1].getColor() === Colors.WHITE) {
                  this.board[row][column - 1] = new Cell(true, Colors.WHITE, Directions.LEFT);
                } else {
                  this.board[row][column - 1] = new Cell(true, Colors.BLACK, Directions.LEFT);
                }
              }
              break;

            case Directions.RIGTH:
              if (this.board[row][column].getColor() === Colors.WHITE) {
                this.board[row][column] = new Cell(false, Colors.BLACK, Directions.NOT_DEFINED);
                if (this.board[row + 1][column].getColor() === Colors.WHITE) {
                  this.board[row + 1][column] = new Cell(true, Colors.WHITE, Directions.DOWN);
                } else {
                  this.board[row + 1][column] = new Cell(true, Colors.BLACK, Directions.DOWN);
                }
              } else {
                this.board[row][column] = new Cell(false, Colors.WHITE, Directions.NOT_DEFINED);
                if (this.board[row + 1][column].getColor() === Colors.WHITE) {
                  this.board[row + 1][column] = new Cell(true, Colors.WHITE, Directions.UP);
                } else {
                  this.board[row + 1][column] = new Cell(true, Colors.BLACK, Directions.UP);
                }
              }
              break;

              case Directions.DOWN:
              if (this.board[row][column].getColor() === Colors.WHITE) {
                this.board[row][column] = new Cell(false, Colors.BLACK, Directions.NOT_DEFINED);
                if (this.board[row][column - 1].getColor() === Colors.WHITE) {
                  this.board[row][column - 1] = new Cell(true, Colors.WHITE, Directions.LEFT);
                } else {
                  this.board[row][column - 1] = new Cell(true, Colors.BLACK, Directions.LEFT);
                }
              } else {
                this.board[row][column] = new Cell(false, Colors.WHITE, Directions.NOT_DEFINED);
                if (this.board[row][column + 1].getColor() === Colors.WHITE) {
                  this.board[row][column + 1] = new Cell(true, Colors.WHITE, Directions.RIGTH);
                } else {
                  this.board[row][column + 1] = new Cell(true, Colors.BLACK, Directions.RIGTH);
                }
              }
              break;

              case Directions.LEFT:
              if (this.board[row][column].getColor() === Colors.WHITE) {
                this.board[row][column] = new Cell(false, Colors.BLACK, Directions.NOT_DEFINED);
                if (this.board[row - 1][column].getColor() === Colors.WHITE) {
                  this.board[row - 1][column] = new Cell(true, Colors.WHITE, Directions.UP);
                } else {
                  this.board[row - 1][column] = new Cell(true, Colors.BLACK, Directions.UP);
                }
              } else {
                this.board[row][column] = new Cell(false, Colors.WHITE, Directions.NOT_DEFINED);
                if (this.board[row + 1][column].getColor() === Colors.WHITE) {
                  this.board[row + 1][column] = new Cell(true, Colors.WHITE, Directions.DOWN);
                } else {
                  this.board[row + 1][column] = new Cell(true, Colors.BLACK, Directions.DOWN);
                }
              }
              break;
          }
          row = 20; column = 20;
        }
      }
    }
  }
}
