import Link from "next/link";
import { ArrowRight, Package, ShoppingBag } from "lucide-react";
import { formatCurrency, orders } from "./orderData";

export default function Orders() {
  return (
    <main className="min-h-[60vh] bg-[#faf9f6] px-4 py-10 font-outfit text-zinc-800 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97959]">
              Your account
            </p>
            <h1 className="font-poppins text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              My orders
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Keep track of the pieces making their way home.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-[#a97959] hover:text-[#a97959]"
          >
            <ShoppingBag size={17} />
            Continue shopping
          </Link>
        </div>

        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[#eadfd4] bg-[#f5efe8] p-4 sm:p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#a97959]">
            <Package size={21} />
          </span>
          <div>
            <p className="font-medium text-zinc-900">Thoughtfully made, on its way.</p>
            <p className="mt-0.5 text-sm text-zinc-600">
              We&apos;ll keep your order updates right here.
            </p>
          </div>
        </div>

        <section className="space-y-4" aria-label="Your orders">
          {orders.map((order) => (
            <article
              key={order.id}
              className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-4 border-b border-zinc-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-400">Order number</p>
                    <p className="mt-1 font-semibold text-zinc-900">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-400">Placed on</p>
                    <p className="mt-1 font-medium text-zinc-700">{order.placedAt}</p>
                  </div>
                </div>
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${order.statusClass}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {order.status}
                </span>
              </div>

              <div className="flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <div className="flex shrink-0 -space-x-3">
                    {order.items.slice(0, 2).map((item) => (
                      <div
                        key={item.name}
                        role="img"
                        aria-label={item.name}
                        style={{ backgroundImage: `url("${item.image}")` }}
                        className="h-16 w-16 rounded-xl border-2 border-white bg-[#f3eee8] bg-cover bg-center"
                      />
                    ))}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-zinc-900">
                      {order.items.map((item) => item.name).join(", ")}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      {order.items.reduce((count, item) => count + item.quantity, 0)}{" "}
                      {order.items.length === 1 && order.items[0].quantity === 1 ? "item" : "items"}
                      {order.status !== "Delivered" && ` · Est. ${order.estimatedDelivery}`}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-4 sm:justify-end sm:gap-8 sm:border-0 sm:pt-0">
                  <div className="sm:text-right">
                    <p className="text-xs text-zinc-400">Order total</p>
                    <p className="mt-1 font-semibold text-zinc-900">{formatCurrency(order.total)}</p>
                  </div>
                  <Link
                    href={`/orders/${order.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#a97959]"
                  >
                    View details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
