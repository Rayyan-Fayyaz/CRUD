import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
  const [currentBook, setCurrentBook] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const refreshList = () => setRefresh(!refresh);

  return (
    <div className="App">
      <h1>Catalogue Management System</h1>
      <BookForm
        currentBook={currentBook}
        refreshList={refreshList}
        clearSelection={() => setCurrentBook(null)}
      />
      <BookList key={refresh} onEdit={setCurrentBook} />
    </div>
  );
};
export default App;