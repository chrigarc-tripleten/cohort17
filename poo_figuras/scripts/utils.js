import Circle from "./Circle.js";
import Square from "./Square.js";

export function customHandler(node){
    node.remove();
}

export function createShape(type, size){
    let shape = null;
    /*
    const shape = type === 'square' ?  new Square(size, {
        customActionText: 'Borrar',
        customActionHandler: customHandler
    })    : new Circle(size, {
        customActionText: 'Borrar',
        customActionHandler: customHandler
    })
        */    

   // const a = cond ? caseTrue : caseFalse //if terciario

    switch (type){
        case 'square':
            shape =  new Square(size, {
                customActionText: 'Borrar',
                customActionHandler: customHandler
            })    
            break;
        case 'circle':
            shape =  new Circle(size, {
                customActionText: 'Borrar',
                customActionHandler: customHandler
            })    
            break;
        case 'triangle':
            /*
            shape =  new Tringle(size, {
                customActionText: 'Borrar',
                customActionHandler: customHandler
            })
                */    
            break;            
    }    
    return shape;

}

export const formConfig = {};