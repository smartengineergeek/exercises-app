import React,{ Component, Fragment } from 'react';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store.js';

export default class extends Component{
  state = {
    exercises,
    exercise: {}, 
    editMode: false
  }

  getExercisesByMuscles = () => {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})
    let thisReference = this;
    return Object.entries(thisReference.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = [...exercises[muscles], exercise]

      return exercises
    }, initExercises))
  }

  handleCategorySelect = category => 
    this.setState({
      category
    });
  

  handleExerciseSelect = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  

  handleExerciseCreate = exercise => 
    this.setState(( { exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  

  handleExerciseDelete = id => 
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    })) 
  
  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.find(ex => ex.id !== id),
      editMode: true
    }))
  }
      
  handleExerciseEdit = exercise => 
    this.setState(({ exercises }) => ({ 
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ]
    }))
  
  render(){
    const exercises = this.getExercisesByMuscles(),
    { category, exercise, editMode } = this.state;
    return(
      <Fragment>
        <Header 
          muscles={muscles} 
          onExerciseCreate={this.handleExerciseCreate}
        /> 
        <Exercises 
          exercise={exercise}
          exercises={exercises} 
          category={category}
          muscles={muscles}
          onSelect={this.handleExerciseSelect}  
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
        />
        <Footer 
          category={category}
          muscles={muscles} 
          onSelect={this.handleCategorySelect}  
          exercise={exercise}
        />
      </Fragment>)
  }
}

