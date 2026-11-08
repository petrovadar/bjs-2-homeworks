//Задача №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//Задача №2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const requestedBook = this.findBookBy("name", bookName);

    if (requestedBook) {
      this.books.splice(this.books.indexOf(requestedBook), 1);
    }

    return requestedBook;
  }
}

//Задача №3
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks[subjectName]) {
      this.marks[subjectName] = [];
    }

    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    const subjectMarks = this.marks[subjectName];

    if (!subjectMarks || subjectMarks.length === 0) {
      return 0;
    }

    const sum = subjectMarks.reduce((total, mark) => total + mark, 0);

    return sum / subjectMarks.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);

    if (subjects.length === 0) {
      return 0;
    }

    const totalSum = subjects.reduce(
      (sum, subject) => sum + this.getAverageBySubject(subject),
      0
    );

    return totalSum / subjects.length;
  }
}
