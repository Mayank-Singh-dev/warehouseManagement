# Warehouse Management System

## Description

This is a Warehouse Management System web application built with React and Redux. The application allows users to view and manage warehouse information, including details such as name, code, city, space available, type, cluster, and registration status.

## Features

- View a list of all warehouses with basic details
- Filter warehouses by cluster, city, and type
- Sort warehouses based on available space
- Search for specific warehouses by name
- View detailed information of a specific warehouse
- Edit warehouse information (requires authentication)

## Demo

You can find a live demo of the application [here](https://warehouse-managements.netlify.app/).

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project folder and install dependencies:
3. Start the development server:
4. Open your web browser and go to `http://localhost:3000` to view the application.

## Technologies Used

- React
- Redux (for state management)
- React Router (for handling routing)
- CSS (for styling)
- JSON data (for simulating warehouse data)

## Folder Structure

- `src/`: Contains the source code of the application
  - `components/`: Contains all the React components
  - `actions.js`: Redux action creators
  - `reducer.js`: Redux reducer
  - `store.js`: Redux store configuration
- `public/`: Contains the public assets and index.html file
