import { Directions } from '../enumerations/directions';

export class Cell {

    private hasAnt: boolean;
    private isBlack: boolean;
    private direction: Directions;

    constructor(private _hasAnt: boolean, private _isBlack: boolean, private _direction: Directions) {
        this.hasAnt = this._hasAnt;
        this.isBlack = this._isBlack;
        this.direction = this._direction;
    }

    public getHasAnt(): boolean {
        return this.hasAnt;
    }

    public getIsBlack(): boolean {
        return this.isBlack;
    }

    public setHasAnt(_hasAnt: boolean): void {
        this.hasAnt = this._hasAnt;
    }

    public setIsBlack(_isBlack: boolean): void {
        this.isBlack = this._isBlack;
    }

    public getDirection(): Directions {
        return this.direction;
    }
}
