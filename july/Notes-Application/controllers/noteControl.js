const Notes = require("../models/noteModel");

const noteControl = {
  getNotes: async (req, res) => {
    try {
      const notes = await Notes.find({ user_id: req.user.id });
      res.json(notes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  createNote: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      const newNote = new Notes({
        title,
        content,
        date,
        user_id: req.user.id,
        name: req.user.name,
      });
      await newNote.save();
      res.json("created the Note !");
    } catch (err) {
      if (err) return res.status(500).json({ msg: err.messge });
    }
  },

  deleteNote: async (req, res) => {
    try {
      await Notes.findByIdAndDelete(req.params.id);
      res.json({ msg: "Note is Deleted" });
    } catch (err) {
      if (err) return res.status(500).json({ msg: err.messge });
    }
  },

  updateNote: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      await Notes.findOneAndUpdate(
        { _id: req.params.id },
        {
          title,
          content,
          date,
        }
      );
      res.json({ msg: "Note is Updated" });
    } catch (err) {
      if (err) return res.status(500).json({ msg: err.messge });
    }
  },

  getNote: async (req, res) => {
    try {
      const note = await Notes.findById(req.params.id);
      res.json(note);
    } catch (err) {
      if (err) return res.status(500).json({ msg: err.messge });
    }
  },
};

module.exports = noteControl;
