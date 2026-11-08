//Задача №1
function parseCount(value) {
  const parsedValue = Number.parseFloat(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }

  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

//Задача №2
class Triangle {
  #firstSide;
  #secondSide;
  #thirdSide;

  constructor(firstSide, secondSide, thirdSide) {
    if (firstSide + secondSide < thirdSide
      || firstSide + thirdSide < secondSide
      || secondSide + thirdSide < firstSide) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.#firstSide = firstSide;
    this.#secondSide = secondSide;
    this.#thirdSide = thirdSide;
  }

  get perimeter() {
    return this.#firstSide + this.#secondSide + this.#thirdSide;
  }

  get area() {
    const semiPerimeter = this.perimeter / 2;
    const areaValue = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.#firstSide)
      * (semiPerimeter - this.#secondSide)
      * (semiPerimeter - this.#thirdSide)
    );

    return Number(areaValue.toFixed(3));
  }
}

function getTriangle(firstSide, secondSide, thirdSide) {
  try {
    return new Triangle(firstSide, secondSide, thirdSide);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}﻿
