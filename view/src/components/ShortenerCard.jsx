import React, { useState } from 'react';

const ShortenerCard = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleInputChange = (e) => {
        setOriginalUrl(e.target.value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleShortenClick = () => {
        // Perform URL shortening logic here, update shortenedUrl state
    };

    return (
        <div className="max-w-lg mt-8 mx-auto bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">URL Shortener</h2>
            <div className="mb-4">
                <label htmlFor="originalUrl" className="block text-gray-700">
                    Enter URL to shorten:
                </label>
                <input
                    type="text"
                    id="originalUrl"
                    className="mt-2 w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-300"
                    value={originalUrl}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">
                    <input
                        type="checkbox"
                        className="mr-2 leading-tight"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="text-sm">Use random short URL</span>
                </label>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
                onClick={handleShortenClick}
            >
                Shorten URL
            </button>
            <div className="mt-4">
                {shortenedUrl && (
                    <div>
                        <p className="text-gray-700">Shortened URL:</p>
                        <a href={shortenedUrl} className="text-blue-500">
                            {shortenedUrl}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShortenerCard;
