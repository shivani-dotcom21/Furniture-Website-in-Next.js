import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Clock3,
  CreditCard,
  MapPin,
  PackageCheck,
  Truck,
} from "lucide-react";
import { formatCurrency } from "./orderData";

export default function OrderDetails({ order }) {
  return (
    <main className="min-h-[60vh] bg-[#faf9f6] px-4 py-10 font-outfit text-zinc-800 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/orders"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-[#a97959]"
        >
          <ArrowLeft size={17} />
          Back to all orders
        </Link>

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97959]">
              Order details
            </p>
            <h1 className="font-poppins text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Order {order.id}
            </h1>
            <p className="mt-2 text-sm text-zinc-500">Placed on {order.placedAt}</p>
          </div>
          <span
            className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-inset ${order.statusClass}`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {order.status}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-poppins text-lg font-semibold text-zinc-900">Your pieces</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    {order.items.length} {order.items.length === 1 ? "item" : "items"} in this order
                  </p>
                </div>
                <PackageCheck className="text-[#a97959]" size={22} />
              </div>
              <div className="divide-y divide-zinc-100">
                {order.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-4 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
                  >
                    <div
                      role="img"
                      aria-label={item.name}
                      style={{ backgroundImage: `url("${item.image}")` }}
                      className="h-24 w-24 shrink-0 rounded-xl bg-[#f3eee8] bg-cover bg-center"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-zinc-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-zinc-500">{item.variant}</p>
                      <p className="mt-2 text-sm text-zinc-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-zinc-900">{formatCurrency(item.price)}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-poppins text-lg font-semibold text-zinc-900">Order journey</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    {order.status === "Delivered"
                      ? "Your furniture has arrived."
                      : `Estimated delivery ${order.estimatedDelivery}`}
                  </p>
                </div>
                {order.status === "Delivered" ? (
                  <PackageCheck className="text-emerald-600" size={22} />
                ) : (
                  <Truck className="text-[#a97959]" size={22} />
                )}
              </div>
              <ol className="grid gap-5 sm:grid-cols-4">
                {order.timeline.map((step, index) => (
                  <li key={step.title} className="relative flex gap-3 sm:block">
                    {index < order.timeline.length - 1 && (
                      <span className="absolute left-[13px] top-7 h-[calc(100%+4px)] w-px bg-zinc-200 sm:left-7 sm:top-[13px] sm:h-px sm:w-[calc(100%-16px)]" />
                    )}
                    <span
                      className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                        step.complete
                          ? "bg-[#a97959] text-white"
                          : "border border-zinc-200 bg-white text-zinc-400"
                      }`}
                    >
                      {step.complete ? <Check size={14} /> : <Clock3 size={14} />}
                    </span>
                    <div className="sm:mt-3">
                      <p className="text-sm font-semibold text-zinc-800">{step.title}</p>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">{step.detail}</p>
                      <p className="mt-1 text-xs font-medium text-zinc-400">{step.date}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-poppins text-lg font-semibold text-zinc-900">Order summary</h2>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4 text-zinc-600">
                  <span>Subtotal</span>
                  <span>{formatCurrency(order.subtotal)}</span>
                </div>
                <div className="flex justify-between gap-4 text-zinc-600">
                  <span>Delivery</span>
                  <span>{order.shipping === 0 ? "Complimentary" : formatCurrency(order.shipping)}</span>
                </div>
                <div className="flex justify-between gap-4 text-zinc-600">
                  <span>Tax</span>
                  <span>{formatCurrency(order.tax)}</span>
                </div>
                <div className="border-t border-zinc-100 pt-4">
                  <div className="flex justify-between gap-4 font-semibold text-zinc-900">
                    <span>Total paid</span>
                    <span>{formatCurrency(order.total)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#faf9f6] p-4">
                <CreditCard className="shrink-0 text-[#a97959]" size={19} />
                <div>
                  <p className="text-xs text-zinc-500">Paid with</p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-800">{order.paymentMethod}</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#a97959]" size={20} />
                <h2 className="font-poppins text-lg font-semibold text-zinc-900">Delivery address</h2>
              </div>
              <div className="mt-4 text-sm leading-6 text-zinc-600">
                <p className="font-semibold text-zinc-900">{order.shippingAddress.name}</p>
                {order.shippingAddress.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="mt-2">{order.shippingAddress.phone}</p>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
