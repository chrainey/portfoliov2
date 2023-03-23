import { Container, Row, Col } from 'react-bootstrap'
import me from '../assets/images/mevenice.jpeg'

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi, my name is Chris`}</h1>
            <span className="wrap">I have recently trained to become a Junior Software Engineer</span>
            <p>I have 20 years experience in the customer service sector which, until recently, took
              me as far as living in Italy. It was a gorgeous place to work!! Unfortunately, the combination of Brexit and Covid meant I had to return to
              the UK. 
              So I decided to take a immersive full-stack software engineering course inspired by
              my interest in technology and the internet.  I am looking for somewhere that I can take my recent
              education and build on it, learning from others but also bringing my experience of
              working in a team and with clients.</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className='my-image' src={me} alt="Header Img" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h4>Please explore my site. There's a bit more about me, the projects I have completed on my course and some of my interests</h4>
          </Col>
        </Row>
      </Container>

    </section>
  )
} 

export default Banner