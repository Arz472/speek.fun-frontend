import React, { useState } from 'react';
import './Mainweb.css';

function UrlLanguageForm() {
    const [url, setUrl] = useState('');
    const [language, setLanguage] = useState('English'); 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(url, language);
    };

    return (
        <div className="center-container">
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                <h1 className="title-speek-fun">Speek.fun</h1>
                    <label htmlFor="videoUrl" className="form-label">Video URL:</label>
                    <input
                        type="url"
                        id="videoUrl"
                        name="videoUrl"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="languageSelect" className="form-label">Select Language:</label>
                    <select
                        id="languageSelect"
                        name="languageSelect"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="form-input"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Farsi">Farsi</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        {/* Add more language options here */}
                    </select>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default UrlLanguageForm;

