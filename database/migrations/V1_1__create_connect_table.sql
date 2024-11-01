CREATE OR REPLACE FUNCTION set_wb_api_key()
RETURNS TRIGGER AS $$
BEGIN
  NEW.wb_api_key, NEW.notification_time := (SELECT u.wb_api_key, notification_time FROM users u WHERE u.chat_id = NEW.chat_id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;