import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

export default function MenuList() {
  const [isLoading, setIsLoading] = useState(false);
  const [coffeeData, setCoffeeData] = useState([]);
  const [error, setError] = useState("");
  let menuListData=[]
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch("https://fake-coffee-api.vercel.app/api");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const resData = await response.json();
        setCoffeeData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    }
    getData();
  }, []);

  let content;

  if (isLoading) {
    content = (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    content = <h4>Something went wrong...</h4>;
  }

  // console.log(coffeeData);
  if(coffeeData.length>0){
    menuListData=  coffeeData.map((item)=>{
      return {
        id:item.id,
        image:item.image_url,
        title:item.name,
        price:item.price
      }
    })
  }
  return (
    <main>
      <section id="menulist">
        <h2>Menu List</h2>

        <div className="container">
          <div className="row row-cols-3">
            {coffeeData.length==0 && content}
            {coffeeData.length>0 &&
              <MenuCard
                menuList={menuListData}   
              />
            }
          </div>
        </div>
      </section>
    </main>
  );
}
