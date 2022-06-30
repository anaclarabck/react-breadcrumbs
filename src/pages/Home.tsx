import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <Link to="/learn"> Cursos </Link>
      </nav>
    </>
  )
}

export default Home
