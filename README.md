# University Management System

A simple University Management System implemented in Node.js and TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Database](#database)

## Introduction

This project is a University Management System. It utilizes Node.js and TypeScript to implement various features related to university management.

## Dependencies

This project uses the following dependencies:

- **body-parser:** v1.20.2
  - Parse incoming request bodies in a middleware before your handlers.

- **dotenv:** v16.3.1
  - Load environment variables from a .env file for development.

- **ejs:** v3.1.9
  - Embedded JavaScript templates for rendering HTML pages.

- **express:** v4.18.2
  - Web application framework for Node.js to build robust APIs and web applications.

- **express-basic-auth:** v1.2.1
  - Provides basic authentication middleware for Express.

- **mongodb:** v6.3.0
  - MongoDB Node.js driver for interacting with the MongoDB database.

- **mongoose:** v8.0.2
  - Elegant MongoDB object modeling tool for Node.js.

- **ts-node:** v10.9.1
  - TypeScript execution and REPL for Node.js, enabling direct execution of .ts files.

- **typescript:** v5.3.2
  - Superset of JavaScript that adds static types and other features to the language.

## Development Dependencies

- **@types/express:** v4.17.21
  - TypeScript type definitions for Express.

- **@types/mongoose:** v5.11.97
  - TypeScript type definitions for Mongoose.

- **@types/node:** v20.10.3
  - TypeScript type definitions for Node.js.

- **ts-node-dev:** v2.0.0
  - Dev tool that reloads your TypeScript app when files are changed.



## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

```
git clone https://github.com/RodrigoCostaTA/university-management-system.git
```

2. Navigate to the project directory:

```
cd university-management-system
```
3. Install dependencies:

```
npm install
```
## Usage

```
npm start
```

## Database
The project uses MongoDB as the database. Make sure you have a running MongoDB instance. Update the connection string in index.ts accordingly.
