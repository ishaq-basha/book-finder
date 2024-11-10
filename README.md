# Book Finder Application

## Overview
The Book Finder application is a simple React-based project that enables users to search for books using the Google Books API. Users can input a book title, view search results, and see additional details displayed in a modal by clicking on a book.

## Features
- **Book Search**: Enter a book title to search for related books through the Google Books API.

- **Book List Display**: Displays a list of book results, including titles and thumbnails.

- **Detailed View**: Click on a book to view more information in a modal dialog.

- **Responsive Design**: Optimized for desktop and mobile devices.

- **Accessibility**: ARIA labels and keyboard support for enhanced accessibility.

- **Loading Indicator**: Displays a loading message while fetching data.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v12.x or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

bash

   Navigate to the Project Directory:

bash

    cd book-finder-app
    Install Dependencies:
    
bash

    npm install
    Start the Application:

bash

    npm start
    Open the Application: Visit http://localhost:3000 in your web browser.

File Structure:
    App.js: Main component for search functionality, state management, and rendering.
    App.css: Styling for the application, including layout, responsive design, and modal behavior.
    setupTests.js: Configuration for unit testing using Jest and React Testing Library.

Usage:
    Search: Enter a book title in the input field and click "Search" to retrieve results.
    View Details: Click on any book from the displayed list to view more details in a modal window.
    Close Modal: Click the "X" button in the modal to close it.

Technologies Used:
    React: Front-end JavaScript library for building user interfaces.
    Axios: For making HTTP requests to the Google Books API.
    CSS: Styling the components for responsiveness and UI enhancements.
    Google Books API: Source of book data.

Accessibility Features:
    ARIA labels for form and modal elements.
    Keyboard navigation support for interacting with book cards and the modal.

Future Improvements:
    Improved error handling for network failures.
    Caching of previous searches for performance.
    Enhanced styling and animations.

License:
This project is licensed under the MIT License.

Credits:
Made with ❤️ by IshaqBasha