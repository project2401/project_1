//объявление router
import {BrowserRouter, Route, Link} from "react-router-dom"
import createBrowserHistory from 'history/createBrowserHistory'


const Home = () =>{
    <div>
        <h2>
            Home
        </h2>
    </div>
}

const About = () =>{
    <div>
        <h2>
            About
        </h2>
    </div>
}

const Contact = () =>{
    <div>
        <h2>
            Contact
        </h2>
    </div>
}

class Navigation extends React.Component{
    render(){
        return(
            <BrowserRouter history = {createBrowserHistory}>
                <div>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/About">About</Link></p>
                    <p><Link to="/Contact">Contact</Link></p>
                </div>
                
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
            </BrowserRouter>
        )
    }
}
export default Navigation