
import Header from "./components/Header"
import User from "./components/User"
import MyFirstComponent from "./components/MyFirstComponent"
import Footer from "./components/Footer"
import MovieList from "./components/MovieList"

function App() {
  return (
    <>
      <Header title="hello world" />

      <User firstName="Alice" surname="Smith" age={30}  />
      <User firstName="Bob" surname="Brown" age={40} />
      <User firstName="Charlie" surname="Sheen" age={50} />

      <MovieList />

      <MyFirstComponent />

      <Footer>
        <p>Dev Blinders, 2025</p>
      </Footer>

    </>
  )
}

export default App
