import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styled from 'styled-components';

// create an array [1,2,3,4,5], then check if stars is greater then each to choose what is being displayed using the ternary operator by putting it back to each of them

function Review({ stars, reviews }) {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper className="restaurant-rating">
      <div className="stars">{tempStars}</div>
      <p className="reviews">{reviews} customer reviews</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  span {
    color: #ffec5cfb;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
    color: #ffffff;
  }
`;

export default Review;
