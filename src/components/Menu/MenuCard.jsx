import { useDispatch } from "react-redux";
import { Link ,useNavigation} from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
export default function MenuCard({menuList}) {
    const dispatch=useDispatch();

    function addToCartHandler(id){
        const [data]=menuList.filter(item=>item.id===+id)
        // console.log(data)
        dispatch(cartActions.addItemToCart({
            id:data.id,
            image:data.image,
            price:data.price,
            title:data.title
        }))
    }

    const navigation=useNavigation();
    if(navigation.state==='loading'){
        return <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
  return (
    <>
      {menuList.map((item)=><div className="card text-center menu-list-card" key={item.id}>
        <img src={item.image} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            $&nbsp;{item.price}
          </p>
         <Link to={`${item.id}`} className="card-link">Click to see the details</Link>
          <button  className="btn card-btn" onClick={()=>addToCartHandler(item.id)}>
            Add To Cart
          </button>
        </div>
      </div>)}
    </>
  );
}
