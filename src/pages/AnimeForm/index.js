import React, {useContext, useReducer} from 'react';
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {addAnimeService, updateAnimeService, deleteAnimeService} from './serviceCalls';
import RootContext from '../../rootContext';

const NewAnime = (props) => {
  const history = useHistory();
  const [ state, dispatch] = useContext(RootContext); 
  const { register, handleSubmit, errors } = useForm();
  
  const {selectedAnime} = state;

  const onSubmit = async (data) => {
    if (selectedAnime.newAnime){
      await addAnimeService({...data});
    } else {
      await updateAnimeService(selectedAnime._id, {...data})
    }
  };

  const setInitialValue = (value) => {
    if (!selectedAnime.newAnime) return selectedAnime[value];
  }

  const deleteAnime = async () => {
    await deleteAnimeService(selectedAnime._id);
    history.push('/')
  }
  console.log(state);
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="animeName" name="animeName" ref={register({required: true, maxLength: 500})} defaultValue={setInitialValue("animeName")}/>
      <input type="text" placeholder="rating" name="rating" ref={register({required: true, max: 5, min: 1, maxLength: 1})} defaultValue={setInitialValue("rating")}/>
      <input type="text" placeholder="review" name="review" ref={register({required: true, maxLength: 1000})} defaultValue={setInitialValue("review")}/>
      <input type="text" placeholder="thumbUrl" name="thumbUrl" ref={register({required: true})} defaultValue={setInitialValue("thumbUrl")}/>
      <button type="submit">Submit</button>
    </form>
    {!selectedAnime.newAnime && <button name="deleteAnime" onClick={deleteAnime}>delete anime </button>}
    </>
  );
} 

export default NewAnime;