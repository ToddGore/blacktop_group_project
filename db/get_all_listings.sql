SELECT * FROM listings
JOIN features ON features.id = listings.feature_id
JOIN pictures ON pictures.id = listings.pictures_id