const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const domain="http://localhost:3000";
async function checkout(req, res) {
  const { donation_object } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: donation_object.amount,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${domain}/success`,
    cancel_url: `${domain}/canceled`,
  });
  res.json({ id: session.id });
}
module.exports = {
  checkout,
};
