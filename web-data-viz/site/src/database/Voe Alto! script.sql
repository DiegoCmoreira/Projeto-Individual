Create database VoeAlto;
use VoeAlto;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
fkJogador int,
foreign key (fkJogador) references Jogador(idJogador),
fkTime int,
foreign key (fkTime) references Time(idTime)
);

create table Jogador(
idJogador int primary key auto_increment,
tipo varchar(45),
altura char(3),
nivel varchar(45)
);

create table Time(
idTime int Primary key auto_increment,
nome varchar(45),
qtd_jogador char(8)
);

create table Historico(
idHistorico int primary key auto_increment,
qtd_vitoria char(8),
qtd_derrota char(8),
total_pontos char(8),
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario),
fkTime int,
foreign key (fkTime) references Time(idTime)
);



 