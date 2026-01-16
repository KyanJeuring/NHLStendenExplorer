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
  language_code TEXT DEFAULT 'en' NOT NULL
);

INSERT INTO carousel_item (title, description, language_code) VALUES
('Cargo Bike', 'You can find the cargo bike on campus — it was made in 1925 and is now over 100 years old. By the way, if needed, students can rent it from Student Info to help move their belongings to a new place.', 'en'),
('Bakfiets', 'Je kunt de bakfiets op de campus vinden - hij is gemaakt in 1925 en is nu meer dan 100 jaar oud. Trouwens, indien nodig, kunnen studenten hem huren bij Student Info om hun spullen naar een nieuwe plek te verplaatsen.', 'nl'),
('Metro Design', 'The entire NHL Stenden campus was built in a metro-style design. The atmosphere reflects the idea that learning is a journey that students are meant to follow.', 'en'),
('Metro Ontwerp', 'De hele NHL Stenden campus is gebouwd in een metro-stijl ontwerp. De sfeer weerspiegelt het idee dat leren een reis is die studenten moeten volgen.', 'nl'),
('Time to eat!', 'You can eat anywhere on campus, wherever you feel like it — which is actually really cool!', 'en'),
('Tijd om te eten!', 'Je kunt overal op de campus eten, waar je maar wilt - wat eigenlijk heel gaaf is!', 'nl'),
('One Table for All', 'In the canteen, students and staff sit together — no one is separated. Everyone is equal and can feel connected.', 'en'),
('Eén Tafel voor Allen', 'In de kantine zitten studenten en personeel samen - niemand wordt gescheiden. Iedereen is gelijk en kan zich verbonden voelen.', 'nl'),
('Student Associations', 'Students can also join student associations like "Think Wireless", "Helios", or "Studie Stad Emmen" to organize events, connect with others, and have fun together.', 'en'),
('Studentenverenigingen', 'Studenten kunnen ook lid worden van studentenverenigingen zoals "Think Wireless", "Helios" of "Studie Stad Emmen" om evenementen te organiseren, contact te maken met anderen en samen plezier te hebben.', 'nl'),
('Smart Study Spaces', 'The library also offers monitors that users can connect to as extended screens, making studying more modern and convenient. There are also power sockets, height-adjustable desks, and comfortable chairs to support a better learning experience.', 'en'),
('Slimme Studieruimtes', 'De bibliotheek biedt ook monitoren die gebruikers kunnen aansluiten als extra schermen, waardoor studeren moderner en handiger wordt. Er zijn ook stopcontacten, in hoogte verstelbare bureaus en comfortabele stoelen om een betere leerervaring te ondersteunen.', 'nl'),
('Writing Support', 'There is a Writing Center located at Student Info. If you want to book a meeting and get help with your writing, you can do it there by contacting them via a dedicated email to reserve a time slot.', 'en'),
('Schrijfondersteuning', 'Er is een Writing Center gevestigd bij Student Info. Als je een afspraak wilt maken en hulp wilt bij het schrijven, kun je dat daar doen door contact met hen op te nemen via een speciaal e-mailadres om een tijdslot te reserveren.', 'nl'),
('A small lifehack', 'There are plenty of books for children on level A1 in Dutch available in the library, which international students can use to practice and improve their language skills. Remember we all start from something small!', 'en'),
('Een kleine lifehack', 'Er zijn veel boeken voor kinderen in het Nederlands op niveau A1 beschikbaar in de bibliotheek, die internationale studenten kunnen gebruiken om hun taalvaardigheden te oefenen en te verbeteren. Onthoud dat we allemaal ergens klein beginnen!', 'nl'),
('Center for Entrepreneurship', 'At the Center for Entrepreneurship, you can join a 10-week program to explore your entrepreneurial ambitions — whether you are just curious or ready to start your own business. Several learning journeys are available alongside your studies. You can learn more about it on the official NHL Stenden website.', 'en'),
('Center for Entrepreneurship', 'Bij het Center for Entrepreneurship kun je deelnemen aan een programma van 10 weken om je ondernemende ambities te verkennen - of je nu gewoon nieuwsgierig bent of klaar bent om je eigen bedrijf te starten. Er zijn verschillende leertrajecten beschikbaar naast je studie. Je kunt er meer over leren op de officiële NHL Stenden-website.', 'nl'),
('HBO-Sportpas', 'All students in Emmen can get the HBO-Sportpas, which offers unlimited sports and discounts on activities like golf, skiing, go-karting, and more. You can also join affordable courses in tennis, padel, squash, or rowing. Free weekly sports like volleyball, basketball, and futsal are organized for NHL Stenden students — just check the website or school screens to sign up!', 'en'),
('HBO-Sportpas', 'Alle studenten in Emmen kunnen de HBO-Sportpas krijgen, die onbeperkt sporten en kortingen op activiteiten zoals golf, skiën, karten en meer biedt. Je kunt ook betaalbare cursussen volgen in tennis, padel, squash of roeien. Gratis wekelijkse sporten zoals volleybal, basketbal en futsal worden georganiseerd voor NHL Stenden-studenten - bekijk gewoon de website of schoolschermen om je aan te melden!', 'nl'),
('3D Robotic Arm', 'In the engineering department, there is a large 3D robotic arm capable of printing all kinds of objects — even sofas and giant plant pots you will see around campus. Keep an eye out for them next time!', 'en'),
('3D Robotarm', 'In de afdeling engineering is er een grote 3D-robotarm die allerlei objecten kan printen - zelfs banken en gigantische plantenpotten die je op de campus zult zien. Houd ze de volgende keer in de gaten!', 'nl');

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
  link_url TEXT NOT NULL UNIQUE
);

-- Clear any existing data to prevent duplicates
DELETE FROM explore_item;
ALTER SEQUENCE explore_item_id_seq RESTART WITH 1;

INSERT INTO explore_item (title, description, categories, image_url, link_url) VALUES
('Student Info', 'Help & important information.', ARRAY['SERVICES']::category_enum[], './photos/student-info.jpeg', '/studentInfo'),
('Canteen', 'Hot and cold meals, snacks and beverage options.', ARRAY['FACILITIES','SERVICES']::category_enum[], './photos/canteen.jpeg', '/canteen'),
('Library', 'The library with study spaces and resources.', ARRAY['FACILITIES']::category_enum[], './photos/library.jpeg', '/library'),
('IoT Lab', 'Open computer labs with up-to-date software for coursework.', ARRAY['FACILITIES','STUDY_AREAS']::category_enum[], './photos/iot-lab.jpeg', '/computerLab'),
('Career Services', 'Support for internships, CVs and career guidance.', ARRAY['SERVICES']::category_enum[], './photos/student-info.jpeg', '/careerServices'),
('Kennispoort Hub', 'Collaboration space connecting students with industry partners.', ARRAY['STUDY_AREAS','SERVICES']::category_enum[], './photos/kennispoort.jpeg', '/kennispoort'),
('MyConcept Lab', 'Hands-on innovation lab with 3D printing, prototyping, and fully equipped chemistry facilities.', ARRAY['FACILITIES','STUDY_AREAS']::category_enum[], './photos/myconcept-lab.jpeg', '/myConceptLab'),
('Main Study Landscape', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], './photos/main-study-landscape.jpeg', '/studylandscapemain'),
('Study Landscape Tech & Design', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], './photos/study-landscape-it.jpeg', '/studylandscapeit'),
('Study Landscape Logistics & IB', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], './photos/logistics-study-landscape.jpeg', '/studylandscapelogistics'),
('Study Landscape Engineering', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], './photos/study-landscape-engineering.jpeg', '/studylandscapeengineering'),
('Study Landscape PABO', 'Time to study!', ARRAY['STUDY_AREAS']::category_enum[], './photos/pabo-study-landscape.jpeg', '/studyLandscapePabo'),
('Equipment', 'Looking to borrow equipement?', ARRAY['SERVICES']::category_enum[], './photos/student-info.jpeg', '/equipment'),
('Games', 'Unwind your mind with some games!', ARRAY['FACILITIES']::category_enum[], './photos/games.jpeg', '/games'),
('Lockers', 'Want to store your stuff for the day?', ARRAY['FACILITIES']::category_enum[], './photos/lockers.jpeg', '/lockers'),
('Study Abroad', 'Looking to study abroad? The sky is the limit!', ARRAY['SERVICES']::category_enum[], './photos/studyAbroadDesk.jpeg', '/studyabroad'),
('Parking', 'Do not know where to park your car, bike, or scooter?', ARRAY['FACILITIES']::category_enum[], './photos/parking.jpeg', '/parking'),
('Campus Store', 'In need of school supplies and more? Visit the campus store!', ARRAY['FACILITIES', 'SERVICES']::category_enum[], './photos/campus-store.jpeg', '/campusStore'),
('Courses Overview', 'Curious about our courses at NHL Stenden Emmen? Come and grab a flier!', ARRAY['SERVICES']::category_enum[], './photos/coursesOverview.jpeg', '/coursesOverview'),
('Stones Restaurant', 'Good meals, coffee and many more!', ARRAY['FACILITIES','SERVICES']::category_enum[], './photos/stones-restaurant.jpeg', '/stonesRestaurant');

-- Category Translations
CREATE TABLE IF NOT EXISTS category_translation (
  category category_enum NOT NULL,
  language_code TEXT NOT NULL,
  label TEXT NOT NULL,
  PRIMARY KEY (category, language_code)
);

INSERT INTO category_translation (category, language_code, label) VALUES
('FACILITIES', 'en', 'Facilities'),
('STUDY_AREAS', 'en', 'Study Areas'),
('SERVICES', 'en', 'Services')
ON CONFLICT DO NOTHING;

INSERT INTO category_translation (category, language_code, label) VALUES
('FACILITIES', 'nl', 'Faciliteiten'),
('STUDY_AREAS', 'nl', 'Studiegebieden'),
('SERVICES', 'nl', 'Diensten')
ON CONFLICT DO NOTHING;

-- Explore Item Translations
CREATE TABLE IF NOT EXISTS explore_item_translation (
  id SERIAL PRIMARY KEY,
  explore_item_id INTEGER NOT NULL REFERENCES explore_item(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  UNIQUE (explore_item_id, language_code)
);

-- Seed NL translations mapped by link_url
INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Student Info', 'Hulp & belangrijke informatie.' FROM explore_item WHERE link_url = '/studentInfo'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Kantine', 'Warme en koude maaltijden, snacks en dranken.' FROM explore_item WHERE link_url = '/canteen'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Bibliotheek', 'De bibliotheek met studieruimtes en bronnen.' FROM explore_item WHERE link_url = '/library'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Computerlab', 'Open computerlabs met actuele software voor cursussen.' FROM explore_item WHERE link_url = '/computerLab'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Carrièreservices', 'Ondersteuning voor stages, cv''s en loopbaanadvies.' FROM explore_item WHERE link_url = '/careerServices'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Kennispoort Hub', 'Samenwerkingsruimte die studenten verbindt met partners uit het bedrijfsleven.' FROM explore_item WHERE link_url = '/kennispoort'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'MyConcept Lab', 'Hands-on innovatie lab met 3D-printen, prototyping en volledig uitgeruste chemiefaciliteiten.' FROM explore_item WHERE link_url = '/myConceptLab'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Studielandschap Hoofd', 'Tijd om te studeren!' FROM explore_item WHERE link_url = '/studylandscapemain'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Studielandschap Tech & Design', 'Tijd om te studeren!' FROM explore_item WHERE link_url = '/studylandscapeit'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Studielandschap Logistiek & IB', 'Tijd om te studeren!' FROM explore_item WHERE link_url = '/studylandscapelogistics'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Studielandschap Engineering', 'Tijd om te studeren!' FROM explore_item WHERE link_url = '/studylandscapeengineering'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Studielandschap PABO', 'Tijd om te studeren!' FROM explore_item WHERE link_url = '/studyLandscapePabo'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Apparatuur', 'Wil je apparatuur lenen?' FROM explore_item WHERE link_url = '/equipment'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Games', 'Ontspan je met wat activiteiten!' FROM explore_item WHERE link_url = '/games'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Kluisjes', 'Wil je je spullen voor de dag bewaren?' FROM explore_item WHERE link_url = '/lockers'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Studeren in het buitenland', 'Wil je in het buitenland studeren? De sky is de limit!' FROM explore_item WHERE link_url = '/studyabroad'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Parkeren', 'Weet je niet waar je je auto, fiets of scooter kunt parkeren?' FROM explore_item WHERE link_url = '/parking'
ON CONFLICT DO NOTHING;

INSERT INTO explore_item_translation (explore_item_id, language_code, title, description)
SELECT id, 'nl', 'Stones Restaurant', 'Lekkere gerechten koffie en nog meer!' FROM explore_item WHERE link_url = '/stonesRestaurant'
ON CONFLICT DO NOTHING;