import express from "express"

const router = express.Router();

router.get('/year', (req, res) => {
    res.status(200).json(
        [
            { name: "Website", value: 45600 },
            { name: "Mobile App", value: 38200 },
            { name: "Marketplace", value: 29800 },
            { name: "Social Media", value: 18700 },
        ]
    )
})

router.get('/month', (req, res) => {
    res.status(200).json(
        [
            { name: "Website", value: 3800 },
            { name: "Mobile App", value: 3200 },
            { name: "Marketplace", value: 2500 },
            { name: "Social Media", value: 1600 },
        ]
    )
})

router.get('/week', (req, res) => {
    res.status(200).json(
        [
            { name: "Website", value: 880 },
            { name: "Mobile App", value: 740 },
            { name: "Marketplace", value: 570 },
            { name: "Social Media", value: 360 },
        ]
    )
})


export default router