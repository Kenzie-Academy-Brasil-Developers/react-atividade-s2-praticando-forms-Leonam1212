import {Switch, Route} from "react-router-dom"
import PersonCard from "../pages/PersonCard"
import Form from "../pages/Form"
import {useState} from "react"

const Routes = () => {
const [user, setUser] = useState({})


return (
    <>
        <Switch>
            <Route exact path = "/">
                <Form setUser = {setUser}/>
            </Route>

            <Route path = "/person">
                <PersonCard state = {user}/>
            </Route>
        </Switch>
    </>

)
}

export default Routes