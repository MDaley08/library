const myLibrary = [];

function Book(title, author, pages){

    let errorString = "Book: input invalid, you have entered invalid: "
    let errors = [];

    if(typeof title !== 'string') errors.push('title'); 
    if(typeof author !== 'string') errors.push('author');
    if(typeof pages !== 'number') errors.push('pages');

    if(errors.length){
        console.log(errorString + errors.join(", "));
        return;
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = () => {
        return [this.title, this.author, this.pages,this.read];
    }
}

const addBookToLibrary = (book) => {

    if(typeof book !== 'object' || book === null){
        console.log(`addBookToLibrary: \"${book}\" is not an object`);
        return;
    }

    if(!book.title || !book.author || !book.pages){
        console.log(`addBookToLibrary: \"${JSON.stringify(book)}\" is not a valid Book object`);
        return;
    }

    myLibrary.push(book);
}

const createBookElement = (book) => {
    let bookElement = document.createElement('div');
    bookElement.classList.add('book');

    let title = document.createElement('h3');
    let author = document.createElement('p');
    let pages = document.createElement('p');

    title.textContent = book.title;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;

    bookElement.appendChild(title);
    bookElement.appendChild(author);
    bookElement.appendChild(pages);

    return bookElement;
}
let testbook = new Book('Catching a mocking bird','test',123)
let bookContainer = document.getElementById('book-container');
bookContainer.appendChild(createBookElement(testbook));
bookContainer.appendChild(createBookElement(testbook));
bookContainer.appendChild(createBookElement(testbook));
bookContainer.appendChild(createBookElement(testbook));

const displayBooks = ()=> {

}
