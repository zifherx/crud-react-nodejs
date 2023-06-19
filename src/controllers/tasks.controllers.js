import Task from "../models/task.model.js";

const taskController = {
    getAll: async (req, res) => {
        try {
            const query = await Task.find().populate({ path: "userId", select: "username email" });
            if (query.length == 0) return res.status(404).json({ message: `No existen tareas` });

            res.json({ success: true, total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message, success: false });
        }
    },

    getOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await Task.findById(itemId).populate({ path: "userId", select: "username email" });

            if (!query) return res.status(404).json({ message: `Tarea ${itemId} no encontrada` });

            res.json({ success: true, one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message, success: false });
        }
    },

    createOne: async (req, res) => {
        const { title, description, date, userId } = req.body;

        try {
            const newObj = new Task({ title, description, date, userId: req.user });
            const query = await newObj.save();

            if (query) res.json({ success: true, message: `Tarea creada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message, success: false });
        }
    },

    updateOneById: async (req, res) => {
        const { itemId } = req.params;
        const { title, description, date } = req.body;

        try {
            const query = await Task.findByIdAndUpdate(itemId, { title, description, date }, { new: true });

            if (!query) return res.status(404).json({ message: `Tarea ${itemId} no encontrada` });

            res.json({ success: true, message: `Tarea ${itemId} eliminada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message, success: false });
        }
    },

    deleteOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await Task.findByIdAndDelete(itemId);

            if (!query) return res.status(404).json({ message: `Tarea ${itemId} no encontrada` });

            res.json({ success: true, message: `Tarea ${itemId} eliminada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message, success: false });
        }
    },
};

export default taskController;
