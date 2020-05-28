import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/backgroundImg.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  text-align: center;
  height: 100vh;

  div {
    width: 100%;
    color: #fff;
    text-align: left;
    font-size: 21px;
    padding: 20px 40px;

    h2 {
      padding: 20px 0;
    }
  }

  div + div {
    background-color: #5fbff9;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const ContentTextOrUrl = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
  max-width: 50%;

  h4 {
    color: #000;
  }

  textarea {
    margin: 20px auto;
    width: 100%;
    min-height: 7%;
    max-height: 20%;

    min-width: 50%;
    max-width: 100%;

    padding: 10px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
  }

  button {
    background-color: #5fbff9;
    width: 340px;
    height: 56px;
    border: none;
    border-radius: 10px;

    &:hover {
      background-color: ${shade(0.2, '#5fbff9')};
    }
  }

  div {
    margin: 30px 0;
    display: flex;
    justify-content: center;
  }
`;
