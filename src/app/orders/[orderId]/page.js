import { notFound } from "next/navigation";
import OrderDetails from "../../Components/orders/OrderDetails";
import { orders } from "../../Components/orders/orderData";

export async function generateStaticParams() {
  return orders.map((order) => ({ orderId: order.id }));
}

export async function generateMetadata({ params }) {
  const { orderId } = await params;
  const order = orders.find((entry) => entry.id === orderId);

  return {
    title: order ? `Order ${order.id} | Forma House` : "Order not found | Forma House",
  };
}

export default async function OrderDetailsPage({ params }) {
  const { orderId } = await params;
  const order = orders.find((entry) => entry.id === orderId);

  if (!order) {
    notFound();
  }

  return <OrderDetails order={order} />;
}
