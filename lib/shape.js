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
        return `<circle cx="115" cy="115" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    print() {
        return `<rect x="70" y="70" width="160" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    print() {
        return `<polygon points="150,20 244,180 56,180" fill="${this.color}" />`;
    }
}
module.exports = {Circle, Square, Triangle};