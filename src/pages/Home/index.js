import React, { useEffect, useContext, useState } from "react";
import { Add } from "grommet-icons";
import { useHistory } from "react-router-dom";
import { getAnimeList } from "./serviceCalls";
import RootContext from "../../rootContext";
import Button from "../../components/Button";
import { Grommet, Main } from "grommet";
import ProductGrid from "../../components/ProductGrid";
import Modal from "../../components/Modal";
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
    <Grommet>
      { userInfo ? 
      <>
      <Main background='#f6f6f6' pad='medium' round='medium'>
        <h1>
          watched new anime? add a review &nbsp;
          <Button icon={<Add />} onClick={handleModalOpen} />
        </h1>
      </Main>
      <br />
      <Main background='#f6f6f6' pad='medium' round='medium'>
        <h3>Recently watched animes</h3>
        <ProductGrid list={list} onEdit={onEdit}/>
      </Main> 
      <Modal open={animeModal} onClose={handleModalClose}>
        <AnimeForm />
      </Modal>
      </>
      : 
        history.push('/profile')
      }
    </Grommet>
  );
};
export default Home;
