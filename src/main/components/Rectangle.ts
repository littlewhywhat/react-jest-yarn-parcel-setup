export class Rectangle {
  constructor(public height: number, public width: number) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea(): number {
    return this.height * this.width;
  }
}