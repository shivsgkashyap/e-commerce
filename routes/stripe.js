const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
// const KEY = process.env.STRIPE_KEY;
// const stripe = require("stripe")(
//   "sk_test_51MTNUeIr660vcc8quNvGc45v591Hh2ZmnZa4AngbNYI0QlAEcA4hduqX22x4iVBMURL3CUQX02Q3JyQ91UfKoCAH00N4tnhV4G"
// );

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
