import { useContext } from "react"
import { AuthContexts } from "../AuthContext/AuthContext"

const Home = () => {
    const info = useContext(AuthContexts);
  return (
    <div>Home : {info.name}</div>
  )
}

export default Home