import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import dataCollapse from '../data/collapse.json';



function About() {
  return (
    <section className="corps_home">
      <Banner montagne="about"/>
      <section className="accordion">
        {dataCollapse.map((text, id) =>{
          return(
          <div className='accordion-collapse-container'>
            <Collapse title={text.valeur} key={id} description={text.description}/>
          </div>)
        })}
      </section>
    </section>
  )
}

export default About