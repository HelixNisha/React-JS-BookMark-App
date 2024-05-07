import React from 'react';

function BookmarkList({ bookmarks }) {
  return (
    <div>
      <h2>Bookmark List</h2>
      <ul>
        {bookmarks.map(bookmark => (
          <li key={bookmark._id}>
            <a href={bookmark.url}>{bookmark.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkList;
