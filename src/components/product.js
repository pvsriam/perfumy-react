import one from '../assets/images/one.jpg'
import two from '../assets/images/two.jpg'
import three from '../assets/images/three.jpg'

function Product()
{
  return(
    <>
    <div className="products">
    <div className='box'>
      <img src={one} />
      <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
    </div>

        <div className='box'>
          <img src={two} alt="" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
  
      </div>
          <div className='box'>
            <img src={three} alt="" />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        </div>
        </>
  )
}
export default Product