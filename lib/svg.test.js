const { SVG, LogoText } = require("./svg");
const { Circle } = require("./shapes");

test("should render a 300 x 200 svg element", () => {

    const color = "blue";
    const expectedSvg = 
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="180" height="200" fill="blue" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="white"ISA</text></svg>`;
    
    const circle = new Circle(color);
    const logoText = new LogoText("ISA", color);

    const svg = new SVG(circle, logoText);
    expect(svg.render()).toEqual(expectedSvg);
});      