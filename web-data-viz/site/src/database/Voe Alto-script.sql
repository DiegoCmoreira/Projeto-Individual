Create database VoeAlto;
use VoeAlto;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
tipo varchar(45),
altura char(3),
nivel varchar(45),
email varchar(45),
senha varchar(45)
);

create table Historico(
idHistorico int primary key auto_increment,
partida char(8),
vitoria char(8),
derrota char(8),
ponto char(8),
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario)
);

create table Avaliacao(
idAvaliacao int primary key auto_increment,
avaliacao varchar (45),
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario)
); 
