# ICU Patient Dashboard

This project is an ICU Patient Dashboard built with React and Vite, designed to display detailed patient information from the ICU in a multi-layered and intuitive format. The dashboard includes features like paginated lists of patient ICU stays, individual patient detail pages, and separate routes for visualizing neurology, lab, and ventilation data with easy day-wise navigation.

## Project Setup

This project uses Vite for a fast and optimized development environment with React. To set up the project locally, follow the steps below.

### Prerequisites

- Node.js (v16 or later recommended)
- npm (or yarn if preferred)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BLAZE7SHADOW/Diagna-ICUStays.git
   cd Diagna-ICUStays
   
2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**

   ```bash
   npm run dev
   
  This command will start the Vite development server, and you can access the application at http://localhost:5173 (or the port displayed in your terminal).

4. **Build for production:**

   ```bash
   npm run build

# Project Structure

## Landing Page: 

 Displays a list of all ICU stays (patients) in a paginated format, each represented as a card or table row with basic details like Patient ID, Admission Date, Discharge Date, and Diagnosis. Each card/row is clickable, taking the user to a detailed patient page.

## Patient Pages: 

Contains three main sections – Neurology, Labs, and Ventilation – each with its own route. These pages are accessible through a sidebar or tabbed navigation.

### Detailed Page Overview

Each patient page is divided as follows:

## Neurology Data

Data types include: GCS, Pupil, Strength, Orientation, Motor.
Each type is aggregated into a separate table for better organization.
Day-wise data is selectable, with the default view showing the last recorded day of the patient stay.

## Labs Data

This page displays lab test results and other related data in a concise table format.
Day selection is available to view lab data on different days of the patient's stay.

## Ventilation Data

Data types include: Setting and Observation.

Similar to neurology data, ventilation data is grouped by type and displayed in separate tables.
The last day of patient stay is shown by default, with a date selector for navigation.

## Additional Features
Pagination on the landing page for easy navigation of large datasets.
Day Navigator on each patient detail page, defaulting to the last day of the stay.
Concise Visualization of data tables for each type within neurology and ventilation categories, enhancing readability and ease of use.

## Directory Structure
    
    src/
    ├── components/      # Reusable components like Table, Card, Sidebar, etc.
    ├── pages/           # Pages for Landing, Neurology, Labs, Ventilation
    ├── routes/          # Route definitions and configurations
    ├── services/        # API service calls
    ├── App.js           # Main application component with routing setup
    └── main.js          # Entry point for Vite


## Technologies Used

React for building UI components
Vite for fast, optimized bundling and development
react-router-dom for client-side routing
