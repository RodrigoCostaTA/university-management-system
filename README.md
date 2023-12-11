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

### [express](https://www.npmjs.com/package/express)
- Used to build the web server and handle HTTP requests and responses.

### [mongoose](https://www.npmjs.com/package/mongoose)
- Used for MongoDB database interaction, defining schemas, and performing CRUD operations.

### [body-parser](https://www.npmjs.com/package/body-parser)
- Used to parse JSON and url-encoded data from HTTP requests.

### [mongodb](https://www.npmjs.com/package/mongodb)
- Required by Mongoose for low-level MongoDB operations.

### [ts-node](https://www.npmjs.com/package/ts-node)
- Used to directly run TypeScript files without the need for a separate compilation step.

### [typescript](https://www.npmjs.com/package/typescript)
- Used to enable static typing, improve code maintainability, and catch potential errors during development.

## Dev Dependencies

### [@types/express](https://www.npmjs.com/package/@types/express)
- Provides TypeScript with type definitions for Express to enhance code development.

### [@types/mongoose](https://www.npmjs.com/package/@types/mongoose)
- Provides TypeScript with type definitions for Mongoose to enhance code development.

### [@types/node](https://www.npmjs.com/package/@types/node)
- Provides TypeScript with type definitions for Node.js core modules.

### [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- Similar to `nodemon` but optimized for TypeScript projects.

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
