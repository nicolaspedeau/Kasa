import Banner from '../components/Banner';
import Card from '../components/Card';

function Home() {
    return (
      <div>
        <Banner/>
        <div className='container'>
          <Card/>
        </div>
      </div>
    )
  }
  
  export default Home