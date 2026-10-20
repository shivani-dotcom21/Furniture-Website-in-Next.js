import BreadCrums from "../Components/Common/BreadCrums/BreadCrums";
import CheckOut from "../Components/checkout/CheckOut";

export const metadata = {
  title: "Checkout",
  description: "Review your furniture order and enter your shipping details.",
};

export default function CheckoutPage() {
  return (
    <>
      <BreadCrums title="Checkout" />
      <CheckOut />
    </>
  );
}
