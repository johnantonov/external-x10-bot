CREATE TABLE messageJobs (
  user_id BIGINT NOT NULL PRIMARY KEY, 
  filter VARCHAR(255)
);

ALTER TABLE users ADD COLUMN last_sec_report_call TIMESTAMP