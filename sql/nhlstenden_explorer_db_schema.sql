-- FAQ Table
CREATE TABLE IF NOT EXISTS faq (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL
);

INSERT INTO faq (question, answer) VALUES
('What is NHL Stenden Explorer?', 'NHL Stenden Explorer is a platform that provides information about NHL Stenden University of Applied Sciences.'),
('Where can I find my classroom?', 'You can find your classroom in app YOS. Or once you are in the building, follow the numeric signage or ask at the Service Desk / Reception—they are always happy to help new students navigate.'),
('How big is the Emmen campus?', 'The campus may look compact from the outside, but it is designed to feel open, modern, and spacious inside, with plenty of places to study, relax, and meet people.'),
('Is there a pool table or recreation area?', 'Yes—there are common areas to relax, socialize, and unwind between classes. Facilities may change over time, so check locally what is currently available.'),
('How does this university treat its students?', 'NHL Stenden values a community-focused, supportive, and international learning environment. Students generally appreciate the approachable teachers, collaborative atmosphere, and practical learning style.'),
('Where is the bathroom?', 'Toilets are located on every floor of the building and are clearly signposted along the corridors. If you cannot find one, staff at reception are happy to help.'),
('Why are campus TVs showing NHL Stenden content?', 'Campus screens display updates, events, important announcements, and faculty information to help keep students informed.'),
('Is the campus accessible?', 'Yes, the campus includes elevators, ramps, and accessible facilities to support students with mobility needs.'),
('Can I park a car near the campus?', 'Yes, parking areas are available nearby.'),
('Is there a place to study quietly?', 'Yes—there are quiet study zones, library spaces, and silence booths are available on campus.'),
('Where is the bike shed?', 'Bike sheds are located outside the campus building. They are easy to access and provide safe parking for your bicycle while you are on campus.');

-- Carousel Item Table
CREATE TABLE IF NOT EXISTS carousel_item (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL
);

INSERT INTO carousel_item (title, description, image_url) VALUES
('Test Card 1', 'This is placeholder text for now, will be changed later.', 'https://lipsum.app/512x512'),
('Test Card 2', 'This is placeholder text for now, will be changed later.', 'https://lipsum.app/512x512'),
('Test Card 3', 'This is placeholder text for now, will be changed later.', 'https://lipsum.app/512x512');

-- LetsGo Item Table
CREATE TABLE IF NOT EXISTS letsgo_item (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_url TEXT NOT NULL,
  link_url TEXT NOT NULL
);

INSERT INTO letsgo_item (title, description, icon_url, link_url) VALUES
('Library', 'Study resources & a quiet place.', '/icons/library_icon.svg', '/library'),
('Student Info', 'Help & important information.', '/icons/student_info_icon.svg', '/student-info'),
('Canteen', 'Food & beverages.', '/icons/canteen_icon.svg', '/canteen'),
('Parking & Bike Area', 'Vehicle & bike parking.', '/icons/parking_icon.svg', '/parking'),
('MyConcept Lab', 'Step in, get hands-on, and explore the future.', '/icons/leb_icon.svg', '/myconcept-lab'),
('Study Landscapes', 'Time to study!', '/icons/study_landscape_icon.svg', '/study-landscapes'),
('Kennispoort', 'Collaboration with real companies.', '/icons/kennispoort_icon.svg', '/kennispoort');

-- Explore Item Table with Category Enum
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'category_enum') THEN
    CREATE TYPE category_enum AS ENUM ('FACILITIES','STUDY_AREAS','SERVICES');
  END IF;
END
$$;

CREATE TABLE IF NOT EXISTS explore_item (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  categories category_enum[] NOT NULL,
  image_url TEXT NOT NULL,
  link_url TEXT NOT NULL
);

INSERT INTO explore_item (title, description, categories, image_url, link_url) VALUES
('Student Info', 'Help & important information.', ARRAY['SERVICES']::category_enum[], 'https://lipsum.app/512x512', '/studentInfo'),
('Study Landscapes', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/studyLandscapes'),
('Canteen', 'Hot and cold meals, snacks and beverage options.', ARRAY['FACILITIES','SERVICES']::category_enum[], 'https://lipsum.app/512x512', '/canteen'),
('Library', 'The library with study spaces and resources.', ARRAY['FACILITIES']::category_enum[], 'https://lipsum.app/512x512', '/library'),
('Computer Lab', 'Open computer labs with up-to-date software for coursework.', ARRAY['FACILITIES','STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/computerLab'),
('Career Services', 'Support for internships, CVs and career guidance.', ARRAY['SERVICES']::category_enum[], 'https://lipsum.app/512x512', '/careerServices'),
('Kennispoort Hub', 'Collaboration space connecting students with industry partners.', ARRAY['STUDY_AREAS','SERVICES']::category_enum[], 'https://lipsum.app/512x512', '/kennispoort'),
('MyConcept Lab', 'lorem ipsum', ARRAY['FACILITIES','STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/myConceptLab');