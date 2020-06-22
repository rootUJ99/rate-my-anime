import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import Button from "../../components/Button";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;
const Card = styled.div`
  border-radius: 0.5rem;
  background: #efefef;
  padding: 0.5rem;
  min-width: 15rem;
  display: grid;
  justify-items: center;
  grid-gap: 0.5rem;
`;

const ProductGrid = ({ list, onEdit }) => {
  return (
    <Grid>
      {list.map(it => (
        <Card key={`${it._id}`}>
          <h4 style={{
            margin: '0.5rem',
          }}>{it.animeName}</h4>
          <StarRatingComponent 
            starCount={5}
            name={it.animeName}
            value={Number(it.rating)}
          />
          <img src="abc.jpg" style={{
            width: '7rem',
            height: 'auto',
          }}/>
          <Button name='edit' onClick={() => onEdit(it)}>
            edit
          </Button>
        </Card>
      ))}
    </Grid>
  );
};
export default ProductGrid;
