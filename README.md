# tech-challenge-01

[![Build Status](https://travis-ci.org/stephan9/tech-challenge-01.svg?branch=master)](https://travis-ci.org/stephan9/tech-challenge-01)

## Objective

Create a docker image containing a NodeJS application with REST API and a couple of endpoints.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software. It is assumed you have some understanding of how to use them.

``` sh
Git
Nodejs
Docker
```

### Repository Structure

This is an overview of the content.

``` sh
.
└── tests
    └── test.js
├── .dockerignore
├── .gitignore
├── .travis.yml
├── Dockerfile
├── LICENSE
├── README.md
├── git-commit.json
├── package-lock.json
├── package.json
├── server.js
```

### Running the application locally

Let's clone the repository locally.

``` sh
> git clone git@github.com:stephan9/tech-challenge-01.git
```

Run the app locally

``` sh
> npm start
```

Then on any browser you should be able to access http://localhost:8080/ to view "Hello World" and [/status](http://localhost:8080/status) to view the json output.

### Running the container locally

You need to get the latest image from the Docker Hub Registry.

``` sh
> docker pull stephan9/tech-challenge-01
```

Next let's run the container

``` sh
> docker run -p 8080:8080 stephan9/tech-challenge-01
```

Similarly to the previous section you should be able to access the application on your browser.

## Running the tests

2 basic unit tests have been implemented.

1. `/` returns **Hello World**
2. `/status` returns the latest sha commit from the *master* branch in Github and data from **package.json**

### Break down into end to end tests

Explain what these tests test and why

``` sh
> npm test
```

## Limitations around this repository

- Security principles are **not** being considered due to time constraint
- No integration testing
- No linting
- My lack of knowledge. I started this code challenge with no knowledge/use of TravisCI and NodeJS but it's been great fun :)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
