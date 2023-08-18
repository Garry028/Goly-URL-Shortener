
# Goly - URL Shortener

Goly is a sleek and efficient URL shortener application built using a stack of cutting-edge technologies. The application combines Go (powered by Fiber), GORM for database management, PostgreSQL for data storage, and a polished frontend developed with React and Tailwind CSS.

## Features

- Shorten lengthy URLs into concise and manageable short links.
- Choice to generate personalized short URLs or let the system create random ones.
- Streamlined storage and organization of URLs in a PostgreSQL database.
- Stylish and user-friendly frontend design crafted with React and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- Go 
- Node.js 
- PostgreSQL 

## Installation

1. Clone the Goly repository:

   ```sh
   git clone https://github.com/Garry028/URL-Shortener.git
   ```

2. Move into the server directory and install Go dependencies:

   ```sh
   cd URL-Shortener/app
   go mod tidy
   ```

3. Create a `.env` file in the server directory and configure your PostgreSQL database connection:

   ```sh
   POSTGRES_URL=localhost
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=password
   POSTGRES_DB=urlshortener
   POSTGRES_PORT=5432
   ```

4. Start the Go server:

   ```sh
   go run main.go
   ```

5. In a separate terminal, navigate to the client directory and install Node.js dependencies:

   ```sh
   cd URL-Shortener/view
   npm install
   ```

6. Launch the React development server:

   ```sh
   npm run dev
   ```

7. Access Goly in your browser at `http://localhost:5173`.

## Usage

1. Open the Goly application in your web browser.

2. Input the original URL you wish to shorten into the designated field.

3. Optionally, check the "Generate Random Short URL" box for a distinct short URL.

4. Click the "Shorten Now" button to create the short URL.

5. Copy and share the produced short URL.

---
Enjoy the capabilities of Goly! If you have inquiries or suggestions, don't hesitate to contact me 🤖. Happy shortening!
