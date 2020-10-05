# NestJS

## Installing nestJS

``` bash 
# using npm 
npm install -g @nestjs/cli

# Using Yarn
yarn global add @nestjs/cli
```

## Creating new Application

``` bash 
# Creating a new application 
nest new training-tracker-api
```

## Running the project
``` bash
# run with watch enabled
yarn start:dev
npm start:dev

# run without watch
yarn start
npm start
```

## Generating Components using CLI

Creating module, service, controller

### Create new Module

``` bash
nest g module employee
```

### Create new Service

``` bash
nest g service employee
```

### Create new Controller

``` bash
nest g controller employee
```

## 3rd Party Packages


### Installing validators

``` bash
yarn add class-validator
```

### Installing PostgreSQL Dependencies

``` bash
yarn add @nestjs/typeorm typeorm pg
```