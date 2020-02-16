import React, {useEffect, useContext, useState, Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import {getAnimeList} from './serviceCalls';
import RootContext from '../../rootContext';

const Home = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(RootContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAnimeList();
      setList(response.data);
      console.log('response', response.data)
    })()
  }, []);

  return(
    <div>
      <h2>watched new anime? add a review</h2> 
      <button name="addAnime" onClick={()=>history.push('/addNew')}>Add anime</button>
      <br/>
      <h3>Recently watched animes</h3>
      {list.map(it=> (
        <Fragment key={it._id}>
        <p >
          {it.animeName}
        </p>
        <button name="edit" onClick={()=>{
          dispatch({ type: "select_anime", data: {...it, newAnime: false} })
          history.push('/addNew')
        }}>edit</button>
        </Fragment>
  ))}
    </div>
  );
}
export default Home;