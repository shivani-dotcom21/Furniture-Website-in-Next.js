import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Monsta Furniture",
  description:
    "Get in touch with the Monsta Furniture team for help with your order or product questions.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: "98745612330",
    href: "tel:98745612330",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "furniture@gmail.com",
    href: "mailto:furniture@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#f8f6f3] font-outfit">
      <section className="border-b border-[#e9e2dc] bg-[#f2ede7] px-5 py-14 text-center sm:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber">
          We’re here to help
        </p>
        <h1 className="font-poppins text-3xl font-semibold text-[#28231f] sm:text-5xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#716960] sm:text-base">
          Have a question about a product or your order? Send us a message and
          our team will be happy to help.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <aside className="relative overflow-hidden rounded-2xl bg-[#302b27] p-7 text-white sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2b49f]">
              Contact details
            </p>
            <h2 className="mt-4 font-poppins text-2xl font-semibold sm:text-3xl">
              Let’s talk about your space.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              From choosing the right piece to checking on an order, we’re just
              a call or email away.
            </p>

            <div className="mt-10 space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d2b49f]">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-xs text-white/60">{label}</span>
                    <span className="mt-1 block text-sm font-medium text-white transition-colors group-hover:text-[#e4c6b0]">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 border-t border-white/15 pt-6 text-sm leading-6 text-white/65">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#d2b49f]"
                size={18}
                strokeWidth={1.7}
              />
              <p>
                Need help choosing furniture? Tell us what you’re looking for
                and we’ll point you in the right direction.
              </p>
            </div>
          </div>
        </aside>

        <div className="rounded-2xl border border-[#eee8e2] bg-white p-6 shadow-[0_12px_40px_rgba(48,43,39,0.05)] sm:p-10">
          <h2 className="font-poppins text-2xl font-semibold text-[#28231f]">
            Send us a message
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#817970]">
            Fill in the details below and your email app will open with your
            message ready to send.
          </p>

          <form
            action="mailto:furniture@gmail.com"
            method="post"
            encType="text/plain"
            className="mt-8 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-[#39332e]"
                >
                  Your name <span className="text-amber">*</span>
                </label>
                <input
                  id="contact-name"
                  name="Name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  required
                  className="w-full rounded-lg border border-[#e7e1db] bg-[#fcfbfa] px-4 py-3 text-sm text-[#28231f] outline-none transition placeholder:text-[#aaa29a] focus:border-amber focus:ring-2 focus:ring-amber/15"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-[#39332e]"
                >
                  Email address <span className="text-amber">*</span>
                </label>
                <input
                  id="contact-email"
                  name="Email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  required
                  className="w-full rounded-lg border border-[#e7e1db] bg-[#fcfbfa] px-4 py-3 text-sm text-[#28231f] outline-none transition placeholder:text-[#aaa29a] focus:border-amber focus:ring-2 focus:ring-amber/15"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-sm font-medium text-[#39332e]"
              >
                Phone number <span className="text-[#aaa29a]">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="Phone"
                type="tel"
                autoComplete="tel"
                placeholder="Your phone number"
                className="w-full rounded-lg border border-[#e7e1db] bg-[#fcfbfa] px-4 py-3 text-sm text-[#28231f] outline-none transition placeholder:text-[#aaa29a] focus:border-amber focus:ring-2 focus:ring-amber/15"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-[#39332e]"
              >
                How can we help? <span className="text-amber">*</span>
              </label>
              <textarea
                id="contact-message"
                name="Message"
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full resize-y rounded-lg border border-[#e7e1db] bg-[#fcfbfa] px-4 py-3 text-sm text-[#28231f] outline-none transition placeholder:text-[#aaa29a] focus:border-amber focus:ring-2 focus:ring-amber/15"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a97d61] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
