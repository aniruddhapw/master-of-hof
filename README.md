<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======

![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | REACT - MASTER OF HOF

## Learning Goals

In this exercise, the goal is to apply various higher order functions in react:

- when and how to setup react in your application,
- learn map, filter and reduce

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

### Introduction

In this exercise, you will try to work with various higher order functions. 

**You should use map, filter and reduce**

create a new react app using the following command
```
npx create-react-app hof
cd hof
```
Now go to your app.js and remove the unnecessary code. Your app.js should be looking similar to the this.
```
import React from 'react';
import HigherOrderFunctions from './components/hof/HigherOrderFunctions';
import './App.css';

function App() {
  return (
    <div className="App">
 
    </div>
  );
}

export default App;
```

Now create a folder called components inside the src folder and create a component called HigherOrderComponent.jsx file. Once you create it you are good to go.
**Note: use rcc to generate the code template inside HigherOrderComponent.jsx**. Once you have done this. 

So let's get started!
Check below to see the overall output: You will be trying to replicate this

![Image description](https://i1.faceprep.in/ProGrad/l2.output1.png)


### PROGRESSION 1 | DEFINE THE STATE

Your task in this iteration is just to create an array of objects inside the state. To do this, let's go to our HigherOrderComponent.jsx and inside the class try to define the constructor and the state.
Just remember you need to define the super constructor before defining the state. Your code should look something like this.

```
  constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  
```

You're ready to move to the next iteration. :raised_hands:

### PROGRESSION 2 | LIST ALL ITEMS

Now we have defined our data to be used. Your task in this iteration is to display all the elements from userData. 
Your output should be looking like this.

![Image description](https://i1.faceprep.in/ProGrad/l2.output3.png)


**Remember to use map function to display all the details**

Code Snippet for reference
```
// display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};

```
Now the most important step, You need to return the value to the render method so that the output get's displayed in the container.

```
render() {
        return (
        // instead of a parent div tag we can also use React.Fragment
          <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
          </React.Fragment>
```

If you do the above, you still can't see the output. Do you know why it is because you need to add your component to your app.js file.

![Image description](https://i1.faceprep.in/ProGrad/l2.output2.png)

If you get the above output, you can ensure that the react is completely setup in your system.

### PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE

Your output should like this. In this iteration you should filter the userData based on the `UserType`.
**Note: Please use map and filter**

![Image description](https://i1.faceprep.in/ProGrad/l2-output4.png)

### PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER `J`
Filter all names starting with the letter J.
**Note: Please use map and filter**

Your output should like this.
![Image description](https://i1.faceprep.in/ProGrad/l2-output5.png)

### PROGRESSION 5 | FILTER DATA BASED ON AGE
In this progression, Filter the data based on the age. The age should be `greater than 28 and less than or equal to 50`. 
**Note: Please use map and filter**

Your output should like this.
![Image description](https://i1.faceprep.in/ProGrad/l2-output6.png)

### PROGRESSION 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS
In this progression, you need to find the total years of experience of the designers.

**Note: Please use map, filter and reduce**
Your output should like this.
![Image description](https://i1.faceprep.in/ProGrad/l2-output7.png)

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!

>>>>>>> origin/main
