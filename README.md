# Animeflix - Anime Search Application

A Netflix-inspired anime search application built with React, TypeScript, and Redux. Browse, search, and discover anime with an immersive viewing experience powered by the Jikan API.

## Live Demo

🔗 [View Live Application](#)](https://intanaqilah-mf.github.io/animeflix/)

---

## About This Project

Animeflix is a modern web application that lets you explore the world of anime through an intuitive, Netflix-style interface. Search for your favorite anime, filter by genre, browse top-rated series, and watch trailers—all in one seamless experience.

**Key highlights:**
- Instant search with real-time results
- Multi-genre filtering
- Auto-playing trailer backgrounds
- Server-side pagination for browsing thousands of anime
- Detailed anime information pages with stats and metadata
- Fully responsive design for all devices

---

## Features

### Core Functionality

✅ **Anime Search**: Instant search with debouncing (250ms) to efficiently query the Jikan API
✅ **Server-side Pagination**: Navigate through large result sets with page controls
✅ **Genre Filtering**: Filter anime by multiple genres simultaneously
✅ **Anime Details**: Comprehensive detail pages with synopsis, stats, trailer, and metadata
✅ **Redux State Management**: Centralized state for search, filters, pagination, and loading states
✅ **Request Cancellation**: Automatic cancellation of in-flight requests when new searches are initiated
✅ **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop

---

## Bonus Implementation

This project includes several enhancements beyond the core requirements:

### User Experience Enhancements

🎬 **Netflix-Style Hero Banner**: Full-width hero section featuring top anime with autoplay trailer background

🎥 **Auto-playing Trailers**:
  - Main hero banner plays featured anime trailer automatically (muted, looped)
  - Top 10 carousel cards play trailers on hover
  - Smart pause/resume system to prevent overlapping audio

📊 **Top 10 Anime Carousel**: Horizontal scrolling carousel showcasing popular anime with rank badges

🎭 **Advanced Genre Filtering System**:
  - Multi-select filter dropdown with checkboxes for all 14 anime genres
  - Quick access genre buttons in header for top 5 popular genres (Action, Adventure, Comedy, Fantasy, Romance)
  - Real-time badge counter showing number of active filters
  - One-click "Clear all" to reset all genre selections
  - Synchronized state between quick buttons and filter dropdown
    
💀 **Skeleton Loading States**: Professional loading skeletons with shimmer animations instead of generic spinners
📭 **Empty State Handling**: Thoughtful empty states with helpful messaging for no results scenarios
✨ **Glassmorphism UI**: Modern frosted glass effects with backdrop blur throughout the interface
🎯 **Smooth Scroll Behavior**: Automatic smooth scrolling to results when filters are applied
🎨 **Interactive Hover Effects**:
  - Cards lift and scale on hover
  - Images zoom smoothly
  - Trailer preview system

🏷️ **Clear Visual Feedback**: Badge counts for active filters, loading indicators, and interactive states

### Technical Excellence

⚠️ **Advanced Error Handling**:
  - Network failure recovery with retry actions
  - Rate limiting detection
  - Invalid API response handling
  - User-friendly error messages

🏎️ **Race Condition Prevention**: AbortController implementation prevents stale data from appearing
⚡ **Optimized Re-rendering**: React.memo and useCallback used strategically to prevent unnecessary renders
🔒 **TypeScript Strict Mode**: Full type safety with minimal use of 'any' types
🏗️ **Clean Architecture**:
  - Separation of concerns (services, components, state, types)
  - Reusable component design
  - Custom hooks for complex logic

🚀 **Performance Optimizations**:
  - Image lazy loading
  - Request debouncing
  - Component memoization
  - Efficient state updates

### UI/UX Features

🎭 **Multi-select Genre Filter**: Dropdown with checkboxes for selecting multiple genres
⭐ **Top Genre Navigation**: Quick access buttons for 5 most popular genres
🔍 **Search with Clear Button**: One-click search reset functionality
🔄 **Sync Filter States**: Header navigation and filter dropdown stay perfectly in sync
🎯 **Active Genre Highlighting**: Visual indication of currently selected genres
🎬 **Trailer URL Builder**: Custom utility for creating optimized YouTube embed URLs
📱 **Responsive Header**: Sticky navigation that adapts to different screen sizes
📲 **Mobile-Optimized**: Genre nav collapses to horizontal scroll on smaller screens
🎨 **Custom Scrollbars**: Styled scrollbars matching the Netflix theme

---

## Tech Stack

- **React 19.2.0** - UI library with hooks
- **TypeScript** - Type-safe development
- **Redux Toolkit 2.10.1** - State management
- **React Router DOM 7.9.5** - Client-side routing
- **Vite 7.2.2** - Build tool and dev server
- **Jikan API** - Anime data source (MyAnimeList unofficial API)

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd anime-search-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will start on **http://localhost:4000**

---

## Available Scripts

- `npm run dev` - Start development server on port 4000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimeCard.tsx
│   ├── ErrorMessage.tsx
│   ├── GenreFilter.tsx
│   ├── Header.tsx
│   ├── Loading.tsx
│   ├── Pagination.tsx
│   ├── SearchBar.tsx
│   └── SkeletonCard.tsx
├── pages/              # Route pages
│   ├── DetailPage.tsx
│   └── SearchPage.tsx
├── services/           # API service layer
│   └── animeApi.ts
├── store/              # Redux store
│   ├── animeSlice.ts
│   ├── hooks.ts
│   └── store.ts
├── types/              # TypeScript type definitions
│   └── anime.ts
├── utils/              # Utility functions
│   └── debounce.ts
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

---

## Key Implementation Details

### Instant Search with Debouncing

Search queries are debounced to 250ms to prevent excessive API calls while maintaining responsiveness. Previous requests are automatically cancelled when new searches are initiated.

### State Management

Redux Toolkit manages:
- Search query and results
- Genre filters (multi-select)
- Pagination state
- Loading and error states
- Selected anime details

Page resets to 1 whenever search query or genre filters change.

### Genre Filtering

Two synchronized filter interfaces:
1. **Header Navigation**: Top 5 popular genres (single-select toggle)
2. **Filter Dropdown**: All available genres (multi-select)

Both interfaces update the same Redux state, ensuring consistency.

### Trailer System

YouTube trailers are embedded with custom parameters:
- `autoplay=1` - Automatic playback
- `mute=1` - Muted by default
- `loop=1` - Continuous playback
- `playlist=VIDEO_ID` - Required for loop functionality
- `controls=0` - Hidden controls for cleaner UI

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## API Usage

This application uses the [Jikan API](https://docs.api.jikan.moe/), an unofficial MyAnimeList API. No authentication is required.

**Rate Limits**:
- 60 requests per minute
- 3 requests per second

The app implements request cancellation and debouncing to stay within these limits.

---

## Design Inspiration

The UI is inspired by Netflix's interface, featuring:
- Dark theme with Netflix red (#e50914) accents
- Glassmorphism effects with backdrop blur
- Smooth transitions and hover effects
- Card-based layout with elevation
- Hero banner with video background

---

## Future Enhancements

Potential features for future iterations:
- Favorites system with localStorage persistence
- Advanced filters (type, status, score range, year)
- Anime recommendations based on selected anime
- Watch list with progress tracking
- User authentication and sync
- Dark/light theme toggle
- Infinite scroll option
- Keyboard navigation shortcuts

---

## Development Notes

- TypeScript strict mode is enabled for maximum type safety
- ESLint is configured with React, TypeScript, and hooks plugins
- Components are organized by feature and reusability
- API service layer abstracts data fetching logic
- Custom hooks encapsulate complex state logic
- CSS uses custom properties for consistent theming

---

## License

This project is for educational and portfolio purposes.

---

## Acknowledgments

- [Jikan API](https://jikan.moe/) for providing free anime data
- [MyAnimeList](https://myanimelist.net/) for the original data source
- Netflix for UI/UX design inspiration

---

## Submission Information

This project was created as part of the YoPrint React coding assessment.

### Requirements Met

**Core Requirements:**
- ✅ React 18+ with hooks only
- ✅ TypeScript throughout
- ✅ React Router DOM for navigation
- ✅ Redux for state management
- ✅ Server-side pagination
- ✅ Instant search with 250ms debouncing
- ✅ Request cancellation for in-flight calls
- ✅ Runs on port 4000
- ✅ npm only (no yarn/pnpm)
- ✅ Works immediately after `npm install && npm run dev`
- ✅ No environment variables required
- ✅ Deployed to live hosting platform

### Bonus Features Implemented

**User Experience:**
- ✅ Netflix-inspired UI with unique wow factor
- ✅ Auto-playing trailer system (hero banner + hover previews)
- ✅ Top 10 anime carousel with rank badges
- ✅ Skeleton loading states with shimmer animations
- ✅ Empty state and no results handling
- ✅ Mobile responsive design
- ✅ Glassmorphism effects and smooth animations
- ✅ Interactive hover effects throughout

**Technical Excellence:**
- ✅ Advanced error handling (network failures, rate limiting, invalid responses)
- ✅ Race condition prevention with AbortController
- ✅ Performance optimizations (memoization, lazy loading, debouncing)
- ✅ TypeScript strict mode with comprehensive typing
- ✅ Clean, maintainable code architecture
- ✅ Separation of concerns and reusable components

---

**Author:** Intan Aqilah
**Contact:** [mohdfaddilintan@gmail.com]
