//import Circle ...
import Square from "./Square.js";
import { customHandler, createShape } from "./utils.js";
import FormValidator from "./FormValidator.js";
import Circle from "./Circle.js";

const shapesSection = document.querySelector('.shapes');
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const shapeType = event.target.elements.type.value;
    const size  = event.target.elements.size.value;
    const shape = createShape(shapeType, size);
    shapesSection.append(shape.render());
    event.target.reset();
})

/*
const s = new Square(10, {
    customActionText: 'Borrar',
    customActionHandler: customHandler
})

shapesSection.append(s.render())
*/
/*
const formValidatorShapes = new FormValidator(form, {})
formValidatorShapes.enableValidation();
*/