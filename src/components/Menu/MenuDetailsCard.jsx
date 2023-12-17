import { Link } from "react-router-dom";

export default function MenuDetailsCard({ details }) {
  const menu = details[0];
  // console.log(menu);

  return (
    <main>
      <section id="menudetails">
        <h2>Menu Details</h2>
        <div className="link-to-menu">
          <Link to={-1}>&larr;Back to Menu</Link>
        </div>
        <div className="row">
          <div className="card">
            <div className="col col-6">
              <img
                src={menu.image_url}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col col-6">
              <div className="card-body">
                <h4 className="card-title">{menu.name}</h4>
                <ul className="info-container">
                  <li>
                    <h6>Description:</h6>
                    <p>{menu.description}</p>
                  </li>
                  <li>
                    <h6>Weight:</h6>
                    <span>{menu.weight}</span>
                  </li>
                  <li>
                    <h6>Region:</h6>
                    <span>{menu.region}</span>
                  </li>
                  <li>
                    <h6>Roast Level:</h6>
                    <span>{menu.roast_level}</span>
                  </li>
                  <li>
                    <h6>Flavor Profile:</h6>
                    <span>{menu.flavor_profile}</span>
                  </li>
                  <li>
                    <h6>Price:</h6>
                    <span>$&nbsp;{menu.price}</span>
                  </li>
                  <li>
                    <h6>Grind Options:</h6>
                    <p>
                      {menu.grind_option.map((item) => (
                        <span key={item}>{item},&nbsp;</span>
                      ))}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
