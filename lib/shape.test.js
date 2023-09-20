const { Circle, Square, Triangle } = require('./shape.js');

describe('Circle Test', () => {
    it("should print a circle with a red background", () => {
        const shape  = new Circle();
        shape.setColor('red');
        expect(shape.print()).toEqual('<circle cx="115" cy="115" r="80" fill="red" />');
    });
});

describe('Square Test', () => {
    it("should print a square with a green background using hex color", () => {
        const shape  = new Square();
        shape.setColor('#008000');
        expect(shape.print()).toEqual('<rect x="80" y="80" width="160" fill="#008000" />');
    });
});

describe('Triangle Test', () => {
    it("should print a triangle with a yellow background", () => {
        const shape  = new Triangle();
        shape.setColor('yellow');
        expect(shape.print()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />');
    });
});