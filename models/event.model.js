import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name_of_event: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  no_of_tickets: {
    type: Number,
    required: true,
  },
  price_per_ticket: {
    type: Number,
    required: true,
  },
  description_of_event: {
    type: String,
    required: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  event_venue: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
