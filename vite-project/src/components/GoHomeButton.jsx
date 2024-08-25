// TODO: 
// - Make the button navigate the user back to the home page
// import BotPage from "../pages/BotsPage";
import { Link } from "react-router-dom";

const GoHomeButton = () => {
  return (
    <Link to='/'>
    <button className="ui button fluid">
      Go Home
    </button>
    </Link>
  )
}

export default GoHomeButton;


// When clicked takes back to the home page 