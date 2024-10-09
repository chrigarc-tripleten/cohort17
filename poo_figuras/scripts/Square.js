import Shape from "./Shape.js";

export default class Square extends Shape {
    constructor(side, actionInfo){
        super(side, actionInfo);
    }

    area(){
        return this._size * this._size;
    }

    perimeter() {
        return this._size * 4;
    }

    _getTemplate(){
        super._getTemplate();
        this._node.querySelector('.shape__content').classList.add('shape__content_type_square');
    }
}