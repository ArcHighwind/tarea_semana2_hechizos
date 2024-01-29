-- Active: 1705978756250@@127.0.0.1@5432@api_spells@public
create Table tbl_spells
(
    id serial primary key ,
    nombre varchar(255),
    coste varchar(10),
    descripcion VARCHAR(255),
    efecto VARCHAR(255),
    aprendido TIMESTAMP DEFAULT current_timestamp
)

insert into tbl_spells
(nombre, coste, descripcion, efecto)
values
('Flare', '4', 'sends a small blast of fire that burns an enemy', 'low Fire Damage');

select * FROM tbl_spells 
