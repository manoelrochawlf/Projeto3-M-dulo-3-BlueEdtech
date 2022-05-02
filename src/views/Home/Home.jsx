import './Home.css';
import RolexList from 'components/RolexList/RolexList';
import Navbar from 'components/Navbar/Navbar';

function Home() {
  return (
    <div className="Home">
      <Navbar />      
      <div className="Home__container">
        <RolexList />
      </div>
    </div>
    
  );
}
  
  export default Home;