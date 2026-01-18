import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../redux/productsSlice";

export default function ProductList({ role }) {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const isAdmin = role === "admin";

  return (
    <>
      {isAdmin && (
        <button
          onClick={() =>
            dispatch(
              addProduct({
                id: Date.now(),
                name: "New Product"
              })
            )
          }
        >
          Add Product
        </button>
      )}

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name}

            {isAdmin && (
              <button
                onClick={() => dispatch(deleteProduct(p.id))}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      {!isAdmin && (
        <p style={{ color: "gray" }}>
          View-only access. Login as admin to manage products.
        </p>
      )}
    </>
  );
}
