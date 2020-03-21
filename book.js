class Book {
    static id =1;
    constructor(title, auteur, isbn){
        this.auteur = auteur;
        this.title = title;
        this.isbn = isbn;
        this.id = Book.id++;
    }
}
class BookMananger{
    static notData = document.querySelector('#notData');
    static thead = document.querySelector('thead');
    static innput = document.querySelectorAll('input');
    static btnSumit = document.querySelector('#btn');
    static btnUpdate = document.querySelector('#btn1');
    static tbody = document.querySelector('#livres');
    static inputTitle = document.querySelector('#title');
    static infoTitle = document.querySelector('#infoTitle');
    static inputAuteur = document.querySelector('#auteur');
    static infoAuteur = document.querySelector('#infoAuteur');
    static inputIsbn = document.querySelector('#isbn');
    static form = document.querySelector('#form');
    static infoIsbn = document.querySelector('#infoIsbn');
    static books = [
        new Book('Une si longue lettre','Mariama Ba',12345),
        new Book('Greve des batou','Aminata sow fall',12346), 
    ]
  
    static showBook(){  
        let data = '';
        if ( BookMananger.books.length > 0) {
            BookMananger.notData.hidden=true;
            BookMananger.thead.hidden = false;
            for (let i = 0; i < BookMananger.books.length; i++) {
                const book = BookMananger.books[i];
                data += '<tr>';
                data += '<td>' + book.id + '</td>';
                data += '<td>' + book.title + '</td>';
                data += '<td>' + book.auteur + '</td>';
                data += '<td>' + book.isbn + '</td>';
                data += '<td><button class="btn btn-success" onclick="editBook(' + book.id + ')">Edit</button></td>';
                data += '<td><button class="btn btn-danger" onclick="deleteBook(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }   
        }else{
            BookMananger.notData.hidden=false;
            BookMananger.thead.hidden = true;
        }
        return BookMananger.tbody.innerHTML = data; 
    }
    static addBook(){
        const book = new Book(title.value, auteur.value, isbn.value);
        if (book) {
            BookMananger.books.push(book);
            console.log(BookMananger.books);
            BookMananger.showBook();
        } 
    }
    static editBook(item){
        BookMananger.books.forEach(book => {
            if (book.id == item) {
                BookMananger.inputTitle.value = book.title;
                BookMananger.inputAuteur.value = book.auteur;
                BookMananger.inputIsbn.value = book.isbn;
                BookMananger.btnUpdate.disabled = false;
                BookMananger.btnUpdate.addEventListener('click', function(){
                    book.title = BookMananger.inputTitle.value;
                    book.auteur = BookMananger.inputAuteur.value;
                    book.isbn = BookMananger.inputIsbn.value; 
                    BookMananger.showBook();
                   
                    BookMananger.btnUpdate.disabled = true;
                });
               
            }
        });
    }
    static deleteBook(item){
     BookMananger.books.splice(item, 1);
     BookMananger.showBook();
    }
    static isInvalid(input,btnSumit){
        input.classList.add('is-invalid');  
        btnSumit.disabled = true;
    }
    static isValid(input,btnSumit){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        btnSumit.disabled = false;
    }
    static controlInput(inputTitle, btnSumit) {
        if (inputTitle.value === "") {
            
            BookMananger.isInvalid(inputTitle, btnSumit);
        }
        else{
            BookMananger.isValid(inputTitle, btnSumit);
        }
    }
}
//appell des methode
BookMananger.showBook();
function Add(){
    BookMananger.addBook();
}
function editBook(e){
    BookMananger.editBook(e);
}
function deleteBook(e,event){
    BookMananger.deleteBook(e);
}
function controlInput(){
    BookMananger.innput.forEach(input => {
        BookMananger.controlInput(input, BookMananger.btnSumit);
    });
}

