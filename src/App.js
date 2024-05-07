import React, { useState, useEffect } from 'react';
import BookmarkList from './components/BookmarkList';
import BookmarkForm from './components/BookmarkForm';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    const response = await fetch('/api/bookmarks');
    const data = await response.json();
    setBookmarks(data);
  };

  return (
    <div>
      <h1>Bookmarks</h1>
      <BookmarkForm fetchBookmarks={fetchBookmarks} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
}

export default App;
