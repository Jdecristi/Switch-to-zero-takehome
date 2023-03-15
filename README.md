# Switch to Zero carbon foot print calculator

This project shows what it would look like for users to calculate their current carbon footprint and plan they should use to reach carbon neutrality.

## To get started

    // install dependancies
    npm install

    // build and run
    npm run all

    //run in development
    npm run all:dev

## Design of the App

#### The apps with a frontend server and a backend server

The "root directory" serves only as the launch point in the app starting both servers in a single command

**Note:**
_I would not this "root directory" in a production environment, Ideally we would serve our frontend entirely from a CDN and interact with the backend via API's_

## Frontend

I chose to use Next.js for my project because it made it easy to implement features without sacrificing performance. I plan to use it in a production application that runs most static assets through a CDN, and utilizes SSR rendering wherever possible.

To simplify some of the more time-consuming tasks, I also added react-bootstrap and recharts to my project. These libraries help with tasks like creating charts and CSS, allowing me to work more efficiently.

## Backend

For my backend, I utilized Node with TypeScript to create an Express API. The API features a single endpoint, which generates a plan that aligns with the user's budget and carbon footprint.

## User Flow

My goal was to make it as easy as possible for users to get a quote on how much they would need to spend to reach carbon neutrality or come close to it. To achieve this, I developed an app that allows users to simply enter their country and yearly budget, and our app does the rest.

The app calculates the carbon offset needed and shows users how much they would need to spend per month to reach their goal. With this app, users can easily understand what it takes to become carbon neutral and take actionable steps towards a more sustainable lifestyle.
