import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Ensure App.css is imported

// Ensure Font Awesome is installed: npm install @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.css';

const News = ({ onContactClick }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('india');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY; // Access the API key from environment variables
  const publicUrl = import.meta.env.PUBLIC_URL;

  useEffect(() => {
    const fetchNews = async () => {
      if (!query) {
        setLoading(false);
        return;
      }
      if (!apiKey) {
        setError(new Error('API key is missing'));
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
        setArticles(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query, apiKey]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setArticles([]);
    setQuery(e.target.elements.query.value);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const getFullContent = (content) => {
    if (!content) return 'Content not available';
    const truncatedIndex = content.indexOf('[+');
    return truncatedIndex !== -1 ? content.substring(0, truncatedIndex) : content;
  };

  const handleShare = (article) => {
    const shareData = {
      title: article.title,
      text: article.description,
      url: article.url,
    };
    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      alert('Share feature is not supported in your browser.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="news-container">
      <nav className="news-nav">
        <img src={`${publicUrl}/images/newslogo.png`} alt="Logo" className="logo" onError={(e) => e.target.src = `${publicUrl}/images/placeholder.png`} />
        <a href="/blog" className="nav-link">Blog</a>
        <a href="https://youtube.com/@iexpressnews?si=tp2qULxZ-60wRIDy" target="_blank" rel="noopener noreferrer">
          <button className="youtube-button">
            <i className="fab fa-youtube youtube-icon"></i>
            For Latest Updates Here
          </button>
        </a>
        <h1 className="nav-title">I-Express</h1>
      </nav>
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          name="query"
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search news..." 
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {selectedArticle ? (
        <div>
          <button onClick={handleBackToList} className="back-button">Back to List</button>
          <h2 className="article-title">{selectedArticle.title}</h2>
          <img 
            src={selectedArticle.urlToImage || `${publicUrl}/images/placeholder.png`} 
            alt={selectedArticle.title} 
            className="article-image"
            onError={(e) => e.target.src = `${publicUrl}/images/placeholder.png`}
          />
          <p className="article-content">{getFullContent(selectedArticle.content) || selectedArticle.description}</p>
          <a href={selectedArticle.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Read more</a>
        </div>
      ) : (
        <div className="articles">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="article" 
              onClick={() => handleArticleClick(article)}
            >
              <h2 className="article-title">{article.title}</h2>
              <img 
                src={article.urlToImage || `${publicUrl}/images/placeholder.png`} 
                alt={article.title} 
                className="article-image"
                onError={(e) => e.target.src = `${publicUrl}/images/placeholder.png`}
              />
              <p className="article-description">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Read more</a>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare(article);
                }} 
                className="share-button"
              >
                Share
              </button>
            </div>
          ))}
        </div>
      )}
      <footer className="news-footer">
        <a href="/terms" className="footer-link">Terms and Conditions</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <a href="/Contact" className="footer-link">Contact Us</a>
        <p className="footer-text">Since Jan 1, 2025</p>
      </footer>
    </div>
  );
};

export default News;
