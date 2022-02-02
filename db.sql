CREATE DATABASE fish;

USE fish;

CREATE TABLE families (
    id_family INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    family_name VARCHAR(100)
);

CREATE TABLE species (
    id_specie INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    specie_name VARCHAR(100),
    scientific_name VARCHAR(150),
    picture VARCHAR(500),
    id_family INT NOT NULL,
    FOREIGN KEY (`id_family`) REFERENCES `families` (`id_family`)
);

INSERT INTO families (family_name) VALUES 
('Atherinidae'), ('Caproidae'), ('Balitoridae'), ('Cyprinidae'),
('Gasterosteidae'), ('Petromyzontidae'), ('Carcharhinidae'), ('Scyliorhinidae'),
('Triakidae'), ('Hexanchidae'), ('Lamnidae'), ('Sparidae');

INSERT INTO species (specie_name, scientific_name, picture, id_family) VALUES (
    'Akermuxarra', 'Diplodus puntazzo',
    'https://eu.wikipedia.org/wiki/Akermuxar#/media/Fitxategi:Diplodus_puntazzo_Italy.jpg',
    12
),(
    'Abixoi txikia', 'Atherina boyeri',
    'https://eu.wikipedia.org/wiki/Abixoi_txiki#/media/Fitxategi:Atherina_boyeri_Sardinia.jpg',
    1
),(
    'Basurde-arraina', 'Capros aper',
    'https://eu.wikipedia.org/wiki/Basurde-arrain#/media/Fitxategi:Caproidae_-_Capros_aper.JPG',
    2
),(
    'Zarbo arrunta', 'Gobio gobio',
    'https://eu.wikipedia.org/wiki/Zarbo_arrunt#/media/Fitxategi:Riviergrondel.jpg',
    4
),(
    'Iberiar zarboa', 'Gobio lozanoi',
    'https://eu.wikipedia.org/wiki/Iberiar_zarbo#/media/Fitxategi:Gobio_lozanoi_01_by-dpc.jpg',
    4
),(
    'Arrain hiruarantza', 'Gasterosteus aculeatus',
    'https://eu.wikipedia.org/wiki/Arrain_hiruarantza#/media/Fitxategi:Gasterosteus_aculeatus.jpg',
    5
),(
    'Tintoleta', 'Prionace glauca',
    'https://eu.wikipedia.org/wiki/Tintoleta#/media/Fitxategi:Tibur%C3%B3n_azul_(Prionace_glauca),_canal_Fayal-Pico,_islas_Azores,_Portugal,_2020-07-27,_DD_28.jpg',
    7
),(
    'Katuarraina', 'Scyliorhinus canicula',
    'https://eu.wikipedia.org/wiki/Katuarrain#/media/Fitxategi:Scyliorhinus_canicula.jpg',
    8
),(
    'Pinpirina', 'Galeus melastomus',
    'https://eu.wikipedia.org/wiki/Pinpirin#/media/Fitxategi:Galeus_melastomus_Sardinia.jpg',
    8
),(
    'Akermuxarra', 'Diplodus puntazzo',
    'https://eu.wikipedia.org/wiki/Akermuxar#/media/Fitxategi:Diplodus_puntazzo_Italy.jpg',
    12
),(
    'Muxar ezpainlodia', 'Diplodus cervinus',
    'https://eu.wikipedia.org/wiki/Muxar_ezpainlodi#/media/Fitxategi:Diplodus_cervinus_cervinus.jpg',
    12
),(
    'Boga', 'Boops boops',
    'https://eu.wikipedia.org/wiki/Boga_(arraina)#/media/Fitxategi:Boops_boops_Karpathos_01.JPG',
    12
);
