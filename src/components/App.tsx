import { Container } from './Container'
import { Header } from './Header'
import { Wrapper } from './Wrapper'
function App() {
  return (
    <Wrapper>
      <Container className={'bg-rocket-blog-purple'}>
        <Header />
      </Container>
    </Wrapper>
  )
}

export default App
