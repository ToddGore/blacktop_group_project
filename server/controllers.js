module.exports = {
    //GET CONTROLLERS
    getAllListings:(req, res) => {
        const db = req.app.get('db');

        db.get_all_listings()
        .then( listings => res.status(200).send(listings))
        .catch( () => res.status(500).send())
    },
    getUserListings:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.get_user_listings([id])
        .then( listings => res.status(200).send(listings))
        .catch( () => res.status(500).send())
    },
    getListingPreview:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.get_listing_preview([id])
        .then( (preview) => res.status(200).send(preview))
        .catch( () => res.status(500).send())
    },
    getReservations:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.get_reservation([id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    getVehicles:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.get_vehicles([id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },


    //CREATE CONTROLLERS
    createListing:(req, res) => {
        const db = req.app.get('db');
        const {
            address,
            building_type, 
            space_type, 
            num_spaces, 
            space_size, 
            about, 
            instructions, 
            price, 
            user_id
        } = req.body

        db.create_listing([
            address,
            building_type, 
            space_type, 
            num_spaces, 
            space_size, 
            about, 
            instructions, 
            price, 
            user_id
        ])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    createFeatures:(req, res) => {
        const db = req.app.get('db');
        const {
            covered, 
            lit, 
            charging, 
            camera, 
            fenced, 
            guarded, 
            listing_id
        } = req.body

        db.create_features([
            covered, 
            lit, 
            charging, 
            camera, 
            fenced, 
            guarded, 
            listing_id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    createPictures:(req, res) => {
        const db = req.app.get('db');
        const {pic_one, pic_two, pic_three, pic_four, listing_id} = req.body

        db.create_picture([pic_one, pic_two, pic_three, pic_four, listing_id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    createReservation:(req, res) => {
        const db = req.app.get('db');
        const {user_id, listing_id}

        db.create_reservation([user_id, listing_id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    createSchedule:(req, res) => {
        const db = req.app.get('db');

        db.create_schedule([])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    createVehicle:(req, res) => {
        const db = req.app.get('db');
        const {user_id, car_pic, year, make, model, color, size, plate} = req.body

        db.create_vehicle([user_id, car_pic, year, make, model, color, size, plate])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },


    //UPDATE CONTROLLERS
    updateFeatures:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        const {
            covered, 
            lit, 
            charging, 
            camera, 
            fenced, 
            guarded
        } = req.body

        db.update_features([
            covered, 
            lit, 
            charging, 
            camera, 
            fenced, 
            guarded,
            id
        ])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    updateListing:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        const {
            address,
            building_type, 
            space_type, 
            num_spaces, 
            space_size, 
            about, 
            instructions, 
            price
        } = req.body

        db.update_listing([
            address,
            building_type, 
            space_type, 
            num_spaces, 
            space_size, 
            about, 
            instructions, 
            price,
            id
        ])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    updatePictures:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        const {pic_one, pic_two, pic_three, pic_four} = req.body

        db.update_picture([pic_one, pic_two, pic_three, pic_four, id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    updateSchedule:(req, res) => {
        const db = req.app.get('db');

        db.save_position([pos_x, pos_y, map_id, id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    updateVehicle:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        const {car_pic, year, make, model, color, size, plate} = req.body

        db.save_position([car_pic, year, make, model, color, size, plate, id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },


    //DELETE CONTROLLERS
    deleteListing:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_listing([id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    deleteVehicle:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_vehicle([id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    deleteReservation:(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_reservation([id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
}