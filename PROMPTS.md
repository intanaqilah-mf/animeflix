# AI Prompts for Anime Search App Development

This document contains useful prompts for AI assistants to help build and enhance this anime search application. Use these as a reference when working with AI tools.

---

### API Service Layer
```
Create a service layer for the Jikan API that includes functions for searching anime, fetching top anime with genre filtering, and getting anime details by ID. Implement proper error handling and request cancellation for search operations.
```
---

## UI Components

### Netflix-Style Hero Banner
```
Build a full-width hero banner component that displays the featured anime with an autoplay trailer background, gradient overlay, anime metadata (score, year, type), synopsis, and action buttons. Include a carousel of top 10 anime at the bottom of the banner.
```

### Responsive Header with Navigation
```
Create a sticky header with a logo, genre navigation buttons (top 5 genres), a filter dropdown for all genres with multi-select, and a search bar with clear functionality. Use glassmorphism effects and smooth transitions.
```

### Anime Card with Hover Effects
```
Design an anime card component that displays the poster image, title, score badge, type, and episode count. Add hover effects that lift the card, scale the image, and play a trailer preview if available.
```

### Filter Dropdown Component
```
Implement a multi-select genre filter dropdown with checkboxes, a "Clear all" button, selected item count badge, and smooth animations. Style with dark glassmorphism theme matching Netflix aesthetics.
```

### Pagination Component
```
Build a pagination component that shows page numbers with ellipsis for large ranges, previous/next buttons, and highlights the active page. Include proper disabled states and click handlers.
```

---

## Styling & Theme

### Netflix Dark Theme System
```
Create a CSS custom properties system for a Netflix-inspired dark theme. Include primary Netflix red (#e50914), dark backgrounds (#141118), backdrop-filter and smooth cubic-bezier transitions.
```

### Responsive Design
```
Implement responsive breakpoints for the anime grid, header navigation, and hero banner. Ensure the layout adapts gracefully from mobile (320px) to desktop (1600px+) with appropriate font scaling and component reordering.
```

### Skeleton Loading States
```
Design skeleton loading cards with shimmer animations for the anime grid. Include pulsing effects and gradient animations to indicate content is loading.
```

---

## Features & Interactions

### Auto-playing Trailer System
```
Implement a trailer system where the hero banner plays the featured anime trailer on autoplay (muted, looped). When hovering over top 10 carousel cards, stop the main trailer and play the card's trailer instead. Resume main trailer on mouse leave.
```

### Genre Filtering Logic
```
Create genre filtering that works with both the header navigation buttons (single-select, toggle on/off) and the filter dropdown (multi-select). Ensure both UI elements stay in sync and reset pagination when filters change.
```

### Search with Debouncing
```
Implement search input with debounced API calls (300ms delay). Cancel previous requests when a new search is initiated. Show loading states during search and handle empty results gracefully.
```

### Smooth Scroll to Grid
```
When a genre filter is clicked from the header, smoothly scroll to the anime grid after the data loads. Use multiple retry attempts at different intervals (300ms, 600ms, 1000ms) to ensure the scroll happens after DOM updates.
```

---

## Performance & Optimization

### Request Cancellation
```
Implement AbortController for API requests to cancel pending searches when new ones are initiated or when components unmount. This prevents race conditions and unnecessary network usage.
```

### Image Optimization
```
Use responsive image sources from the Jikan API (small, medium, large). Implement lazy loading for images in the anime grid and proper aspect ratio containers to prevent layout shift.
```

### Memoization Strategy
```
Add React.memo to expensive components like anime cards. Use useCallback for event handlers that are passed as props and useMemo for computed values like filtered anime lists.
```

---

## Advanced Features

### Trailer URL Builder
```
Create a utility function that converts Jikan API trailer URLs into embeddable YouTube URLs with custom parameters: autoplay, mute, loop, controls hidden, and playlist for seamless looping.
```

### Dynamic Page Titles
```
Implement dynamic document titles that reflect the current page state: search query, selected genre, or anime details page. Update the title when navigation or filters change.
```

### Error Boundary Implementation
```
Add error boundaries around major components (search page, detail page) to catch React errors gracefully. Display user-friendly error messages with retry actions.
```

### URL State Synchronization
```
Sync search query, genre filters, and current page to URL query parameters. This enables bookmarking, sharing, and browser back/forward navigation while preserving search state.
```

---

## Testing & Quality

### Component Testing Strategy
```
Write unit tests for the Redux slice actions and reducers. Test pagination logic, genre filter state changes, and search query updates to ensure page resets happen correctly.
```

### API Service Tests
```
Create tests for the API service layer that mock fetch responses. Test successful responses, error handling, request cancellation, and genre filtering parameter construction.
```

### Accessibility Improvements
```
Add ARIA labels to interactive elements (filter buttons, search input, pagination). Ensure keyboard navigation works for the filter dropdown and that focus states are visible.
```

---

## Code Quality

### TypeScript Strict Mode
```
Enable TypeScript strict mode and fix all type issues. Ensure proper typing for Redux hooks, API responses, component props, and event handlers. Avoid 'any' types.
```

### ESLint Configuration
```
Set up ESLint with React, TypeScript, and hooks plugins. Enforce rules for unused variables, missing dependencies in useEffect/useCallback, and proper prop types validation.
```

### Performance Profiling
```
Use React DevTools Profiler to identify slow renders. Look for unnecessary re-renders in the anime grid when filters change and optimize with memoization where needed.
```

---

## UI/UX Enhancements

### Loading State Improvements
```
Instead of showing a blank screen, display skeleton cards immediately when loading starts. Maintain the previous results while fetching new ones, with a subtle loading indicator overlay.
```

### Micro-interactions
```
Add subtle animations: scale on hover for cards, smooth color transitions for buttons, fade-in for dropdown menus, and spring physics for modal appearances. Keep animations under 300ms.
```

### Empty States
```
Design meaningful empty states for "no results found", "no anime in this genre", and "search to get started". Include helpful text and relevant iconography.
```

### Toast Notifications
```
Implement a toast notification system for API errors, successful actions, and informational messages. Use auto-dismiss with configurable duration and different severity levels.
```

---

## Deployment & DevOps

### Build Optimization
```
Configure Vite for production builds with code splitting, tree shaking, and asset optimization. Ensure CSS is minified and unused styles are removed. Set up source maps for debugging.
```

### Environment Variables
```
Set up environment variables for API base URL and other configuration. Use .env files for local development and configure deployment platform variables for production.
```

### Caching Strategy
```
Implement caching headers for static assets. Use React Query for API response caching with stale-while-revalidate strategy and cache invalidation.
```

---

## Future Enhancements

### Favorites System
```
Add the ability to favorite anime and store them in localStorage. Create a favorites page that displays all saved anime with the ability to remove them. Sync favorites state across tabs.
```

### Advanced Search Filters
```
Extend filtering to include anime type (TV, Movie, OVA), status (airing, completed), rating, score range, and year. Build a collapsible advanced filter panel with clear all functionality.
```

### Recommendation Engine
```
Use the Jikan API's recommendation endpoint to suggest similar anime on the detail page. Display recommendations in a carousel with the same card style as the main grid.
```

### Watch List & Progress Tracking
```
Create a watch list feature where users can mark anime as "Plan to Watch", "Watching", "Completed", or "Dropped". Store progress (current episode) in localStorage with sync capabilities.
```

---

## Common Issues & Solutions

### Issue: Pagination not resetting when filters change
```
Ensure the Redux slice includes `state.currentPage = 1` in both setSearchQuery and setSelectedGenres reducers. This guarantees the page resets whenever search parameters change.
```

### Issue: Trailers not autoplaying
```
YouTube requires specific parameters for autoplay to work: `autoplay=1`, `mute=1`, and the video must be muted. Also include `playlist=VIDEO_ID` and `loop=1` for continuous playback.
```

### Issue: Filter dropdown stays open when clicking outside
```
Add a click outside handler using useEffect with document.addEventListener. Clean up the listener on unmount. Alternatively, use a library like react-outside-click-handler.
```

### Issue: Race conditions in API calls
```
Implement AbortController to cancel pending requests. Create a new controller for each request and abort the previous one before starting a new fetch operation.
```

### Issue: Genre filter and navigation out of sync
```
Use the same Redux state (selectedGenres) for both components. Update both components to read from and dispatch to the same state slice, ensuring single source of truth.
```