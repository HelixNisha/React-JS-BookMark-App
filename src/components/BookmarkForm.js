import React, { useState } from 'react';

function BookmarkForm({ fetchBookmarks }) {
  const [formData, setFormData] = useState({ title: '', url: '', description: '', category: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/bookmarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    fetchBookmarks();
    setFormData({ title: '', url: '', description: '', category: '' });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add Bookmark</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input type="text" name="url" placeholder="URL" value={formData.url} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default BookmarkForm;
