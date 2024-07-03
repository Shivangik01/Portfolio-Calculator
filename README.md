# Portfolio Calculator

## Introduction
This project was developed for the Lighthall Challenge. The objective of the project is to create a Portfolio Calculator that can provide the current price of a given stock based on its name and a specified date. The application is built using Node.js, React, and Firebase.

## Project Overview
The Portfolio Calculator allows users to:
1. Input a stock name and a specific date.
2. Retrieve the current price of the specified stock.
3. View the historical price data of the stock.

## Tech Stack
- **Node.js:** Backend server for handling API requests.
- **React:** Frontend framework for building the user interface.
- **Firebase:** Used for authentication, database, and hosting.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- Firebase account.

### Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/portfolio-calculator.git
   ```
   
2. **Navigate to the Project Directory**
   ```sh
   cd portfolio-calculator
   ```

3. **Install Dependencies**
   ```sh
   npm install
   ```

4. **Firebase Setup**
   - Create a new project in Firebase.
   - Set up Firebase Authentication.
   - Create a Firestore database.
   - Update the Firebase configuration in your project.

5. **Run the Backend Server**
   ```sh
   npm run start:server
   ```

6. **Run the Frontend Application**
   ```sh
   npm start
   ```

### Firebase Configuration
Update the `firebaseConfig` object in your project with the configuration details from your Firebase project. This is usually found in the Firebase console under project settings.

## Features
- **Stock Price Retrieval:** Get the current price of a stock based on its name and a specified date.
- **Historical Data:** View the historical price data of the stock.
- **User Authentication:** Secure login and signup using Firebase Authentication.
- **Real-time Database:** Store and retrieve user-specific data using Firebase Firestore.

## Usage
1. **Enter Stock Details:** Enter the stock name and the date for which you want to calculate the price.
2. **Get Current Price:** Click the 'Get Price' button to fetch the current price of the stock.
3. **View Historical Data:** Navigate to the historical data section to view the price trends of the stock.

