import { autocompleteClasses } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { clearProducts } from "../redux/cartRedux";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  useEffect(() => {
    if (orderId) {
      dispatch(clearProducts());
    }
  }, [orderId]);

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <main
      style={{
        height: "100vh",
        width: "80vw",
        margin: "auto",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}. You will receive email confirmation shortly. Thank you for shopping with Cut&Sew.`
        : `Order unsuccessful. Please ensure you are logged in to place an order. If the problem persists please contact the sales department. Thank you for shopping with Cut&Sew.`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={handleClick}>
        Go to Homepage
      </button>
    </main>
  );
};

export default Success;
