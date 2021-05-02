# Ravencoin price

This mobile friendly web app displays information about the Ravencoin price.
It allows the user to the "cost" or "value" of Ravencoin in USD.
How many Ravencoins do you get for X amount of USD?

## Develop

    npm install
    npm run dev

App is running on http://localhost:8080


## Build for production

First, update app version in `package.json`, then:

    git add .
    git commit -m 'bump version'
    npm run build

Deploy comtents of `build` directory to wherever.
