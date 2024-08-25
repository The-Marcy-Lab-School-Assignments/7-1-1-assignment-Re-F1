/* eslint-disable no-unused-vars */
import BotSpecsPage from './pages/BotSpecsPage'
import NotFoundPage from './pages/NotFoundPage'
import BotPage from './pages/BotsPage'
import './App.css'

// TODO: import Routes and Route
import {Routes, Route} from  'react-router-dom' // import route and routers 
const App = () => {

  // TODO: Render Routes with a Route for:
  // - BotPage when the URL matches "/"
  // - BotSpecsPage when the URL matches "/robots/:id"
  // - NotFoundPage when the URL doesn't match either of the above URLs

  return (
    <div className="App">
      <Routes>
        {/* displats the BotsPage component when the user is at the root URL
        What is a root url? --> a root url is the section between the :// */}
        <Route path='/' element={<BotPage/>} />


         {/* Automatically adding the id - dynamic parameter 
         lets you pass the id of the bot. A route parameter that allows you to pass the bot's ID to the BotsSpecPage where fetch and display the details of that specific ID*/}
        <Route path='/robots/:id' element={<BotSpecsPage/>} /> 

          {/* Catches any URL that does not match the above routes and siplays page not found show a 404 page */}
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
