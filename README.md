# Forum Application

This is a simple forum webapp developed as part of the Vanhack Accelerator Program. It was written using:
* Frontend:
    * React.js
    * PureCSS
* Backend:
    * Java 8
    * Spring: Boot, WebMVC, Security, Data
    * JWT
    * MongoDB running in the cloud with MongoDB Atlas

**Please check out the kanban board for this project [HERE](https://drive.google.com/file/d/1FNEiN0nhfoPI-5EfBTihCMshXnJ6ojBm/view?usp=sharing)**

## Next steps

The next step is to evolve the application into a platform where users can create their own forums and blogs, and write posts using Markdown syntax.

## Prerequisites

In order to run the demo you need the following thinks:
- [Java SDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Node.js and NPM](https://nodejs.org/en/)

## How to run the application
In order to run and play the webapp you need to:
1. Clone (or download) the project from GitHub
2. Run the backend API:
    - In Command Prompt, natigate to `blog-api/dist` folder
    - Run command `java -jar lunaforum-application-0.0.1-SNAPSHOT.jar`
3. Run the ReactJS part in development mode:
    - In Command Prompt, natigate to `blog-react-ui` folder
    - Run `npm install`
    - Run `npm start`
4. The application will open automatically in your default web browser

