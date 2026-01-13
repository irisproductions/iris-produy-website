// pages/api/checkout.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [{
      price_data: {
        currency: "inr",
        product_data: { name: "IRIS PRODUY Event Ticket" },
        unit_amount: req.body.price * 100,
      },
      quantity: 1,
    }],
    success_url: "https://yourdomain.com/success",
    cancel_url: "https://yourdomain.com",
  });

  res.redirect(303, session.url);
}