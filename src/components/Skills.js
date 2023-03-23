import bootstrp from '../assets/images/bootstrap.png'
import CSS3 from '../assets/images/css3.png'
import Django from '../assets/images/django.jpeg'
import Express from '../assets/images/express.png'
import Github from '../assets/images/github.jpeg'
import Heroku from '../assets/images/heroku.webp'
import HTML5 from '../assets/images/html.webp'
import Insomnia from '../assets/images/insomnia.png'
import JavaScript from '../assets/images/JavaScript-logo.png'
import MongoDB from '../assets/images/mongodb.png'
import Mongoose from '../assets/images/mongoose.png'
import Netlify from '../assets/images/netlify.png'
import Nodejs from '../assets/images/nodejs.png'
import Npm from '../assets/images/npm.png'
import PostgreSQL from '../assets/images/postgresql.png'
import Python from '../assets/images/python.webp'
import Reactpic from '../assets/images/react.png'
import SASS from '../assets/images/sass.png'
import VScode from '../assets/images/vscode.png'
import Yarn from '../assets/images/yarn.png'

import { Container } from 'react-bootstrap'


const icons = [
  {
    name: 'Bootstrap',
    imageSrc: bootstrp,
  },
  {
    name: 'CSS3',
    imageSrc: CSS3,
  },
  {
    name: 'Django',
    imageSrc: Django,
  },
  {
    name: 'Express',
    imageSrc: Express,
  },
  {
    name: 'Github',
    imageSrc: Github,
  },
  {
    name: 'Heroku',
    imageSrc: Heroku,
  },
  {
    name: 'HTML5',
    imageSrc: HTML5,
  },
  {
    name: 'Insomnia',
    imageSrc: Insomnia,
  },
  {
    name: 'JavaScript',
    imageSrc: JavaScript,
  },
  {
    name: 'MongoDB',
    imageSrc: MongoDB,
  },
  {
    name: 'Mongoose',
    imageSrc: Mongoose,
  },
  {
    name: 'Netlify',
    imageSrc: Netlify,
  },
  {
    name: 'NodeJS',
    imageSrc: Nodejs,
  },
  {
    name: 'NPM',
    imageSrc: Npm,
  },
  {
    name: 'PostgreSQL',
    imageSrc: PostgreSQL,
  },
  {
    name: 'Python',
    imageSrc: Python,
  },
  {
    name: 'React',
    imageSrc: Reactpic,
  },
  {
    name: 'SASS',
    imageSrc: SASS,
  },
  {
    name: 'VSCode',
    imageSrc: VScode,
  },
  {
    name: 'Yarn',
    imageSrc: Yarn,
  }
]

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <h1 className="skills-title">Technologies and Skills</h1>
        <div className="icons">
          {icons.map((icon, index) => (
            <div className="icon-div" key={index}>
              <img className="icon-image"  src={icon.imageSrc} alt={`${icon.name} icon`} title={icon.name}></img>
              <p className="tag-title">{icon.name}</p>
            </div>
          ))}
            
        </div>
      </Container>
      
    </section>
  )
}

export default Skills