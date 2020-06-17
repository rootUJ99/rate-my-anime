import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAnimeList, getMyAnimeList } from "./serviceCalls";
import Card from '../../components/Card';
import RootContext from "../../rootContext";
import Button from "../../components/Button";
import ProductGrid from "../../components/ProductGrid";
import AnimeForm from "../AnimeForm";
import styled from "styled-components";
const GridContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  justify-items:center;
`;
const StyledImage = styled.img`
  width: 15rem;
  @media (max-width: 420px) {
    width: 7rem;
  }
`;
const Home = () => {
  const history = useHistory();
  const [{userInfo}, dispatch] = useContext(RootContext);
  const [list, setList] = useState([]);
  const [myAnimeList, setMyAnimeList] = useState([]);
  const [animeModal, setAnimeModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getAnimeList();
      setList(response.data);
      const res = await getMyAnimeList()
      setMyAnimeList(res.data.results)
    })();
  }, []);

  const onEdit = (it) => {
    dispatch({ type: "select_anime", data: { ...it, newAnime: false } });
    setAnimeModal(true);
  };
  const handleModalOpen = () => {
    setAnimeModal(true);
  }
  const handleModalClose = () => {
    setAnimeModal(false)
    dispatch({ type: "select_anime", data: { newAnime: true } });
  }
  return (
    <div >
{/* 
      { userInfo ? 
      <>
        <h1>
          watched new anime? add a review &nbsp;
          <Button onClick={handleModalOpen} > hollaz </Button>
        </h1>
      <br />
        <ProductGrid list={list} onEdit={onEdit}/>
        <AnimeForm />
      </>
      : 
      history.push('/profile')
    } */}
    <GridContainer>
    {
      myAnimeList.map(it=> 
        <Card width="16rem">
          <img src={it.image_url}/>
        </Card>
        )
    }
    </GridContainer>
    </div>
  );
};
export default Home;
