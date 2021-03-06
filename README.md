# Recruitment technical test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

## Structure of files

    src
    |---api
        |---fetchData.ts
    |---components
        |---content
            |---Content.tsx
            |---ContentHours.tsx
            |---contentStyles.ts
        |---main
            |---Main.tsx
            |---mainStyles.ts
        |---navigation
            |---Navigation.tsx
            |---NavigationElementCenter.tsx
            |---navigationStyles.tsx
        |---types
            |---Tcontent.ts
            |---TpageMove.ts
            |---TPosts.ts
        |---utils
            |---constants.ts
            |---px2vw.ts
    |---images
        |---background-fabric.png
        |---leftArrow.svg
        |---rightArrow.svg
    |---styles
        |---globalStyles.ts
    |---App.tsx
    |---custom.d.ts
    |---import-png.d.ts
    |---index.tsx

### Api
Api are fetched by using axios library.
Definition of axios function you can find in src/api/[fetchData.ts]
Axios takes data from api and put it to posts state.

### [Main](https://github.com/TomaszBeben/getresponse/blob/main/src/components/main/Main.tsx)
Main component contain 2 components- Navigation, Content

### [Navigation](https://github.com/TomaszBeben/getresponse/blob/main/src/components/navigation/Navigation.tsx)
Navigation component change pages of records from api,
contains 2 empty 'divs' and center element which has main funcionality

### [NavigationElementCenter](https://github.com/TomaszBeben/getresponse/blob/main/src/components/navigation/NavigationElementCenter.tsx)
Main funcionality of navigation

### [Content](https://github.com/TomaszBeben/getresponse/blob/main/src/components/content/Content.tsx)
Content component contains pagination variables and 2 main component that renders data

### [ContentData](https://github.com/TomaszBeben/getresponse/blob/main/src/components/content/ContentData.tsx)
ContentData maps and render data that fetched from api

### [ContentHours](https://github.com/TomaszBeben/getresponse/blob/main/src/components/content/ContentHours.tsx)
ContentHours maps and render text from array(with hours)

### Styles
component styled by Styled Components and flex.