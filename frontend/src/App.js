import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import UserProfile from './components/UserProfile/UserProfile';
import Personal from './components/Personal/Personal';
import BookTrip from './components/BootTrip/BookTrip';
import TripDetails from './components/TripDetails/TripDetails';
import BookBus from './components/BookBus/BookBus';
import BookTrain from './components/BookTrain/BookTrain';
import BookFlight from './components/BookFlight/BookFlight';
import BookCab from './components/BookCab/BookCab';

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'signin',
          element:<SignIn/>
        },{
          path:'signup',
          element:<SignUp/>,
        },
        {
          path:'personal',
          element:<Personal/>
        },
        {
          path:'home',
          element:<Home/>
        },
        {
          path:'',
          element:<Navigate to="home"/>
        },{
          path:'user-profile',
          element:<UserProfile/>
        },
        {
          path:'booktrip',
          element:<BookTrip/>
        },
        {
          path:'tripdetails',
          element:<TripDetails/>,
          children:[
            {
              path:'bookbus',
              element:<BookBus/>
            },
            {
              path:'booktrain',
              element:<BookTrain/>
            },
            {
              path:'bookflight',
              element:<BookFlight/>
            },
            {
              path:'bookcab',
              element:<BookCab/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
