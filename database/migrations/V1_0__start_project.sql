CREATE TABLE IF NOT EXISTS users (
    chat_id BIGINT PRIMARY KEY,
    username VARCHAR(255),
    wb_api_key VARCHAR,
    type VARCHAR DEFAULT 'new',
    notification_time NUMERIC,
    added_at TIMESTAMP DEFAULT NOW(),
    last_report_call TIMESTAMP,
);

CREATE TABLE IF NOT EXISTS articles (
    article VARCHAR NOT NULL,
    chat_id BIGINT NOT NULL,
    wb_api_key VARCHAR,
    notification_time NUMERIC,
    self_cost DECIMAL,
    marketing_cost JSONB,
    other_cost DECIMAL,
    order_info JSONB,
    mark DECIMAL,
    tax DECIMAL,
    percent_buys DECIMAL,
    percent_mp DECIMAL,
    price_before_spp DECIMAL,
    logistics DECIMAL,
    storage DECIMAL,
    size JSONB,
    vendor_code VARCHAR,
    PRIMARY KEY (article, chat_id),
    FOREIGN KEY (chat_id) REFERENCES users(chat_id) ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION set_wb_api_key()
RETURNS TRIGGER AS $$
BEGIN
  NEW.wb_api_key := (SELECT u.wb_api_key FROM users u WHERE u.chat_id = NEW.chat_id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_insert_articles
BEFORE INSERT ON articles
FOR EACH ROW
EXECUTE FUNCTION set_wb_api_key();

CREATE TABLE IF NOT EXISTS conversions (
  date VARCHAR,
  category VARCHAR,
  subject_name VARCHAR,
  click_to_cart DECIMAL,
  cart_to_order DECIMAL,
  buyout_percent DECIMAL,
  PRIMARY KEY (category, subject_name)
);

CREATE TABLE IF NOT EXISTS commissions (
  "parentName" VARCHAR,
  "subjectName" VARCHAR,
  "parentID" NUMERIC,
  "subjectID" NUMERIC,
  "kgvpMarketplace" DECIMAL,
  "kgvpSupplier" DECIMAL,
  "kgvpSupplierExpress" DECIMAL,
  "paidStorageKgvp" DECIMAL,
  PRIMARY KEY ("parentName", "subjectName")
);

ALTER TABLE articles RENAME COLUMN logisticsByBuys

CREATE TABLE IF NOT EXISTS box_tariffs (
  "warehouseName" VARCHAR,
  "boxDeliveryAndStorageExpr" NUMERIC,
  "boxDeliveryBase" NUMERIC,
  "boxDeliveryLiter" NUMERIC,
  "boxStorageBase" NUMERIC,
  "boxStorageLiter" NUMERIC,
  PRIMARY KEY ("warehouseName")
);

CREATE OR REPLACE FUNCTION set_wb_api_key()
RETURNS TRIGGER AS $$
BEGIN
  SELECT u.wb_api_key, u.notification_time
  INTO NEW.wb_api_key, NEW.notification_time
  FROM users u
  WHERE u.chat_id = NEW.chat_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
