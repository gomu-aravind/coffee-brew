import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValidateForm from "../../util/helper";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

export default function Checkout() {
  const inputValues = useRef({});
  const [errors, setErrors] = useState({});
  const [confirm, setConfirm] = useState(false);
  
  const navigate = useNavigate();

  const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch=useDispatch()

  useEffect(() => {
    if (confirm) {
      setTimeout(() => {
        setConfirm(false)
        navigate("/");
      }, 4000);
    }
  }, [confirm]);

  function handleFormData(event) {
    event.preventDefault();
    const formValues = {};

    Object.keys(inputValues.current).forEach((key) => {
      formValues[key] = inputValues.current[key].value;
    });

    const { valid, newErrors } = ValidateForm(formValues);

    if (valid) {
      dispatch(cartActions.clearCart())
      setConfirm(true);
      setErrors({});
      Object.keys(inputValues.current).forEach((key) => {
        inputValues.current[key].value = "";
      });
    } else {
      setErrors(newErrors);
    }
  }


  if(totalAmount===0 && !confirm){
    return <main>
        <section id="checkout">
          <div className="card">
            <div
              className="alert alert-danger"
              role="alert"
              style={{ margin: "0" }}
            >
              <h5 style={{textAlign:'center'}}>Your Cart is empty. Please purchase some products to proceed to checkout</h5>
            </div>
          </div>
        </section>
      </main>
  }

  if (confirm) {
    return (
      <main>
        <section id="checkout">
          <div className="card">
            <div
              className="alert alert-success"
              role="alert"
              style={{ margin: "0" }}
            >
              <h4>Your Order is placed successfully.</h4>
              <h5>
                We will deliver within 2-3 days.Thank you for shopping in
                Coffee-brew
              </h5>
              <p>Redirecting to Home Page...</p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section id="checkout">
        <div className="container">
          <h3 className="text-center">Checkout</h3>
          <div className="card">
            <form className="row g-3" onSubmit={handleFormData} noValidate>
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label fw-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  ref={(el) => (inputValues.current.firstName = el)}
                />
                {errors.firstName !== "" && (
                  <p className="text-danger fw-medium">{errors.firstName}</p>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label fw-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  ref={(el) => (inputValues.current.lastName = el)}
                />
                {errors.lastName !== "" && (
                  <p className="text-danger fw-medium">{errors.lastName}</p>
                )}
              </div>
              <div className="col-md-8">
                <label htmlFor="email" className="form-label fw-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  ref={(el) => (inputValues.current.email = el)}
                />
                {errors.email !== "" && (
                  <p className="text-danger fw-medium">{errors.email}</p>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label fw-medium">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  ref={(el) => (inputValues.current.address = el)}
                />
                {errors.address !== "" && (
                  <p className="text-danger fw-medium">{errors.address}</p>
                )}
              </div>
              <div className="col-md-5">
                <label htmlFor="city" className="form-label fw-medium">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  ref={(el) => (inputValues.current.city = el)}
                />
                {errors.city !== "" && (
                  <p className="text-danger fw-medium">{errors.city}</p>
                )}
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label fw-medium">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  ref={(el) => (inputValues.current.state = el)}
                />
                {errors.state !== "" && (
                  <p className="text-danger fw-medium">{errors.state}</p>
                )}
              </div>
              <div className="col-md-4">
                <label htmlFor="pincode" className="form-label fw-medium">
                  PinCode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  ref={(el) => (inputValues.current.pincode = el)}
                />
                {errors.pincode !== "" && (
                  <p className="text-danger fw-medium">{errors.pincode}</p>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="price" className="form-label fw-medium">
                  Price
                </label>

                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext fw-medium"
                  id="price"
                  name="price"
                  defaultValue={`$ ${totalAmount.toFixed(2)}`}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
