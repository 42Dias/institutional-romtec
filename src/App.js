import { GlobalStyle } from './ui'
import header from './assets/header.png'
import * as S from './App.styled'

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <S.Nav>
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
      <div></div>
    </>
  )
}

export default App
