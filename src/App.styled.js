import styled from 'styled-components/macro'
import { theme } from './ui'

export const Nav = styled.nav`
  text-align: center;
  margin-top: 40px;

  li {
    display: inline;
  }

  a {
    color: ${theme.colors.white};
    margin: 100rem 0 100px 15px !important;

    :hover {
      color: ${theme.colors.yellow};
    }
  }

  img {
    display: flex;
    width: 100px;
    height: 100px;
    margin: 0 0 0 20px;
  }
`

export const ContentHeader = styled.div`
  h1 {
    color: ${theme.colors.white};
    font-weight: ${theme.font.weigths.bold};
    font-size: 40px;
    margin: 50px 0 10px 50px;
    max-width: 500px;
  }

  p {
    font-size: 14px;
    margin: 0 0 30px 50px;
    max-width: 500px;
  }

  a {
    padding: 10px 45px 10px 45px;
    margin: 50px;
    background-color: ${theme.colors.yellow};
    border-radius: 5px;
    color: ${theme.colors.white};
    transition: 300ms;

    :hover {
      opacity: 85%;
    }
  }

  img {
    width: 440px;
    height: 630px;
    float: right;
    margin-top: -38rem;
  }
`

export const Division = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(60deg, #1b1925, #252332);
  width: 100%;
  height: 204px;
  margin-top: 80px;
`

export const ContainerDivision = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 204px;
  background: ${theme.colors.yellow};
  border-radius: 5px;
  margin-top: 50px;
`

export const ContentDivision = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 64px;
    margin: 40px;
    color: ${theme.colors.darkBlack};
  }
`

export const ContainerSpecifications = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentSpecifications = styled.div`
  margin: 200px 0 150px 80px;

  strong {
    font-size: 18px;
    text-align: center;
  }

  p {
    font-size: 16px;
    max-width: 200px;
    text-align: center;
  }

  svg {
    color: ${theme.colors.yellow};
    margin: 0 20px 0 -49px;
  }
`

export const ContainerPhone = styled.div`
  img {
    max-width: 450px;
    margin-top: -50px;
  }

  h1 {
    margin: 0 0 0 50px;
    max-width: 500px;
  }
`

export const ContainerMain = styled.div`
  text-align: left;
  float: right;
  margin: 0 70px 0 0;

  h1 {
    color: ${theme.colors.yellow};
    font-weight: ${theme.font.weigths.bold};
    font-size: 40px;
    margin: 50px 0 10px 50px;
    max-width: 500px;
  }

  p {
    font-size: 14px;
    margin: 0 0 30px 50px;
    max-width: 500px;
  }

  a {
    padding: 10px 45px 10px 45px;
    background-color: ${theme.colors.yellow};
    border-radius: 5px;
    color: ${theme.colors.white};
    transition: 300ms;
    margin: 0 0 0 50px;

    :hover {
      opacity: 85%;
    }
  }
`
