-- =========================================================
-- Seōna database — import this in phpMyAdmin (XAMPP)
-- =========================================================
CREATE DATABASE IF NOT EXISTS seona_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE seona_db;

-- -------------------- BRANDS --------------------
CREATE TABLE brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  country VARCHAR(100)
);

INSERT INTO brands (id, name, slug, description, country) VALUES
(1, "I'm From", 'im-from', "A Korean brand focused on natural ingredients sourced from Korea's finest regions", 'South Korea'),
(2, 'COSRX', 'cosrx', 'Beloved K-beauty brand known for effective, no-fuss skincare solutions', 'South Korea'),
(3, 'Some By Mi', 'some-by-mi', 'Results-driven K-beauty brand popular for their AHA/BHA/PHA toner series', 'South Korea'),
(4, 'Innisfree', 'innisfree', 'Natural brand inspired by the pristine island of Jeju', 'South Korea'),
(5, 'Klairs', 'klairs', 'Minimalist K-beauty brand focused on sensitive skin solutions', 'South Korea'),
(6, 'Laneige', 'laneige', 'Premium Korean beauty brand famous for its water science technology', 'South Korea'),
(7, 'Etude House', 'etude-house', 'Playful and youthful Korean beauty brand with a wide color range', 'South Korea'),
(8, 'Benton', 'benton', 'Science-backed K-beauty with clean, minimal ingredients', 'South Korea');

-- -------------------- CATEGORIES --------------------
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  image_url VARCHAR(500)
);

INSERT INTO categories (id, name, slug, description, image_url) VALUES
(1, 'Toner', 'toner', 'Hydrating and balancing toners for all skin types', 'https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=80'),
(2, 'Serum', 'serum', 'Targeted treatment serums for specific skin concerns', 'https://images.unsplash.com/photo-1631390942025-f2dbece48f68?w=600&q=80'),
(3, 'Moisturizer', 'moisturizer', 'Nourishing creams and lotions for daily hydration', 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80'),
(4, 'Cleanser', 'cleanser', 'Gentle cleansers that remove impurities without stripping', 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=600&q=80'),
(5, 'Sunscreen', 'sunscreen', 'SPF protection for everyday use', 'https://images.unsplash.com/photo-1567721913486-6585f069b3c3?w=600&q=80'),
(6, 'Mask', 'mask', 'Sheet masks and wash-off masks for intensive care', 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80'),
(7, 'Eye Care', 'eye-care', 'Targeted treatments for the delicate eye area', 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80'),
(8, 'Lip Care', 'lip-care', 'Nourishing treatments for soft, smooth lips', 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&q=80');

-- -------------------- PRODUCTS --------------------
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  brand_id INT,
  cat_id INT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2) NULL,
  image_url VARCHAR(500),
  image_url2 VARCHAR(500),
  is_new TINYINT(1) DEFAULT 0,
  is_bestseller TINYINT(1) DEFAULT 0,
  is_featured TINYINT(1) DEFAULT 0,
  in_stock TINYINT(1) DEFAULT 1,
  rating DECIMAL(2,1) DEFAULT 0,
  review_count INT DEFAULT 0,
  description TEXT,
  benefits TEXT,
  ingredients TEXT,
  how_to_use TEXT,
  FOREIGN KEY (brand_id) REFERENCES brands(id),
  FOREIGN KEY (cat_id) REFERENCES categories(id)
);

INSERT INTO products
(id, name, slug, brand_id, cat_id, price, original_price, image_url, image_url2, is_new, is_bestseller, is_featured, in_stock, rating, review_count, description, benefits, ingredients, how_to_use)
VALUES
(1, 'Black Rice Toner', 'black-rice-toner', 1, 1, 18.90, 22.00, 'https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=80', '', 1, 1, 1, 1, 4.8, 247,
 'A lightweight toner formulated with black rice extract to deliver intense hydration while controlling sebum for oily skin.',
 'Controls excess oil and sebum\nDeep hydration with black rice extract\nSmooths and brightens skin tone',
 'Black Rice Extract, Niacinamide, Hyaluronic Acid, Centella Asiatica, Glycerin',
 'After cleansing, pour a small amount onto a cotton pad or hands. Pat gently onto face and neck until fully absorbed.'),
(2, 'AHA/BHA/PHA 30 Days Miracle Toner', 'some-by-mi-miracle-toner', 3, 1, 19.00, NULL, 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80', '', 0, 1, 1, 1, 4.9, 512,
 'The cult-favorite toner that cleared acne for thousands. This triple-acid formula gently exfoliates dead skin, reduces blemishes, and visibly improves skin texture in just 30 days.',
 'Exfoliates dead skin cells\nReduces acne and blemishes\nImproves skin texture',
 'AHA (Glycolic Acid), BHA (Salicylic Acid), PHA (Gluconolactone), Centella Asiatica, Tea Tree Extract',
 'Apply to cotton pad and gently swipe over face. Start with 2-3 times per week.'),
(3, 'Snail Mucin 96% Power Repairing Essence', 'cosrx-snail-mucin-essence', 2, 2, 21.00, NULL, 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80', '', 0, 1, 1, 1, 4.9, 1024,
 'The iconic essence that sparked a global K-beauty obsession. 96% snail secretion filtrate repairs damage, fades scars, and delivers next-level hydration.',
 'Repairs damaged skin barrier\nFades acne scars and dark spots\nIntense hydration',
 'Snail Secretion Filtrate 96%, Sodium Hyaluronate, Betaine, Allantoin, Panthenol',
 'Apply 2-3 drops to cleansed skin. Gently pat in until absorbed.'),
(4, 'Supple Preparation Unscented Toner', 'klairs-supple-toner', 5, 1, 22.00, 26.00, 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&q=80', '', 1, 0, 0, 1, 4.7, 389,
 'A fragrance-free toner for sensitive skin that delivers long-lasting hydration with a blend of soothing botanical ingredients.',
 'Deeply hydrates sensitive skin\nFragrance-free and gentle\nStrengthens skin barrier',
 'Hyaluronic Acid, Beta-glucan, Centella Asiatica, Aloe Vera, Ceramide',
 'After cleansing, apply a generous amount to hands or cotton pad. Press into skin.'),
(5, 'Water Sleeping Mask', 'laneige-water-sleeping-mask', 6, 6, 25.00, NULL, 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80', '', 0, 1, 1, 1, 4.8, 678,
 'The overnight miracle that started it all. This gel-type sleeping mask locks in moisture while you sleep.',
 'Overnight intensive hydration\nWakes up to plump, dewy skin\nSuitable for all skin types',
 'Hydro Ionized Mineral Water, Beta-Glucan, Apricot Extract, Evening Primrose',
 'Use as the last step of your evening skincare. Apply a generous layer and leave on overnight.'),
(6, 'Green Tea Hyaluronic Acid Serum', 'innisfree-green-tea-serum', 4, 2, 24.00, 28.00, 'https://images.unsplash.com/photo-1631390942025-f2dbece48f68?w=600&q=80', '', 1, 0, 0, 1, 4.6, 203,
 'Powered by Jeju green tea and 3 types of hyaluronic acid, this serum provides multi-layer hydration that plumps fine lines.',
 'Triple hyaluronic acid complex\nJeju green tea antioxidants\nPlumps fine lines and wrinkles',
 'Jeju Green Tea Extract, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Panthenol, Niacinamide',
 'Apply 2-3 drops to cleansed face after toner. Follow with moisturizer.'),
(7, 'BHA Blackhead Power Liquid', 'cosrx-bha-blackhead-power', 2, 2, 24.00, NULL, 'https://images.unsplash.com/photo-1567721913486-6585f069b3c3?w=600&q=80', '', 1, 1, 0, 1, 4.7, 445,
 'A targeted BHA exfoliant that dissolves blackheads and clogged pores with 4% betaine salicylate.',
 'Dissolves blackheads and clogged pores\nMinimizes pore appearance\nRefines skin texture',
 'Betaine Salicylate 4%, Willow Bark Water, Niacinamide, Allantoin, Panthenol',
 'Apply a thin layer using a cotton pad. Leave on for 15-20 minutes. Use 2-3 times per week.'),
(8, 'Rice Toner', 'im-from-rice-toner', 1, 1, 29.00, NULL, 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=600&q=80', '', 0, 1, 0, 1, 4.9, 367,
 'A luminosity-boosting toner with 77.78% rice extract for brightening and firming. Leaves skin looking lit-from-within.',
 'Brightens skin with 77.78% rice extract\nFirms and improves elasticity\nLuminous satin finish',
 'Rice Extract 77.78%, Niacinamide, Adenosine, Hyaluronic Acid, Ceramide',
 'Apply a generous amount to hands or cotton pad. Pat gently into skin in upward motions.');

-- -------------------- USERS --------------------
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- -------------------- REVIEWS --------------------
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  user_id INT NULL,
  reviewer_name VARCHAR(150) NOT NULL,
  rating TINYINT NOT NULL,
  title VARCHAR(200),
  body TEXT,
  created_at DATE NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

INSERT INTO reviews (product_id, reviewer_name, rating, title, body, created_at) VALUES
(3, 'Sarah K.', 5, 'Life-changing essence!', "I've been using this for 3 months and my skin has never looked better. The snail mucin is incredibly soothing.", '2026-03-15'),
(2, 'Emily L.', 5, 'Actually works in 30 days!', 'Was skeptical but this toner genuinely cleared my acne. My skin texture has improved dramatically.', '2026-04-02'),
(5, 'Mia T.', 5, 'Best sleeping mask ever', 'I wake up with the most hydrated, glowy skin. Worth every penny!', '2026-04-20'),
(1, 'Jenna R.', 4, 'Great for oily skin', 'The black rice toner keeps my skin balanced throughout the day. Love how lightweight it feels.', '2026-05-01'),
(8, 'Amy C.', 5, 'Glow like no other', 'The rice toner gives the most beautiful natural glow. I get compliments every day.', '2026-06-10');

-- -------------------- CONTACT MESSAGES --------------------
CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  order_item VARCHAR(200),
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- -------------------- ORDERS --------------------
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  customer_name VARCHAR(150) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  address TEXT NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status VARCHAR(30) DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  qty INT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id)
);
