import { useNavigate } from "react-router-dom";
import "./home.css"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main">
        <div className="travel">
        <span>Travel App</span>
      </div>
      <img  className="homeimg"  src="Traveller 1.png"  alt="travel" onClick={() => navigate('/signup')}/>
    
    </div>
  );
}

export default Home;
