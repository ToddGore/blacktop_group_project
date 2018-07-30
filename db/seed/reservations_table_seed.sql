CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    vehicle_id INTEGER,
    start_time VARCHAR(40),
    end_time VARCHAR(40),
    payment_type VARCHAR(40),
    total REAL,
    listing_id INTEGER
)