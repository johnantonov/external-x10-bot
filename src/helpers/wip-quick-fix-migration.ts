export const migrations = [
    // -------- 0  
    [],
    // -------- 1    
    [
        `CREATE TABLE IF NOT EXISTS users (
        chat_id BIGINT PRIMARY KEY,
        username VARCHAR(255),
        wb_api_key VARCHAR,
        type VARCHAR DEFAULT 'new',
        article BIGINT,
        notification_time NUMERIC,
        added_at TIMESTAMP DEFAULT NOW(),
        last_report_call TIMESTAMP -- Убрана лишняя запятая
        );`, 

        `CREATE TABLE IF NOT EXISTS articles (
        article VARCHAR NOT NULL,
        chat_id BIGINT NOT NULL,
        wb_api_key VARCHAR,
        notification_time NUMERIC,
        title VARCHAR,
        self_cost DECIMAL,
        marketing_cost JSONB,
        other_cost DECIMAL,
        order_info JSONB,
        mark DECIMAL,
        tax DECIMAL,
        acquiring DECIMAL,
        percent_buys DECIMAL,
        percent_mp DECIMAL,
        price_before_spp DECIMAL,
        logistics DECIMAL,
        logistics_by_buys DECIMAL,
        size JSONB,
        status VARCHAR DEFAULT 'off',
        is_active BOOLEAN DEFAULT TRUE,
        PRIMARY KEY (article, chat_id),
        FOREIGN KEY (chat_id) REFERENCES users(chat_id) ON DELETE CASCADE
        );`,

        `CREATE OR REPLACE FUNCTION set_wb_api_key()
        RETURNS TRIGGER AS $$
        BEGIN
        NEW.wb_api_key := (SELECT u.wb_api_key FROM users u WHERE u.chat_id = NEW.chat_id);
        RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;`,

        `CREATE TRIGGER before_insert_articles
        BEFORE INSERT ON articles
        FOR EACH ROW
        EXECUTE FUNCTION set_wb_api_key();`,

        `CREATE TABLE IF NOT EXISTS conversions (
        date VARCHAR,
        category VARCHAR,
        subject_name VARCHAR,
        click_to_cart DECIMAL,
        cart_to_order DECIMAL,
        buyout_percent DECIMAL,
        PRIMARY KEY (category, subject_name)
        );`,

        `CREATE TABLE IF NOT EXISTS commissions (
        "parentName" VARCHAR,
        "subjectName" VARCHAR,
        "parentID" NUMERIC,
        "subjectID" NUMERIC,
        "kgvpMarketplace" DECIMAL,
        "kgvpSupplier" DECIMAL,
        "kgvpSupplierExpress" DECIMAL,
        "paidStorageKgvp" DECIMAL,
        PRIMARY KEY ("parentName", "subjectName")
        );`
    ],
    [
        `CREATE OR REPLACE FUNCTION set_wb_api_key()
        RETURNS TRIGGER AS $$
        BEGIN
        NEW.wb_api_key := (SELECT u.wb_api_key FROM users u WHERE u.chat_id = NEW.chat_id);
        NEW.notification_time := (SELECT u.notification_time FROM users u WHERE u.chat_id = NEW.chat_id);
        RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;`,

        `CREATE OR REPLACE TRIGGER before_insert_articles
        BEFORE INSERT ON articles
        FOR EACH ROW
        EXECUTE FUNCTION set_wb_api_key();`,
    ]
];