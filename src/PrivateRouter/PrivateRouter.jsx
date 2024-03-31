import { useContext } from "react"
import { AuthContexts } from "../AuthContext/AuthContext"
import { Navigate } from "react-router-dom"
import PropType from "prop-types"
const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContexts);
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }

    return <Navigate to="/login"></Navigate>

}

PrivateRouter.propTypes = {
    children : PropType.node
}
export default PrivateRouter