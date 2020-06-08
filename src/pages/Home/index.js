import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAnimeList } from "./serviceCalls";
import Card from '../../components/Card';
import RootContext from "../../rootContext";
import Button from "../../components/Button";
import ProductGrid from "../../components/ProductGrid";
import AnimeForm from "../AnimeForm";

const Home = () => {
  const history = useHistory();
  const [{userInfo}, dispatch] = useContext(RootContext);
  const [list, setList] = useState([]);
  const [animeModal, setAnimeModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getAnimeList();
      setList(response.data);
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
    <Card>
      holla
    </Card>
    </div>
  );
};
export default Home;
