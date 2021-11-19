import { FiSettings } from 'react-icons/fi'
import { GlobalStyle } from './ui'
import header from './assets/header.png'
import * as S from './App.styled'
import logo from './assets/logo.svg'
import phone from './assets/phone.png'

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <S.Nav>
          <img src={logo} alt='logo' />
          <ul>
            <li>
              <a href=''>lorem</a>
            </li>
            <li>
              <a href=''>lorem</a>
            </li>
            <li>
              <a href=''>lorem</a>
            </li>
            <li>
              <a href=''>lorem</a>
            </li>
          </ul>
        </S.Nav>
      </header>
      <S.ContentHeader>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>
          Morbi vitae lorem nisl. Sed lobortis non sapien sit amet consectetur.
          Suspendisse libero magna, lobortis ac neque non, porttitor ornare
          quam. Ut non pretium leo.
        </p>
        <a href='#'>Saiba mais</a>
        <img src={header} alt='header' />
      </S.ContentHeader>
      <S.Division>
        <S.ContainerDivision>
          <S.ContentDivision>
            <span>01</span>
            <p>
              Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
              consectetur.
            </p>

            <span>02</span>
            <p>
              Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
              consectetur.
            </p>

            <span>03</span>
            <p>
              Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
              consectetur.
            </p>
          </S.ContentDivision>
        </S.ContainerDivision>
      </S.Division>
      <S.ContainerSpecifications>
        <S.ContentSpecifications>
          <FiSettings size={24} />
          <strong>Morbi vitae lorem nisl.</strong>
          <p>
            Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
            consectetur.
          </p>
        </S.ContentSpecifications>

        <S.ContentSpecifications>
          <FiSettings size={24} />
          <strong>Morbi vitae lorem nisl.</strong>
          <p>
            Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
            consectetur.
          </p>
        </S.ContentSpecifications>

        <S.ContentSpecifications>
          <FiSettings size={24} />
          <strong>Morbi vitae lorem nisl.</strong>
          <p>
            Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
            consectetur.
          </p>
        </S.ContentSpecifications>
      </S.ContainerSpecifications>
      <S.ContainerPhone>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <img src={phone} alt='phone' />
        <S.ContainerMain>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
            consectetur. Suspendisse libero magna, lobortis ac neque non,
            porttitor ornare quam. Ut non pretium leo.
          </p>
          <a href='#'>Saiba mais</a>
        </S.ContainerMain>
      </S.ContainerPhone>
      <S.Footer>
        <img src={logo} alt='logo' />
        <span>Copyright 2017. Todos os direitos reservados.</span>
      </S.Footer>
    </>
  )
}

export default App
