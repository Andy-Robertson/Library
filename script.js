let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(title, author, pages, read) {

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(book);
    console.log(myLibrary);


    document.getElementById('Title');
    document.getElementById('author');
    document.getElementById('pages');
    document.getElementById('read');
    document.getElementById('submit');

}

//const book = new Book("Gone with the wind", "James May", 234, "not read yet");