import React, { useState } from 'react';

function UrlLanguageForm() {
  const [url, setUrl] = useState('');
  const [language, setLanguage] = useState('English'); // Default language

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log(url, language);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="videoUrl">Video URL:</label>
        <input
          type="url"
          id="videoUrl"
          name="videoUrl"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="languageSelect">Select Language:</label>
        <select
          id="languageSelect"
          name="languageSelect"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          {/* Add more language options here */}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UrlLanguageForm;

