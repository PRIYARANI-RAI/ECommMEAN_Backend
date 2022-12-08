const { Category } = require('../models/category')
const express = require('express');
const router = express.Router();

//Add New Category-----------------------
router.post(`/add`, async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    category = await category.save();
    if (!category)
        return res.status(404).send('The Category cannot be created')
    res.send(category);
});

//Get Category List---------------------
router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();
    if (!categoryList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(categoryList);
});

//Get Category By Id--------------------
router.get(`/:id`, async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(500).json({ success: false, message: 'Category cannot be found' })
    }
    res.status(200).send(category);
});

//Update Category--------------------
router.put(`/update/:id`, async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color
        }, { new: true });
    if (!category) {
        res.status(500).json({ success: false, message: 'Category cannot be found' })
    }
    res.status(200).send(category);
});

//Delete Category-----------------------
router.delete('/delete/:id', (req, res) => {
    Category.findByIdAndRemove(req.params.id).then(category => {
        if (category) {
            return res.status(200).json({ success: true, message: "Category is Deleted" });
        } else {
            return res.status(404).json({ success: false, message: 'Category Not Found' });
        }
    }).catch(err => {
        return res.status(400).json({ success: false, error: err });
    })
})

module.exports = router;