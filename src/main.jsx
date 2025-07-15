import ReactDOM from "react-dom/client"
import './index.css'
import './custom-bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx'

export default function Hello(){
  return(
    <App/>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello/>)