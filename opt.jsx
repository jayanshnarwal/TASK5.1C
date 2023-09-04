import React, { useState } from 'react';

function Options({ onPostTypeChange }) {
  const [postType, setPostType] = useState('question');

  const handlePostTypeChange = (e) => {
    const newPostType = e.target.value;
    setPostType(newPostType);
    onPostTypeChange(newPostType);
  };

  return (
    <div className="options">
      <div className="head">
        <h2>New Post</h2>
      </div>
      <div className="typer">
        <label htmlFor="type-post">Select post type:</label>
        <div>
          <input
            type="radio"
            id="question"
            name="type-post"
            value="question"
            checked={postType === 'question'}
            onChange={handlePostTypeChange}
          />
          <label htmlFor="question">Question</label>
        </div>
        <div>
          <input
            type="radio"
            id="article"
            name="type-post"
            value="article"
            checked={postType === 'article'}
            onChange={handlePostTypeChange}
          />
          <label htmlFor="article">Article</label>
        </div>
      </div>
    </div>
  );
}

export default Options;
