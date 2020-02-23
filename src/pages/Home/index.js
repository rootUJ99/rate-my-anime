import React, {useEffect, useContext, useState, Fragment} from 'react';
import { Add } from "grommet-icons";
import {useHistory} from 'react-router-dom';
import {getAnimeList} from './serviceCalls';
import RootContext from '../../rootContext';
import Button from '../../components/Button';
import { Grommet, Heading, Main, Paragraph } from "grommet";
import styled from 'styled-components';
import Modal from '../../components/Modal';
import AnimeForm from '../AnimeForm';
const ProductGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Home = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(RootContext);
  const [list, setList] = useState([]);
  const [animeModal, setAnimeModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getAnimeList();
      setList(response.data);
      console.log('response', response.data)
    })()
  }, []);
console.log('animeModal', animeModal);
  return(
    // <Wrapper>
    <Grommet>
      <Main 
        background="#f6f6f6"
        pad="medium"
        round="medium"
        >
        <Heading color="#9f9191">watched new anime? add a review <Button 
          icon= {<Add/>}
          onClick={()=>setAnimeModal(true)}
        /></Heading> 
        
        <Button name="login" onClick={()=>history.push('/profile')} label="Login"/>
        <br/>
      </Main>
      <br/>
      <Main
        background="#f6f6f6"
        pad="medium"
        round="medium"
      >   
        <Paragraph color="#9f9191">Recently watched animes</Paragraph>
        <Modal 
          open={animeModal}
          onClose={()=>setAnimeModal(false)}
        >
          <AnimeForm/>
        </Modal>
        <ProductGrid >
        {list.map(it=> (
          <div key={`${it.name}`}>
            <Paragraph color="#9f9191">
              {it.animeName}
            </Paragraph>
            <Button name="edit" onClick={()=>{
              dispatch({ type: "select_anime", data: {...it, newAnime: false} })
              // history.push('/addNew')
              setAnimeModal(true)
            }}>edit</Button>
            </div>
    ))}
    </ProductGrid>
      </Main>
    </Grommet>
    // </Wrapper>
  );
}
export default Home;