import { Router } from "express";
import { UserData } from "../models/db.js";

const mainRoute = Router();

mainRoute.get('/', (req, res) => {
    res.send("Hello")
})

mainRoute.post('/add', async (req, res) => {
    const body = req.body;
    const { id, name, address, phone } = body;
    try {

        const newData = new UserData({
            id: id,
            name: name,
            address: address,
            phone: phone
        });

        await newData.save();

        console.log('sussfully uploaded!');
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }
});

mainRoute.get('/view', async (req, res) => {

    try {

        const data = await UserData.find();

        console.log(data);
        res.status(200).json({ message: "data", data: data })

    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }

});


mainRoute.put('/edit/:id', async (req, res) => {

    const id = req.params.id;
    const body = req.body;
    const { name, address, phone } = body;

    try {

        const available = await UserData.findOne({ id: id });

        if (!available) {
            return res.status(401).json({ message: "Not a valid id" })
        }

        const result = await UserData.updateOne(
            { id: id },
            {
                $set: {
                    name: name,
                    address: address,
                    phone: phone
                }
            }
        );

        if (result.matchedCount === 0) {
            return res.status(400).json({ message: 'Course could not be updated' });
        } else {
            console.log(result);
            return res.status(200).json({ message: 'Course updated successfully', result });
        }


    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }

})

mainRoute.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const available = await UserData.findOne({ id: id });

        if (!available) {
            return res.status(401).json({ message: "Not a valid id" })
        }
        const result = await UserData.deleteOne({ id: id });
        console.log(result);
        res.status(200).json({ message: "Delete Successfully" })

    } catch (error) {
        res.status(500).json({ message: "Internal Error" })
    }
})


export default mainRoute;