import { Directions } from '../enumerations/directions';
import { Colors } from '../enumerations/colors';

export class Cell {

    private hasAnt: boolean;
    private color: Colors;
    private direction: Directions;

    constructor(private _hasAnt: boolean, private _color: Colors, private _direction: Directions) {
        this.hasAnt = this._hasAnt;
        this.color = this._color;
        this.direction = this._direction;
    }

    public getHasAnt(): boolean {
        return this.hasAnt;
    }

    public getColor(): Colors {
        return this.color;
    }

    public setHasAnt(_hasAnt: boolean): void {
        this.hasAnt = this._hasAnt;
    }

    public setColor(_color: Colors): void {
        this.color = this._color;
    }

    public getDirection(): Directions {
        return this.direction;
    }

    public setDirection(_direction: Directions): void {
        this.direction = this._direction;
    }
}
