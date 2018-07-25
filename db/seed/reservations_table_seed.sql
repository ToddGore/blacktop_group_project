CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    start_time VARCHAR(40),
    end_time VARCHAR(40),
    listing_id INTEGER,
)