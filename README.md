# Martian Project

This is a project (written in React) of a web page which contains some interesting information related to Space and Universe.
You can check the website on: https://martian-project.herokuapp.com/

Main features:
1. Home page which displays NASA Photo of the Day together with short explanation (data fetched from official NASA API: https://github.com/nasa/apod-api).
2. News page which displays a bunch of latest articles related to Space (data fetched from external API: https://github.com/spaceflightnewsapi/spaceflightnewsapi).
3. Gallery of photos from Mars taken by Mars rovers: Perseverance, Curiosity, Opportunity and Spirit. User can choose the rover and the Earth date when the photos were taken. Data fetched from official NASA API: https://github.com/chrisccerami/mars-photo-api).

Technologies used:
HTML, CSS (including media queries for RWD purposes), React (including Router and Hooks).

## How to run the project:

### `npm install`

Copy the repository. Then, in a console in the project directory, run above command to install all dependencies from package.json.

### `npm start`

Once all dependencies are installed you can run 'npm start' in your console.
This command runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

