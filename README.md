# IMDb Clone

The IMDb Clone is a web application built using React.js that aims to replicate the functionality and design of the popular movie app IMDb. It provides users with a platform to browse and discover movies based on different categories. The project leverages the TMDb API, which is a comprehensive movie database, to fetch movie data such as titles, ratings, release dates, and more.

## Features
1. Top Rated Movies
The "Top Rated Movies" feature allows users to explore a list of movies that have received the highest ratings according to the TMDb ratings system. This feature provides a great way for users to discover critically acclaimed movies and explore popular choices among the IMDb community.

2. Popular Movies
The "Popular Movies" feature showcases a list of movies that are currently trending or highly popular among users. These movies are determined based on factors like user interactions, ratings, and social media buzz. Users can easily find movies that are generating a lot of attention and are popular in the current movie landscape.

3. Upcoming Movies
The "Upcoming Movies" feature provides users with a sneak peek into movies that are scheduled to be released in the near future but haven't hit theaters yet. Users can get early information about upcoming releases, including release dates, cast, and brief descriptions. This feature is especially useful for movie enthusiasts who want to stay up-to-date with the latest movie releases.

## Technologies Used
The IMDb Clone is built primarily using the following technologies:

- React.js: A popular JavaScript library for building user interfaces. React.js enables the creation of reusable UI components and facilitates the efficient rendering of dynamic data.

- TMDb API: The project relies on the TMDb API to fetch movie data. The TMDb API provides a vast collection of movie information, including details about movies, ratings, reviews, cast, and much more.

The IMDb Clone project aims to offer a user-friendly and visually appealing interface that mimics the features and experience of the original IMDb app. By leveraging the power of React.js and the comprehensive data available through the TMDb API, users can enjoy browsing and discovering movies with ease.


## Installation
1. Clone the repository:

```bash
git clone https://github.com/RIYA_VIJ/imdb_clone.git
```

2. Navigate to the project directory:

```bash
cd imdb-clone
```

3. Install the dependencies:

```bash
npm install
```

4. Create an account on TMDb and obtain an API key.

5. Create a new file named .env in the root of the project directory.

6. Add the following line to the .env file and replace <YOUR_API_KEY> with your TMDb API key:

```bash
REACT_APP_TMDB_API_KEY=<YOUR_API_KEY>
```

## Usage
- Start the development server:

```bash
npm start
```

- Open your web browser and navigate to http://localhost:3000 to access the IMDb Clone.

- On the homepage, you will find a menu with options for top rated movies, popular movies, and upcoming movies.

- Click on any of the menu options to view the corresponding list of movies.


## Technologies Used
- React.js: A JavaScript library for building user interfaces.
- TMDb API: An API that provides access to a vast collection of movie data.

## Contributing
Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request explaining your changes.

## License
This project is licensed under the MIT License.

## Acknowledgements
- IMDb: Inspiration for the design and functionality of the app.
- TMDb: Providing the API to fetch movie data.
