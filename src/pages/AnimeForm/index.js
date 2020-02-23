import React, {useContext, useReducer} from 'react';
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';
import { TextInput, TextArea } from 'grommet';
import {addAnimeService, updateAnimeService, deleteAnimeService} from './serviceCalls';
import RootContext from '../../rootContext';
import Button from '../../components/Button';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto; 
  grid-gap: 1rem;
  margin: 1rem;
  /* width: 60%; */
  justify-content: center;
`;

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
      <Wrapper>
      <TextInput 
        type="text" 
        placeholder="Anime Name" 
        name="animeName" 
        ref={register({required: true, maxLength: 500})} 
        defaultValue={setInitialValue("animeName")}
      />
      <TextInput 
        type="text" 
        placeholder="Rating" 
        name="rating" 
        ref={register({required: true, max: 5, min: 1, maxLength: 1})} 
        defaultValue={setInitialValue("rating")}
      />
      <TextArea 
        type="text" 
        placeholder="review" 
        name="review" 
        ref={register({required: true, maxLength: 1000})} 
        defaultValue={setInitialValue("review")}
      />
      <TextInput 
        type="text" 
        placeholder="thumbUrl" 
        name="thumbUrl" 
        ref={register({required: true})} 
        defaultValue={setInitialValue("thumbUrl")}/>
      <Button type="submit">Submit</Button>
    </Wrapper>
    </form>
    {!selectedAnime.newAnime && <Button name="deleteAnime" onClick={deleteAnime}>delete anime </Button>}
    </>
  );
} 

export default NewAnime;