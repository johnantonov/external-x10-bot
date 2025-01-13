CREATE TABLE IF NOT EXISTS refs (
    chat_id BIGINT PRIMARY KEY,
    ref VARCHAR,
    success_refs BIGINT
);

ALTER TABLE refs DROP COLUMN success_refs;
ALTER TABLE sids DROP COLUMN added_by;
ALTER TABLE sids ADD COLUMN added_with_ref VARCHAR(255);
ALTER TABLE refs ADD COLUMN clicks BIGINT;
ALTER TABLE refs ADD COLUMN added_at TIMESTAMP DEFAULT NOW();
ALTER TABLE users DROP COLUMN from_ref;
ALTER TABLE users ADD COLUMN from_ref VARCHAR(255);