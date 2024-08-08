import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  event_id: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  quantity: { type: Number, required: true },
  total_price: { type: Number, required: true },
  order_date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
