import React, { useEffect, useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { getAnimeList, getMyAnimeList } from "./serviceCalls";
import Card from '../../components/Card';
import Label from '../../components/Label';
import RootContext from "../../rootContext";

import styled from "styled-components";
const GridContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  justify-items:center;
`;
const Img = styled.img`
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
`;

const Home = () => {
  const history = useHistory();
  const [{userInfo}] = useContext(RootContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAnimeList();
      setList(response.data);
    })();
  }, []);

  const onEdit = (anime) => {
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
        <Card key={it?.userId} onClick={()=>onEdit(it)} hover givePadd={false}>
          <Img src={it?.thumbUrl}/>
          <Label width='14rem'>{it?.animeName}</Label>
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
