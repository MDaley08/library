const myLibrary = [];

function Book(title, author, pages){
    let errorString = "input invalid, you have entered invalid: "
    let errorThrown = false;

    if(typeof title !== 'string'){
        errorString += 'title ';
        errorThrown = true;
    } 
    if(typeof author !== 'string'){
        errorString += 'author '
        errorThrown = true;
    } 
    if(typeof pages !== 'number'){
        errorString += 'pages';
        errorThrown = true;
    } 
    if(errorThrown){
        console.log(errorString);
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

function addBookToLibrary(book){
    if(Object.getPrototypeOf(Book) !== book.prototype){
        console.log("invalid object");
        return;
    }
    myLibrary.push(book);

}

function displayBooks(){

}

let test = new Book("the reacher", 200, "200");
