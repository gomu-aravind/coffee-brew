import { useSelector } from "react-redux";
import CartList from "./CartList";
import { Link } from "react-router-dom";
export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const { totalQuantity } = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // console.log(items)
  return (
    <main>
      <section id="cart" className="pt-5 pb-5">
        <div className="container ">
          <div className="row w-100">
            <div className="col-lg-12 col-md-12 col-12">
              <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
              <p className="mb-5 text-center">
                <i className="text-danger fw-bold">{totalQuantity}</i>
                &nbsp;&nbsp; items in your cart
              </p>
              {totalQuantity===0 && <h6 className="text-center">Please purchase a product from our menu</h6>}
             {totalQuantity>0 && <table
                id="shoppingCart"
                className="table table-condensed table-dark table-responsive"
              >
                <thead>
                  <tr>
                    <th style={{ width: "50%" }}>Product</th>
                    <th style={{ width: "15%" }}>Price</th>
                    <th style={{ width: "10%" }}>Quantity</th>
                    <th style={{ width: "15%" }}>TotalPrice</th>
                    <th style={{ width: "16%" }}></th>
                  </tr>
                </thead>
                <tbody className="table-light">
                  {items.map((cartItem) => (
                    <CartList key={cartItem.id} cart={cartItem} />
                  ))}
                </tbody>
              </table>}
            </div>
          </div>
          {totalQuantity>0 && <div className="row w-100 bottom-row">
              <div className="col col-3">
                <Link to='/coffee'>
                  <i className="fas fa-arrow-left mr-2"></i>&larr;&nbsp;Continue Shopping
                </Link>
              </div>
            <div className="col col-3">
            <div className="float-right text-right">
              <h4>Total:</h4>
              <h1>${totalAmount.toFixed(2)}</h1>
            </div>
              <div className="">
                <Link to="/checkout" className="btn btn-primary">
                  Checkout
                </Link>
              </div>
            </div>
          </div>}
        </div>
      </section>
    </main>
  );
}
