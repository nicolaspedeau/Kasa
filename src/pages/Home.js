import Banner from '../components/Banner';
import Card from '../components/Card';

function Home() {
    return (
      <section className='corps_home'>
        <Banner banniere="home"/>
        <div className='cards'>
          <Card/>
        </div>
      </section>
    )
  }
  
  export default Home