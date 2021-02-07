import './scss/helpers/_variables.scss'
import './scss/views/container-component.scss'
import Routeur from "./routes/Routeur"
import Header from "./components/header"

export default function App() {
  return (
   <div className="container">
     <Routeur />
      {localStorage.getItem('player') ?
        <Header />
        : ''
      }
   </div>
  );
}
