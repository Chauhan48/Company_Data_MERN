# Company Listing Project

Welcome to the Company Listing project! This is a full-stack web application built using Node.js, Express, and MongoDB for the backend, and React with Vite and Material-UI for the frontend.

## Project Overview

This app allows users to manage a list of companies. Users can:
- Create new company entries.
- Update existing company details.
- Delete companies they no longer want listed.
- Filter companies based on location and industry type.

The goal was to build a clean, intuitive interface on the frontend with powerful backend APIs handling company data storage, retrieval, and filtering efficiently.

## Tech Stack

- **Backend:**  
  - Node.js with Express.js  
  - MongoDB
  - RESTful API design

- **Frontend:**  
  - React with Vite for a fast development experience  
  - Material-UI for sleek, responsive UI components  
  - JavaScript (ES6+) with hooks and functional components

## Folder Structure
|-backend # Node.js and Express REST API with MongoDB
|-frontend # React application with Material UI and Vite
|-package.json # Root package file to manage scripts for both frontend and backend
|-README.md # documentation file

## Getting Started

### Prerequisites

Ensure you have these installed on your system:
- Node.js (v14 or above)
- MongoDB instance (local or cloud)
- npm

### Installation

1. Clone the repo.
2. Install dependencies for backend and frontend.
3. Setup environment variables.


### Running the project

In the root folder, you can run frontend and backend concurrently (if setup with `concurrently`):

```bash
npm start
```