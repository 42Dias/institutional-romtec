import { GlobalStyle } from './ui'
import logo from './assets/logo.svg'
import header from './assets/header.png'
import * as S from './App.styled'

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <img src={logo} alt='logo' />
        <nav>
          <ul>
            <S.List>
              <a href=''>lorem</a>
            </S.List>
            <S.List>
              <a href=''>lorem</a>
            </S.List>
            <S.List>
              <a href=''>lorem</a>
            </S.List>
            <S.List>
              <a href=''>lorem</a>
            </S.List>
          </ul>
        </nav>
      </header>
      <div>
        <img src={header} alt='logo' />
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>
          Morbi vitae lorem nisl. Sed lobortis non sapien sit amet consectetur.
          Suspendisse libero magna, lobortis ac neque non, porttitor ornare
          quam. Ut non pretium leo.
        </p>
        <a href='#'>Saiba mais</a>
      </div>
      <footer>Lorem</footer>
    </>
  )
}

export default App
