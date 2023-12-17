import { Suspense } from "react";
import { Await, defer, json, useLoaderData} from "react-router-dom";
import MenuDetailsCard from "../components/Menu/MenuDetailsCard";

export default function MenuDetails() {
  const { events } = useLoaderData()

  let fallbackContent = (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-grow menu-details-spinner text-info"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={events}>
        {(menuDetails) => <MenuDetailsCard details={menuDetails} />}
      </Await>
    </Suspense>
  );
}

async function loadedEvents(id) {
  if (!id) {
    throw json( {message:"Invalid Id"},{ status: 404 });
  }
  const response = await fetch("https://fake-coffee-api.vercel.app/api/" + id);
  if (!response.ok) {
    throw json( {message:"Failed to fetch the data"},{ status: 404 });
  }
  const resData = await response.json();
  if(resData.length===0){
    throw json({message:"No data found"},{status:404})
  }
  return resData;
}

export async function loader({request,params}) {
  const id=+params.coffeeId
  return defer({
    events:await loadedEvents(id),
  });
}
