const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require("uuid");
const domain = "http://localhost:3000";
async function checkout(req, res) {
  const { token, amount } = req.body;
  const idempotencyKey = uuidv4();
  return stripe.customers
    .create({
      email: token.email,
      source: token,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: amount * 100,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
}
module.exports = {
  checkout,
};
