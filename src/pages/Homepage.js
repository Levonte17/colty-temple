///////// COMPONENTS //////////
import Contact from '../components/Contact';
import Community from '../components/Community';
import Hour from '../components/Hour';
import Dash from '../components/Dash';

function Homepage({user}) {
    return(
      <div>
<Dash />
<Hour />
<Contact />
<Community />
      </div>
    )
};

export default Homepage;