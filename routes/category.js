import express from "express"

const router = express.Router();

router.get('/year', (req, res) => {
    res.status(200).json(
        [
            { name: "RAM", value: 4500 },
            { name: "SSD", value: 3200 },
            { name: "CPU", value: 2800 },
            { name: "GPU", value: 2100 },
            { name: "HDD", value: 1900 },
        ]
    )
})

router.get('/month', (req, res) => {
    res.status(200).json(
        [
            { name: "RAM", value: 370 },
            { name: "SSD", value: 280 },
            { name: "CPU", value: 240 },
            { name: "GPU", value: 190 },
            { name: "HDD", value: 160 },
        ]
    )
})

router.get('/week', (req, res) => {
    res.status(200).json(
        [
            { name: "RAM", value: 95 },
            { name: "SSD", value: 55 },
            { name: "CPU", value: 50 },
            { name: "GPU", value: 70 },
            { name: "HDD", value: 30 },
        ]
    )
})


export default router