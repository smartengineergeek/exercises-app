import React,{ Component, Fragment } from 'react';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store.js';

export default class extends Component{
  state = {
    exercises,
    category: 'likes'
  }

  getExercisesByMuscles(){
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise
      exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise]: [exercise]

      return exercises;
    }, {}))
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  }

  render(){
    const exercises = this.getExercisesByMuscles(),
    { category, exercise } = this.state;
    return<Fragment>
      <Header /> 
      <Exercises 
        exercises={exercises} 
        category={category}
        onSelect={this.handleExerciseSelected}  
      />
      <Footer 
        category={category}
        muscles={muscles} 
        onSelect={this.handleCategorySelected}  
        exercise={exercise}
      />
    </Fragment>
  }
}

