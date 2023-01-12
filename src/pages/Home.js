import Banner from '../components/Banner';
import Card from '../components/Card';

function Home() {
    return (
      <section className='corps_home'>
        <Banner banniere="home"/>
        <section className='card'>
          <Card/>
        </section>
      </section>
    )
  }
  
  export default Home