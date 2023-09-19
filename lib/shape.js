class Shape {
    constructor() {
        this.color ="";
    }
    setColor(color) {
        this.color = color; 
    };
};

class Circle extends Shape {
    print() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`
    }
}

module.exports = {Circle, Square, Triangle};