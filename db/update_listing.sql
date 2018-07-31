UPDATE listings
SET address = $1,
    building_type = $2,
    space_type = $3,
    num_spaces = $4,
    space_size = $5,
    about = $6,
    instructions = $7,
    price = $8
WHERE id = $9;

UPDATE payments
SET cash = $1,
    credit = $2,
    venmo = $3,
    pay_pal = $4,
    apple_pay = $5
WHERE id = $6;

UPDATE pictures
SET pic_one = $1,
    pic_two = $2,
    pic_three = $3,
    pic_three = $4
WHERE id = $5;

UPDATE availabilites
SET monday = $1,
    tuesday = $2,
    wednesday = $3,
    thursday = $4,
    friday = $5,
    saturday = $6,
    sunday = $7
WHERE id = $8;

UPDATE features
SET covered = $1,
    lit = $2,
    charging = $3,
    camera = $4,
    fenced = $5,
    guarded = $6
WHERE id = $7