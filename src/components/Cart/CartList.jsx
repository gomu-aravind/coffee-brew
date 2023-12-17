import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
export default function CartList({ cart }) {
    const dispatch=useDispatch()

    function addHandler(){
        dispatch(cartActions.addItemToCart({
            id:cart.id,
            title:cart.title,
            price:cart.price,
            image:cart.image
        }))
    }


    function removeHandler(){
        dispatch(cartActions.removeItemFromCart(cart.id))
    }

    function deleteItem(id){
      dispatch(cartActions.deleteItemsInCart(id))
    }

  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              src={cart.image}
              alt=""
              className="img-fluid d-none d-md-block rounded mb-2 shadow "
            />
          </div>
          <div className="col-md-5 text-left mt-sm-2">
            <h4>{cart.title}</h4>
          </div>
        </div>
      </td>
      <td data-th="Price"><h6>${cart.price.toFixed(2)}</h6></td>
      <td data-th="Quantity">
        <div className="button-group">
          <button className="btn" onClick={removeHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </button>
          <h6>{cart.quantity}</h6>
          <button className="btn" onClick={addHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </div>
      </td>
      <td data-th="TotalPrice"><h6>${cart.totalPrice.toFixed(2)}</h6></td>

      <td className="actions" data-th="">
        <div className="text-right">
          <button className="btn" onClick={()=>deleteItem(cart.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
