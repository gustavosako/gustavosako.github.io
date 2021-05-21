const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Timeline = require('../models/timeline')

const router = express.Router();

router.use(authMiddleware);

router.get('/buscar', async (req, res) => {
    try {
        const timeline = await Timeline.find().populate('user');

        return res.send({ timeline });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading posts' });
    }
});

router.get('/buscar/:timelineId', async (req, res) => {
    try {
        const timeline = await Timeline.findById(req.params.timelineId).populate('user');

        return res.send({ timeline });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading post' });
    }
});

router.post('/criar', async (req, res) => {
    try {
        const timeline = await Timeline.create({ ...req.body, user: req.userId });



        return res.send( { timeline } )
    } catch (err) {
        return res.status(400).send({ error: 'Error creating a new Post' });
    }
});

router.put('/:timelineId', async (req, res) => {
    try {
        const { description } = req.body;

        const timeline = await Timeline.findByIdAndUpdate(req.params.timelineId, { description }, {new: true});

        return res.send( { timeline } )
    } catch (err) {
        return res.status(400).send({ error: 'Error updating a new Post' });
    }
});

router.delete('/:timelineId', async (req, res) => {
    try {
        const timeline = await Timeline.findByIdAndRemove(req.params.timelineId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting post' });
    }
});



module.exports = app => app.use('/timeline', router);