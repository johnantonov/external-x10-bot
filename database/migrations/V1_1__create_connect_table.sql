CREATE TABLE IF NOT EXISTS articles (
    article VARCHAR NOT NULL,
    chat_id BIGINT NOT NULL,
    wb_api_key VARCHAR,
    notification_time NUMERIC,
    title VARCHAR,
    self_cost BIGINT,
    marketing_cost JSONB,
    other_cost BIGINT,
    order_info JSONB,
    mark BIGINT,
    tax BIGINT,
    percent_buys BIGINT,
    percent_mp BIGINT,
    price_before_spp BIGINT,
    logistics BIGINT,
    logistics_by_buys BIGINT,
    size JSONB,
    status VARCHAR DEFAULT 'off',
    is_active BOOLEAN DEFAULT TRUE,
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