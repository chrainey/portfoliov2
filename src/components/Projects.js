import { Card, Col, Row, Container } from 'react-bootstrap';
import { BsLink45Deg, BsGithub } from 'react-icons/bs'

import projImg1 from "../assets/images/Project1image.png"
import projImg2 from "../assets/images/Project2image.png"
import projImg3 from "../assets/images/Project3image.png"
import projImg4 from "../assets/images/Project4image.png"


const projects = [
  {
    title: "Football Legends App",
    description: "For this project I built my own full-stack app using a Python Django API to serve my data from a Postgres database. The frontend was built using React. It has CRUD functionality with OnetoMany and ManytoMany relationships. Cloudinary was used to store all of the images. I created a football app exploring some of the greatest players and clubs in european football.",
    imgUrl: projImg4,
    link: 'https://footballs-greatest.herokuapp.com/',
    gitLink: 'https://github.com/chrainey/SEI-Project-4-GreatestPlayers',
    
  },
  {
    title: "Travel Destinations App",
    description: "For this project, in a team using GitHub, we built our own API and front end website as a Travel Database app. This included user and authentication features using JSL tokens. We also used AWS and Cloudinary to store images for the database. I was responsible for the look and styling off the app along with building many of the frontend components.",
    imgUrl: projImg3,
    link: 'https://sei65-destinations.netlify.app/',
    gitLink: 'https://github.com/chrainey/SEI-Project-3-Travel-Frontend',
  },
  {
    title: "Cocktail Recipe Database",
    description: "We built a React application that consumes and uses a public API. I used Insomnia to test out GET and POST API requests and this also taught me how to useState and useEffect within an application. Using API requests we created a slick CSS/SASS designed app that would bring up cocktails recipes by selecting various alcoholic ingredients.",
    imgUrl: projImg2,
    link: 'https://cocktail-library.netlify.app',
    gitLink: 'https://github.com/chrainey/SEI-Project-2-CocktailAPI',
  },
  {
    title: "Space Invaders Game",
    description: "For this project I built a Space Invaders JavaScript grid based computer game. Using pure JavaScript, without a HTML canvas, this was styled with CSS.",
    imgUrl: projImg1,
    link: 'https://chrainey.github.io/SEI-Project-1-SpaceInvaders/',
    gitLink: 'https://github.com/chrainey/SEI-Project-1-SpaceInvaders',
  },
];

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <Container >
        <h1 className='projects-title'>My Projects</h1>
        <Row className='gy-4'>
          {projects.map((projects, index) => (
            <Col sm='12' md='12' lg='6' >
              <Card className='h-100' key={index}>
                <Card.Img className='card-images' variant="top" src={projects.imgUrl} />
                <Card.Body>
                  <Card.Title>{projects.title}</Card.Title>
                  <Card.Text>
                    {projects.description}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href={projects.link}><BsLink45Deg size={30}/></Card.Link>
                  <Card.Link href={projects.gitLink}><BsGithub size={30}/></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects