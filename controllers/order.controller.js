import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  const { user_id, event_id, quantity, total_price } = req.body;

  try {
    const newOrder = new Order({
      user_id,
      event_id,
      quantity,
      total_price,
      order_date: new Date(),
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ user_id: userId }).populate("event_id");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
