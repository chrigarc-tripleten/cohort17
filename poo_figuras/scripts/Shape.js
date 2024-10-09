// cuadrado area: lado * lado
// circle area: pi * radio^2 

export default class Shape {

    constructor(size, {
        customActionText, customActionHandler
    }){
        this._size = size;
        this._customActionText = customActionText;
        this._customActionHandler = customActionHandler;
    }

    area(){}
    perimeter(){}

    _getTemplate(){
        this._node = document.querySelector('.template').content.querySelector('.shape').cloneNode(true);
        this._node.querySelector('.shape__text').textContent = this._size;
        this._node.querySelector('.shape__action_type_custom').textContent = this._customActionText;
    }

    _setEventListeners(){    
        this._node.querySelector('.shape__action_type_area').addEventListener('click', () => {
            console.log(this);
            alert(`El area es: ${this.area()}`)
        })

        this._node.querySelector('.shape__action_type_perimeter').addEventListener('click', () => {
            console.log(this);
            alert(`El area es: ${this.perimeter()}`)
        })

        this._node.querySelector('.shape__action_type_custom').addEventListener('click', () => {
            this._customActionHandler(this._node);            
        })        
    }

    render(){
        this._getTemplate();
        this._setEventListeners();
        return this._node;
    }
}