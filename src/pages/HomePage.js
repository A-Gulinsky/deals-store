import { Deals } from "components/Deals/Deals"
import { Container } from "../components/SharedComponents/Container/Container"

const Home = () => {
  return (
    <section>
      <Container>
        <Deals />
        {/* <Shop /> */}
      </Container>
    </section>
  )
}

export default Home