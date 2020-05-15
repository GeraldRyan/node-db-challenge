const express = require('express');

const Reso = require('./resources-model.js');

const router = express.Router();

// GET ALL STORES
router.get('/', (req, res) => {
    Reso.getAllResources()
        .then(resos => {
            res.status(200).json(resos);
        })
        .catch(err => {
            res.status(500).json({
                errMessage: 'Internal Server Error, could not receive projects'
            })
        })
})

// // GET STORE BY ID 
// router.get('/:id', (req, res) => {
//     const { id } = req.params;

//     Store.getStoreById(id)
//         .then(specific_store => {
//             if (id) {
//                 res.status(200).json(specific_store);
//             } else {
//                 res.status(404).json({
//                     errMessage: 'No project with that ID'
//                 })
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 errMessage: 'Sorry, no store information can be found'
//             })
//         })
// })

// // GET ALL SUPPLIES FOR A SPECIFIC STORE
// router.get('/:id/connecting', (req, res) => {
//     const id = req.params.id;
//     Store.getSuppliesForStore(id)
//         .then(all => {
//             res.status(200).json(all);
//         })
//         .catch(err => {
//             res.status(500).json({
//                 errMessage: 'Sorry, no information can be found'
//             })
//         })
// })

// // some other requests to build out: 
// // GET ALL GROCERIES FOR A SPECIFIC STORE
// // ADD A NEW STORE
// // ADD NEW SUPPLIES - USER MUST PASS IN THE STORE_ID
// // ADD A GROCERY TO A STORE - USER MUST PASS IN STORE_ID
// // DELETE A STORE


module.exports = router;