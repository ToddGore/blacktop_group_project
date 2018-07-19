INSERT INTO reservations (user_id, start_time, end_time, listing_id)
VALUES ($1, $2, $3, $4)
RETURNING *;