import express from "express"

const router = express.Router();

router.get('/year', (req, res) => {
    res.status(200).json(
        [
                { name: "Sep", sales: 5100 },
                { name: "Oct", sales: 4600 },
                { name: "Nov", sales: 5400 },
                { name: "Dec", sales: 7200 },
                { name: "Jan", sales: 6100 },
                { name: "Feb", sales: 5900 },
                { name: "Mar", sales: 6800 },
                { name: "Apr", sales: 6300 },
                { name: "May", sales: 7100 },
                { name: "Jun", sales: 7500 },
                { name: "Jul", sales: 4200 },
                { name: "Aug", sales: 3800 }
        ]
    )
})

router.get('/month', (req, res) => {
    res.status(200).json(
        [
            { name: "Day 1", sales: 400 },
            { name: "Day 4", sales: 420 },
            { name: "Day 8", sales: 430 },
            { name: "Day 11", sales: 460 },
            { name: "Day 14", sales: 470 },
            { name: "Day 17", sales: 500 },
            { name: "Day 20", sales: 530 },
            { name: "Day 23", sales: 550 },
            { name: "Day 26", sales: 570 },
            { name: "Day 29", sales: 600 }
        ]
    )
})

router.get('/week', (req, res) => {
    res.status(200).json(
        [
            { name: "Tue", sales: 300 },
            { name: "Wed", sales: 320 },
            { name: "Thu", sales: 310 },
            { name: "Fri", sales: 330 },
            { name: "Sat", sales: 340 },
            { name: "Sun", sales: 350 },
            { name: "Mon", sales: 360 }
        ]
    )
})


export default router