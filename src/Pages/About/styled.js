import styled from 'styled-components';

export const ImgCard = styled.div`
  background-image: url('https://www.games4u.com/sc/br/g4u/_imgwy_/408395ecda8f61af1cb86f04626e99fc/?i=http%3A%2F%2Fimages.terra.com%2F2019%2F10%2F08%2Fdragon-ball-esferas-interna-esferas-da-terra.jpg');
  border-radius: 50%;
  width: 100%;
  background-size: cover;
  
  justify-content: center;
`;

export const Img = styled.img`
  width: 7rem;
  height: 7rem;
  margin-left: 22rem;
  margin-top: 73px;
  border-radius: 50%;
`;

export const SocialBlock = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  & a {
    color: #e76a24;

    & i {
      padding: 0 0.5rem;
      font-size: 2.5em;
      transition: 200ms;

      &:hover {
        color: #b15019;
      }
    }
  }
`;
