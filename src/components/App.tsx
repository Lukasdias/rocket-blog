import { Container } from './Container'
import { FirstSection } from './FirstSection'
import { Header } from './Header'
import { Wrapper } from './Wrapper'
import { SecondSection } from './SecondSection'

function App() {
  return (
    <Wrapper>
      <Container
        className={
          'bg-rocket-blog-purple border-b-4 border-b-rocket-blog-green px-8'
        }
      >
        <Header />
        <FirstSection />
      </Container>
      <Container className={'py-5'}>
        <SecondSection />
      </Container>
    </Wrapper>
  )
}

export default App
