import Event from "../models/event.model.js";

export const createEvent = async (req, res) => {
  const {
    name_of_event,
    category_id,
    no_of_tickets,
    price_per_ticket,
    description_of_event,
    event_date,
    event_venue,
  } = req.body;

  try {
    const newEvent = new Event({
      name_of_event,
      category_id,
      no_of_tickets,
      price_per_ticket,
      description_of_event,
      event_date,
      event_venue,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("category_id");
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEventByCategoryId = async (req, res) => {
  try {
    const event = await Event.find({ category_id: req.params.id });
    if (!event) {
      return res.status(404).json({ message: "Events not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("category_id");

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const {
    name_of_event,
    category_id,
    no_of_tickets,
    price_per_ticket,
    description_of_event,
    event_date,
    event_venue,
  } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      {
        name_of_event,
        category_id,
        no_of_tickets,
        price_per_ticket,
        description_of_event,
        event_date,
        event_venue,
      },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
