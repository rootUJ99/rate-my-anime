import React, { useEffect, useState } from "react";
import { getMyAnimeList } from "./serviceCalls";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Label from "../../components/Label";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  justify-items: center;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
const Img = styled.img`
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
`;
const SearchPage = () => {
  const history = useHistory()
  const [searchdData, setSearchdData] = useState([]);
  const handleSearchInput = async (e) => {
    if (e.target.value.length > 3) {
      const res = await getMyAnimeList(e.target.value);
      setSearchdData(res.data.results);
    }
  };
  const handleClickCards = (anime) => {
    console.log('1')
    history.push('/add', {
      selectedAnime: {...anime, new: true},
      
    });
  }
  return (
    <div>
      <FlexContainer>
      <Input type='text' onChange={handleSearchInput} name="Search Anime" width="600px"/>
      </FlexContainer>
      <GridContainer>
        {searchdData.map((it) => (
          <Card width='16rem' onClick={()=>handleClickCards(it)} key={it.image_url} hover givePadd={false}>
            <Img src={it.image_url} />
            <Label>{it.title}</Label>
          </Card>
        ))}
      </GridContainer>
    </div>
  );
};

export default SearchPage;
