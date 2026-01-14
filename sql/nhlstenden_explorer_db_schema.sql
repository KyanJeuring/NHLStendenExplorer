-- FAQ Table
CREATE TABLE IF NOT EXISTS faq (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  language_code TEXT DEFAULT 'en' NOT NULL
);

INSERT INTO faq (question, answer, language_code) VALUES
('What is NHL Stenden Explorer?', 'NHL Stenden Explorer is a platform that provides information about NHL Stenden University of Applied Sciences.', 'en'),
('Wat is NHL Stenden Explorer?', 'NHL Stenden Explorer is een platform dat informatie biedt over NHL Stenden Hogeschool.', 'nl'),
('How do I use NHL Stenden Explorer?', 'You can navigate through the various sections to find information about campus facilities, study areas, services, and more.', 'en'),
('Hoe gebruik ik NHL Stenden Explorer?', 'Je kunt door de verschillende secties navigeren om informatie te vinden over campusfaciliteiten, studieruimtes, diensten en meer.', 'nl'),
('Who can I contact for more information?', 'For more information, you can reach out to the student services department or visit the official NHL Stenden website.', 'en'),
('Met wie kan ik contact opnemen voor meer informatie?', 'Voor meer informatie kun je contact opnemen met de studentenservice of de officiële NHL Stenden-website bezoeken.', 'nl'),
('Where can I find my classroom?', 'You can find your classroom in app YOS. Or once you are in the building, follow the numeric signage or ask at the Service Desk / Reception—they are always happy to help new students navigate.', 'en'),
('Waar kan ik mijn klaslokaal vinden?', 'Je kunt je klaslokaal vinden in de app YOS. Of zodra je in het gebouw bent, volg de borden of vraag het bij de Service Desk / Receptie - zij helpen nieuwe studenten graag met de weg vinden.', 'nl'),
('Is there Wi-Fi on campus?', 'Yes, NHL Stenden provides free Wi-Fi access throughout the campus for all students and staff.', 'en'),
('Is er Wi-Fi op de campus?', 'Ja, NHL Stenden biedt gratis Wi-Fi-toegang op de hele campus voor alle studenten en medewerkers.', 'nl'),
('How big is the Emmen campus?', 'The campus may look compact from the outside, but it is designed to feel open, modern, and spacious inside, with plenty of places to study, relax, and meet people.', 'en'),
('Hoe groot is de campus Emmen?', 'De campus lijkt van buiten misschien compact, maar is van binnen ontworpen om open, modern en ruimtelijk aan te voelen, met veel plekken om te studeren, te ontspannen en mensen te ontmoeten.', 'nl'),
('Is there a pool table or recreation area?', 'Yes, there are common areas to relax, socialize, and unwind between classes. Facilities may change over time, so check locally what is currently available.', 'en'),
('Is er een pooltafel of recreatieruimte?', 'Ja, er zijn gemeenschappelijke ruimtes om te ontspannen, socializen en tot rust te komen tussen de lessen door. De faciliteiten kunnen in de loop van de tijd veranderen, dus controleer lokaal wat er momenteel beschikbaar is.', 'nl'),
('How does this university treat its students?', 'NHL Stenden values a community-focused, supportive, and international learning environment. Students generally appreciate the approachable teachers, collaborative atmosphere, and practical learning style.', 'en'),
('Hoe gaat de universiteit met haar studenten om?', 'NHL Stenden hecht waarde aan een gemeenschapsgerichte, ondersteunende en internationale leeromgeving. Studenten waarderen over het algemeen de toegankelijkheid van docenten, de samenwerkingsgerichte sfeer en de praktische leermethode.', 'nl'),
('Where is the bathroom?', 'Toilets are located on every floor of the building and are clearly signposted along the corridors. If you cannot find one, staff at reception are happy to help.', 'en'),
('Waar is het toilet?', 'Toiletten bevinden zich op elke verdieping van het gebouw en zijn duidelijk aangegeven langs de gangen. Als je er geen kunt vinden, helpen de medewerkers bij de receptie je graag.', 'nl'),
('Why are campus TVs showing NHL Stenden content?', 'Campus screens display updates, events, important announcements, and faculty information to help keep students informed.', 'en'),
('Waarom tonen campus schermen NHL Stenden-inhoud?', 'Campus-schermen tonen updates, evenementen, belangrijke aankondigingen en informatie van faculteiten om studenten op de hoogte te houden.', 'nl'),
('Is the campus accessible?', 'Yes, the campus includes elevators, ramps, and accessible facilities to support students with mobility needs.', 'en'),
('Is de campus toegankelijk?', 'Ja, de campus beschikt over liften, hellingen en toegankelijke faciliteiten om mensen met mobiliteitsbehoeften te ondersteunen.', 'nl'),
('Can I park a car near the campus?', 'Yes, the campus has a parking area and there are also parking areas available nearby.', 'en'),
('Kan ik een auto parkeren in de buurt van de campus?', 'Ja, de campus heeft een parkeerterrein en er zijn ook parkeerplaatsen in de buurt.', 'nl'),
('Is there a place to study quietly?', 'Yes—there are quiet study zones, library spaces, and silence booths are available on campus.', 'en'),
('Is er een plek om rustig te studeren?', 'Ja - er zijn stille studiezones, bibliotheekruimtes en stiltehokjes beschikbaar op de campus.', 'nl'),
('Where is the bike shed?', 'Bike sheds are located outside the campus building. They are easy to access and provide safe parking for your bicycle while you are on campus.', 'en'),
('Waar is de fietsenstalling?', 'Fietsenstallingen bevinden zich buiten het campusgebouw. Ze zijn gemakkelijk toegankelijk en bieden veilige parkeergelegenheid voor je fiets terwijl je op de campus bent.', 'nl');

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
('MyConcept Lab', 'lorem ipsum', ARRAY['FACILITIES','STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/myConceptLab'),
('Main Study Landscape', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/studylandscapemain'),
('Study Landscape Tech & Design', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/studylandscapeit'),
('Study Landscape Logistics & IB', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/studylandscapelogistics'),
('Study Landscape Engineering', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/studylandscapeengineering'),
('Study Landscape PABO', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], 'https://lipsum.app/512x512', '/studyLandscapePabo'),
('Equipment', 'Looking to borrow equipement?', ARRAY['SERVICES']::category_enum[], 'https://lipsum.app/512x512', '/equipment'),
('Games', 'Unwind your mind with some games!', ARRAY['FACILITIES']::category_enum[], 'https://lipsum.app/512x512', '/games'),
('Lockers', 'Want to store your stuff for the day?', ARRAY['FACILITIES']::category_enum[], 'https://lipsum.app/512x512', '/lockers'),
('Study Abroad', 'Looking to study abroad? Sky is the limit!', ARRAY['SERVICES']::category_enum[], 'https://lipsum.app/512x512', '/studyabroad'),
('Parking', 'Do not know where to park your car, bike, or scooter?', ARRAY['FACILITIES']::category_enum[], 'https://lipsum.app/512x512', '/parking'),
('Campus Store', 'In need of school supplies? Visit the Campus Store!', ARRAY['FACILITIES', 'SERVICES'']::category_enum[], 'https://lipsum.app/512x512', '/campusStore')
('Courses Overview', 'Curious in exploring our courses? Get a flier by Student Info!', ARRAY['SERVICES']::category_enum[], 'https://lipsum.app/512x512', '/coursesOverview');