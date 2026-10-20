export const orders = [
  {
    id: "FH-2026-0184",
    placedAt: "October 12, 2026",
    status: "Delivered",
    statusClass: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    estimatedDelivery: "October 16, 2026",
    items: [
      {
        name: "Luna accent chair",
        variant: "Natural oak · Ivory boucle",
        quantity: 1,
        price: 18499,
        image:
          "https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=320&q=85",
      },
      {
        name: "Arc floor lamp",
        variant: "Brushed brass · Warm white",
        quantity: 1,
        price: 7499,
        image:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=320&q=85",
      },
    ],
    subtotal: 25998,
    shipping: 0,
    tax: 4680,
    total: 30678,
    paymentMethod: "Visa ending in 4242",
    shippingAddress: {
      name: "Aarav Mehta",
      lines: ["18, Palm Grove Apartments", "Bandra West, Mumbai 400050", "Maharashtra, India"],
      phone: "+91 98765 43210",
    },
    timeline: [
      { title: "Order placed", detail: "We received your order.", date: "Oct 12", complete: true },
      { title: "Packed with care", detail: "Your pieces are ready to go.", date: "Oct 13", complete: true },
      { title: "Out for delivery", detail: "Your order is on its way.", date: "Oct 15", complete: true },
      { title: "Delivered", detail: "Delivered to your doorstep.", date: "Oct 16", complete: true },
    ],
  },
  {
    id: "FH-2026-0172",
    placedAt: "October 8, 2026",
    status: "In transit",
    statusClass: "bg-amber-50 text-amber-800 ring-amber-600/20",
    estimatedDelivery: "October 20, 2026",
    items: [
      {
        name: "Haven 3-seater sofa",
        variant: "Sand linen · Left chaise",
        quantity: 1,
        price: 68999,
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=320&q=85",
      },
    ],
    subtotal: 68999,
    shipping: 0,
    tax: 12420,
    total: 81419,
    paymentMethod: "Mastercard ending in 1088",
    shippingAddress: {
      name: "Aarav Mehta",
      lines: ["18, Palm Grove Apartments", "Bandra West, Mumbai 400050", "Maharashtra, India"],
      phone: "+91 98765 43210",
    },
    timeline: [
      { title: "Order placed", detail: "We received your order.", date: "Oct 8", complete: true },
      { title: "Packed with care", detail: "Your pieces are ready to go.", date: "Oct 10", complete: true },
      { title: "Out for delivery", detail: "Your order is on its way.", date: "Oct 17", complete: true },
      { title: "Delivered", detail: "Estimated delivery to your home.", date: "Oct 20", complete: false },
    ],
  },
];

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
