SELECT * FROM listings
JOIN features ON features.listing_id = listings.id
JOIN pictures ON pictures.listing_id = listings.id
WHERE host_id = $1