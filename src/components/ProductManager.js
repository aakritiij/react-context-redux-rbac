import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ProductList from "./ProductList";

export default function ProductManager() {
  const { isLoggedIn, role } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <p>Please login first</p>;
  }

  return (
    <>
      <h3>Product List</h3>
      <p>Role: {role.toUpperCase()}</p>

      <ProductList role={role} />
    </>
  );
}
