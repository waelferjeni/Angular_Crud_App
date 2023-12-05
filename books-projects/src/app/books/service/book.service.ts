import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class BookService {
  private books : Book[] = [];


  
  baseUrl = 'http://localhost:3000';

  constructor(private http : HttpClient) { }



  getBooks = () : Observable<Book[]> =>{

    return this.http.get<Book[]>(`${this.baseUrl}/books`, );
  }



  addBook = (book : Object) : Observable<Book>=>{
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
        )
    };
 
    return(this.http.post<Book>(
      `${this.baseUrl}/books`,
      book,
      options));
  }







  getBookById = (id : number) : Observable<Book>=> {
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`)
  }




  editBook = (book : Book) : Observable<Book>=>{
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json'})
    };
    const body = {
      title : book.title,
      author : book.author,
      price : book.price
    }

    return(this.http.put<Book>(`${this.baseUrl}/books/${book.id}`, body, options));

  }



  deleteBook = (id : number) : Observable<Object> =>{
    return this.http.delete(`${this.baseUrl}/books/${id}`)
  }
}
