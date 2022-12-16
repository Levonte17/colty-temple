import barber2 from '../assets/barber2.png'
import cut3 from '../assets/cut3.png'

function Announcement(props) {
    return(
  <div className='left'>
  <h1 >
    Master Barber:
    <br/>
    BRENT ELLIS
  </h1>
<div className="homeimg">
  <img src={cut3} alt='home' className="homeimg1"/>
  <img src={barber2} alt='home' className="homeimg1"/>
</div>   
</div>   
    )
};

export default Announcement;