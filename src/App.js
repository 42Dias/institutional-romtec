import { FiSettings } from 'react-icons/fi'
import { GlobalStyle } from './ui'
import * as S from './App.styled'
import logo from './assets/logo.svg'
import phone from './assets/app.png'
import web from './assets/desktop.png'

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <header>
          <S.Nav>
            <img src={logo} alt='logo' />
          </S.Nav>

          <S.BtnLogin>
            <a href='/login'>Entrar</a>
          </S.BtnLogin>
        </header>
      </S.Container>
      <S.ContentHeader>
        <S.Container>
          <S.ContentHome>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>
              Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
              consectetur. Suspendisse libero magna, lobortis ac neque non,
              porttitor ornare quam. Ut non pretium leo.
            </p>
            <a href='#'>Saiba mais</a>
          </S.ContentHome>
        </S.Container>
      </S.ContentHeader>

      <S.Container>
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
      </S.Container>

      <S.Container>
        <S.ContainerSpecifications>
          <S.ContentSpecifications>
            <FiSettings size={60} />
            <div>
              <strong>Morbi vitae lorem nisl.</strong>
              <p>
                Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
                consectetur.
              </p>
            </div>
          </S.ContentSpecifications>

          <S.ContentSpecifications>
            <FiSettings size={60} />
            <div>
              <strong>Morbi vitae lorem nisl.</strong>
              <p>
                Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
                consectetur.
              </p>
            </div>
          </S.ContentSpecifications>

          <S.ContentSpecifications>
            <FiSettings size={60} />
            <div>
              <strong>Morbi vitae lorem nisl.</strong>
              <p>
                Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
                consectetur.
              </p>
            </div>
          </S.ContentSpecifications>
        </S.ContainerSpecifications>
      </S.Container>

      <S.Container>
        <S.ContainerPhone>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <S.ContainerMain>
            <img src={phone} alt='phone' />
            <div className='contentMain'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p>
                Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
                consectetur. Suspendisse libero magna, lobortis ac neque non,
                porttitor ornare quam. Ut non pretium leo.
              </p>
              <a href='#'>Saiba mais</a>
            </div>
          </S.ContainerMain>

          <S.ContainerMain>
            <div className='contentMain'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p>
                Morbi vitae lorem nisl. Sed lobortis non sapien sit amet
                consectetur. Suspendisse libero magna, lobortis ac neque non,
                porttitor ornare quam. Ut non pretium leo.
              </p>
              <a href='#'>Saiba mais</a>
            </div>
            <img src={web} alt='web' />
          </S.ContainerMain>
        </S.ContainerPhone>
      </S.Container>

      <S.Footer>
        <img src={logo} alt='logo' />
        <span>Copyright 2017. Todos os direitos reservados.</span>
      </S.Footer>
    </>
  )
}

export default App
