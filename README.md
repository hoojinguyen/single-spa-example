# single-spa-example

This is an example of web app built with micro-frontend using [single-spa](https://single-spa.js.org/docs/getting-started-overview) framework

# Installation

1. Clone the repo

```
git clone git@github.com:hoojinguyen/single-spa-example.git
```

2. Move into project

```
cd single-spa-example
```

3. Install dependencies for each repo

```
    cd single-spa-root && yarn
    cd single-spa-header && yarn
    cd single-spa-body && yarn
    cd single-spa-footer && yarn
```

4. Go to each repo and get started

```
    cd single-spa-root && yarn start --port 9000
    cd single-spa-header && yarn start --port 8500
    cd single-spa-body && yarn serve --port 8600
    cd single-spa-footer && yarn start --port 8700
```

5. Navigate to http://localhost:9000/ in your browser
6. And now you will see header, body, footer repos will be hosted on root

# Current applications

1. single-spa-header (written in react)
2. single-spa-body (written in vue)
3. single-spa-footer (written in react)
