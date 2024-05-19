const myLibrary = [];

function Book(title, author, pages,read=false){
    let errorString = "Book: input invalid, you have entered invalid: "
    let errors = [];

    if(typeof title !== 'string') errors.push('title'); 
    if(typeof author !== 'string') errors.push('author');
    if(typeof pages !== 'number') errors.push('pages');
    if(typeof read !== 'boolean') errors.push('read');

    if(errors.length){
        console.log(errorString + errors.join(", "));
        return;
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    let authorText = document.createElement('span');

    let pages = document.createElement('p');
    let pagesText = document.createElement('span');

    let bookButtons = document.createElement('div');
    let readBook = document.createElement('button');
    let deleteBook = document.createElement('button');

    bookButtons.appendChild(deleteBook);
    bookButtons.appendChild(readBook);

    title.textContent = book.title;

    author.textContent = 'Author: ';
    authorText.textContent = book.author;
    author.appendChild(authorText);

    pages.textContent = 'Pages: ';
    pagesText.textContent = book.pages;
    pages.appendChild(pagesText);

    bookButtons.classList.add('book-buttons');
    readBook.classList.add('read-btn');
    deleteBook.classList.add('delete-btn');

    if(book.read){
        readBook.textContent = 'Read';
        readBook.style.backgroundColor = 'darkolivegreen';
    }
    else{
        readBook.textContent = 'Unread';
        readBook.style.backgroundColor = 'maroon';
    }

    deleteBook.textContent = 'delete';
    
    bookElement.appendChild(title);
    bookElement.appendChild(author);
    bookElement.appendChild(pages);
    bookElement.appendChild(bookButtons);

    deleteBook.addEventListener('click', () => {
        bookElement.remove();
        myLibrary.splice(myLibrary.indexOf(book));
    });

    readBook.addEventListener('click', () => {
         readBook.classList.toggle('read');
         if(readBook.classList.contains('read')){
            readBook.style.backgroundColor = 'darkolivegreen';
            readBook.textContent = 'Read';
            book.read = true;
         }
         else{
            readBook.style.backgroundColor = 'maroon'
            readBook.textContent = 'Unread'
            book.read = false;
         }
    });

    return bookElement;
}

const displayBooks = ()=> {
    let bookContainer = document.getElementById("book-container");
    for(let i = 0; i < myLibrary.length; i++){
        if(!myLibrary[i].displayed){
            bookContainer.appendChild(createBookElement(myLibrary[i]));
        }
    }
}

const updateLibrary = (book)=> {
    let bookContainer = document.getElementById("book-container");
    bookContainer.appendChild(createBookElement(book));
    addBookToLibrary(book);
}

// form event listners 
let dialog = document.querySelector("dialog");
let form = document.querySelector("form");
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let book = new Book(title.value,author.value,parseInt(pages.value),read.checked);
    updateLibrary(book);
    form.reset();
    dialog.close();
});

let cancel = document.querySelector("form .delete-btn");
cancel.addEventListener('click', () => {
    form.reset();
    dialog.close();
})

let addBookBtn = document.getElementById("add-book");
addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

displayBooks();
