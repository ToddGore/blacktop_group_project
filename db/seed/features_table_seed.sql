CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    covered INTEGER,
    lit INTEGER,
    charging INTEGER,
    camera INTEGER,
    fenced INTEGER,
    guarded INTEGER,
    listing_id INTEGER
)