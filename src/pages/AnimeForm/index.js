import React, {useContext, useReducer} from 'react';
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';
import Input from '../../components/Input'
import Label from '../../components/Label'
import Card from '../../components/Card'
import {addAnimeRequest, initialData} from './helperFunction';
import {addAnimeService, updateAnimeService, deleteAnimeService} from './serviceCalls';
import RootContext from '../../rootContext';
import Button from '../../components/Button';
import { CenterWrapper } from '../../StyledComponents';
import styled from 'styled-components';


const Wrapper = styled(CenterWrapper)`
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
`;

const CenterContainer = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;
`;

const NewAnime = (props) => {
  const history = useHistory();
  const [ state, dispatch] = useContext(RootContext); 
  const { register, handleSubmit, errors } = useForm();
  const selectedAnime = initialData(history?.location?.state?.selectedAnime);
  

  const onSubmit = async (data) => {
    console.log(selectedAnime, data)
    if (selectedAnime?.new){
      await addAnimeService(addAnimeRequest(data, selectedAnime));
    } else {
      await updateAnimeService(selectedAnime._id, {...data});
    }
  };


  const deleteAnime = async () => {
    await deleteAnimeService(selectedAnime._id);
    history.push('/');
  }

  return (
    <Card>
    <form onSubmit={handleSubmit(onSubmit)}>
    <CenterContainer>

    <img src={selectedAnime?.image_url} style={{width:'16rem'}}/>
    <Label>{selectedAnime?.title}</Label>
      <Input 
        type="range" 
        placeholder="Rating" 
        name="rating"
        mix="1"
        mix="10"
        ref={register({required: true, max: 10, min: 1, maxLength: 1})} 
        defaultValue={selectedAnime?.rating}
      />
      <Input 
        type="textarea" 
        placeholder="review" 
        name="review" 
        ref={register({required: true, maxLength: 1000})} 
        defaultValue={selectedAnime?.review}
      />
      <ButtonWrapper>  
      <Button type="submit">{selectedAnime.new ? 'Submit' : 'Update'}</Button>
      {!selectedAnime.new && 
      <Button name="deleteAnime" onClick={deleteAnime} backgrouond="#F76FAF">Delete</Button>}
      </ButtonWrapper>
    </CenterContainer>
    </form>
    </Card>
  );
} 

export default NewAnime;