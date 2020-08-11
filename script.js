let myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {

        return '${this.title} by ${this.author}, ${this.pages}, ${this.read}';

    }

}

function addBookToLibrary() {

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;

}

const book1 = new Book("Gone with the wind", "James May", 234, "not read yet");