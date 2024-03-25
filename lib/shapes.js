class Shape {
    constructor(colour = '#000000') {
        this.colour = colour;
    }
    setColour(colour) {
        this.colour = colour;
    }
}

class Square extends Shape {
    constructor(colour) {
        super(colour);
    }
    render() {
        const svg = `<rect x="90" y="40" width="120" height="120" fill="${this.colour}"/>`;
        return svg;
    }
}

class Circle extends Shape {
    constructor(colour) {
        super(colour);
    }
    render() {
        const svg = `<circle cx="150" cy="100" r="80" fill="${this.colour}"/>`;
        return svg;
    }
}

class Triangle extends Shape {
    constructor(colour) {
        super(colour);
    }
    render() {
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/>;`
        return svg;
    }
}

module.exports = {Circle, Triangle, Square };