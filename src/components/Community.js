import defaultimg from '../assets/defaultimg.png';

function Community(props) {
    return(
<div className='left'>
  <br/>
  <h1 >
   OUR COMMUNITY
  </h1>
  <br/>
<div className='community'>
<img 
        className="avatarimg" 
        src={defaultimg} 
        alt="foot"
    />
<h2>
BISHOP
<br/>
Andrew Mole Sr.
</h2>
<br/>
</div>
<div className='community2'>
<img 
        className="avatarimg" 
        src={defaultimg} 
        alt="foot"
    />
<h2>
PASTOR
<br/>
Lawrence Larry
</h2>

</div>
</div>
    )
};

export default Community;