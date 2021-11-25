import styled from 'styled-components/macro'
import bannerhome from './assets/bannerhome.png'
import { theme } from './ui'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 10px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Nav = styled.nav`
  text-align: center;

  a {
    color: ${theme.colors.white};

    :hover {
      color: ${theme.colors.yellow};
    }
  }

  img {
    display: flex;
    width: 100px;
    height: 100px;
  }
`

export const BtnLogin = styled.div`
  a {
    width: 180px;
    height: 50px;

    background: #fece51;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.darkBlack};
    font-weight: bold;
  }
`

export const ContentHeader = styled.div`
  background: url(${bannerhome});
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  width: 100%;
  height: 500px;
  position: relative;

  @media (max-width: 768px) {
    height: 700px;
    width: 100%;
    background-size: 100%;
    object-fit: cover;
  }
`

export const ContentHome = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 300px);
  transform: translate(-50%, -50%);
  h1 {
    color: ${theme.colors.white};
    font-weight: ${theme.font.weigths.bold};
    font-size: 40px;
    max-width: 500px;
  }

  p {
    font-size: 14px;
    word-wrap: break-word;
    display: inline-block;
    word-break: break-all;
    max-width: 500px;
    padding: 10px 0;
  }

  a {
    background-color: ${theme.colors.yellow};
    border-radius: 5px;
    color: ${theme.colors.white};
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 50px;

    background: #fece51;
    border-radius: 5px;
    :hover {
      opacity: 85%;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0%;
    left: 0;
    padding: 0 10px;
    transform: translate(0, 0);

    h1 {
      font-size: 28px;
    }
  }
`

export const ContainerDivision = styled.div`
  background: ${theme.colors.yellow};
  margin: 40px 0;
  border-radius: 5px;
  padding: 50px;
`

export const ContentDivision = styled.div`
  display: flex;
  align-items: center;
  span {
    color: ${theme.colors.darkBlack};
    font-size: 64px;
  }

  p {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerSpecifications = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContentSpecifications = styled.div`
  margin: 50px auto;
  display: flex;

  svg {
    color: #fece51;
  }
  div {
    margin-left: 20px;
  }
`

export const ContainerPhone = styled.div`
  padding: 80px 0;

  h1 {
    margin: 0 auto;
    text-align: center;
    max-width: 845px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    &:last-child {
      flex-direction: column-reverse;
    }
  }

  img {
    width: 400px;
    height: 500px;
    object-fit: contain;
  }

  img:last-child {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-left: 90px;
  }

  .contentMain {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    color: ${theme.colors.yellow};
    font-size: 38px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    padding: 20px 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 44px;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.darkBlack};
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    img {
      width: 100%;
    }

    img:last-child {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      margin-left: 0;
    }

    h2 {
      font-size: 22px;
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  background: linear-gradient(60deg, #1b1925, #252332);
  height: 100%;
  margin-top: 100px;

  img {
    margin: 50px;
  }

  span {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
