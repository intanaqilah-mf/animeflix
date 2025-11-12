import { Link } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  onGenreClick: (genreId: number) => void;
  onSearch: (query: string) => void;
  searchValue: string;
  selectedGenres?: number[];
  onGenreFilterChange?: (genres: number[]) => void;
}

// Top 5 most popular anime genres
const TOP_GENRES = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Adventure' },
  { id: 4, name: 'Comedy' },
  { id: 10, name: 'Fantasy' },
  { id: 22, name: 'Romance' },
];

// All anime genres
const ALL_GENRES = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Adventure' },
  { id: 4, name: 'Comedy' },
  { id: 8, name: 'Drama' },
  { id: 10, name: 'Fantasy' },
  { id: 14, name: 'Horror' },
  { id: 7, name: 'Mystery' },
  { id: 22, name: 'Romance' },
  { id: 24, name: 'Sci-Fi' },
  { id: 36, name: 'Slice of Life' },
  { id: 30, name: 'Sports' },
  { id: 37, name: 'Supernatural' },
  { id: 41, name: 'Thriller' },
  { id: 9, name: 'Ecchi' },
];

export default function Header({ onGenreClick, onSearch, searchValue, selectedGenres = [], onGenreFilterChange }: Readonly<HeaderProps>) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleClearSearch = () => {
    onSearch('');
  };

  const toggleGenre = (genreId: number) => {
    if (selectedGenres.includes(genreId)) {
      onGenreFilterChange?.(selectedGenres.filter((id) => id !== genreId));
    } else {
      onGenreFilterChange?.([...selectedGenres, genreId]);
    }
  };

  const clearAllGenres = () => {
    onGenreFilterChange?.([]);
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Left: Logo */}
        <Link to="/" className="header-logo">
          <span className="logo-icon">🎬</span>
          <span className="logo-text">Animeflix</span>
        </Link>

        {/* Middle: Top 5 Genres */}
        <nav className="header-nav">
          {TOP_GENRES.map((genre) => {
            const isSelected = selectedGenres.includes(genre.id);
            return (
              <button
                key={genre.id}
                className={`nav-genre-btn ${isSelected ? 'active' : ''}`}
                onClick={() => onGenreClick(genre.id)}
              >
                {genre.name}
              </button>
            );
          })}
        </nav>

        {/* Right: Filter Button & Search Bar */}
        <div className="header-actions">
          {/* Filter Button with Dropdown */}
          <div className="header-filter-container">
            <button
              className="header-filter-btn"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              aria-expanded={isFilterOpen}
            >
              <svg className="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V6.58579C21 6.851 20.8946 7.10536 20.7071 7.29289L14.2929 13.7071C14.1054 13.8946 14 14.149 14 14.4142V19L10 21V14.4142C10 14.149 9.89464 13.8946 9.70711 13.7071L3.29289 7.29289C3.10536 7.10536 3 6.851 3 6.58579V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {selectedGenres.length > 0 && (
                <span className="filter-badge">{selectedGenres.length}</span>
              )}
            </button>

            {isFilterOpen && (
              <div className="header-filter-dropdown">
                <div className="header-filter-header">
                  <span className="header-filter-title">Filter by Genre</span>
                  {selectedGenres.length > 0 && (
                    <button className="header-filter-clear" onClick={clearAllGenres}>
                      Clear
                    </button>
                  )}
                </div>
                <div className="header-filter-list">
                  {ALL_GENRES.map((genre) => {
                    const isSelected = selectedGenres.includes(genre.id);
                    return (
                      <button
                        key={genre.id}
                        className={`header-filter-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleGenre(genre.id)}
                      >
                        <span className="header-filter-checkbox">
                          {isSelected && '✓'}
                        </span>
                        <span className="header-filter-name">{genre.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="header-search">
            <input
              type="text"
              className="header-search-input"
              placeholder="Search anime..."
              value={searchValue}
              onChange={handleSearchChange}
            />
            {searchValue && (
              <button
                className="header-search-clear"
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
