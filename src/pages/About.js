import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import dataCollapse from '../data/collapse.json';



function About() {
  return (
    <section className="corps_home">
      <Banner montagne="about"/>
      <article className="accordion">
        {dataCollapse.map((text, id) =>{
          return(
          <div key={id} className='accordion-collapse-container'>
            <Collapse title={text.valeur}  description={text.description}/>
          </div>)
        })}
      </article>
    </section>
  )
}

export default About