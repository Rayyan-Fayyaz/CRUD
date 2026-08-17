import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/books";

class BookService{
    getAllBooks(){
        return axios.get(`${API_BASE_URL}/getAllBooks`);
    }

    addBook(Book){                              // capital "Book" (the parameter)
        return axios.post(`${API_BASE_URL}/Book`, book)   // lowercase "book" (used here)
    }

    updateBooks(id, book){
        return axios.post(`${API_BASE_URL}/updateBook/${id}`,book);
    }

    deleteBook(id){
        return axios.delete(`${API_BASE_URL}/deleteBook/${id}`);
    }
}

export default new BookService();