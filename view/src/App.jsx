import Heading from "./components/Heading"
import ShortenResponse from "./components/ShortenResponse"
import URLinput from "./components/URLinput"

function App() {

  return (
    <div className="container mx-auto mt-24 p-4">
      <Heading />
      <URLinput />
      <ShortenResponse/>
    </div>
  )
}

export default App
