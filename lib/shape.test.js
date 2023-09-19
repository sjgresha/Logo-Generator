const { Circle, Square, Triangle } = require('./shape.js');

describe('Circle Test', () => {
    it('should print a circle with a red background', () => {
        const shape  = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="red" />');
    });
});