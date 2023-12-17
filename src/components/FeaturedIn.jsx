import futureImg from '../assets/logos/future-horizon.png'
import lifeImg from '../assets/logos/life-pulse.png'
import nexusImg from '../assets/logos/nexus-lite.png'
import nourishImg from '../assets/logos/nourish-foods.png'
export default function FeaturedIn(){
    return <section className="container" id="featured">
    <h2 className="heading-featured-in">As featured in</h2>
    <div className="logos grid text-center">
      <img src={futureImg} alt="future horizon logo"/>
      <img src={lifeImg} alt="life pulse logo"/>
      <img src={nexusImg} alt="nexus lite logo"/>
      <img src={nourishImg} alt="nourish foods logo"/>
    </div>
  </section>
}