import Shape from "./Shape.js";

export default class Circle extends Shape {
    constructor(radio, actionInfo){
        super(radio, actionInfo);
    }

    area(){
        return Math.PI * this._size ** 2 ;
    }

    perimeter() {
        return this._size * 2 * Math.PI;
    }

    _getTemplate(){
        super._getTemplate();
        this._node.querySelector('.shape__content').classList.add('shape__content_type_circle');
    }
}