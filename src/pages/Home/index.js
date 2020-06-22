import React, { useEffect, useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { getAnimeList, getMyAnimeList } from "./serviceCalls";
import Card from '../../components/Card';
import Label from '../../components/Label';
import RootContext from "../../rootContext";
import ProductGrid from "../../components/ProductGrid";

import styled from "styled-components";
const GridContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  justify-items:center;
`;
// const StyledImage = styled.img`
//   width: 15rem;
//   @media (max-width: 420px) {
//     width: 7rem;
//   }
// `;
const SelectionWrapper = styled.div`
 
`;
const Home = () => {
  const history = useHistory();
  const [{userInfo}, dispatch] = useContext(RootContext);
  const [list, setList] = useState([]);
  const [myAnimeList, setMyAnimeList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAnimeList();
      setList(response.data);
      const res = await getMyAnimeList()
      setMyAnimeList(res.data.results)
    })();
  }, []);

  const onEdit = (anime) => {
    // dispatch({ type: "select_anime", data: { ...it, newAnime: false } });
    history.push('/add', {
      selectedAnime: {...anime, new: false},
    })
  };

  return (
    <div >
      { userInfo ? 
      <GridContainer>
      {
      list.map(it=> 
        <Card width="16rem" key={it?.userId} onClick={()=>onEdit(it)} hover>
          <img src={it?.thumbUrl}/>
          <Label>{it?.animeName}</Label>
        </Card>
        )
      }
        </GridContainer>
      : 
      <Redirect to='/profile'/>
    }
    </div>
  );
};
export default Home;
