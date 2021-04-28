import React from "react";

import { NavBar } from "./navBar.js";
import { Jumbotron } from "./jumbotroon";
import { Card } from "./card";
import { Footer } from "./footer";
//create your first component
export function Home() {
	let personas = [
		{
			titulo: "Luis Suarez",
			descripcion:
				"Luis Alberto Suárez Díaz es un futbolista uruguayo. Juega como delantero y su equipo actual es el Atlético de Madrid de la Primera División de España. Es internacional absoluto con la selección de fútbol de Uruguay, de la cual es el máximo goleador histórico. También posee ciudadanía italiana.",
			imagen:
				"https://depor.com/resizer/a2hHLWCJk_1JWU3szMbQp9sc8_Y=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/33LT2MGLJRHIVNTLWFM2CJPDDI.jpg",
			buttonURL:
				"https://es.wikipedia.org/wiki/Luis_Su%C3%A1rez_(futbolista)"
		},
		{
			titulo: "Rubén Rada",
			descripcion:
				"Sus primeros pasos en la música fueron a los diez años como integrante de la comparsa de negros y lubolos Morenada2​. Su primer seudónimo fue Zapatito, originado en que a esa edad ya calzaba zapatos talla europea 434​. De los 15 a los 16 años salía en una murga que se ",
			imagen:
				"https://mus.uy/landing/wp-content/uploads/2016/04/rada.jpg",
			buttonURL: "https://es.wikipedia.org/wiki/Rub%C3%A9n_Rada"
		},
		{
			titulo: "Messi",
			descripcion:
				"Lionel Andrés Messi Cuccittini (Rosario, Santa Fe; 24 de junio de 1987), conocido como Leo Messi,7​ es un futbolista argentino que juega como delantero o centrocampista.8​9​ Ha desarrollado toda su carrera en el F. C. Barcelona de la Primera División de España y en la selección de Argentina, equipos de los que e",
			imagen:
				"https://atalayar.com/sites/default/files/styles/foto_/public/noticias/Atalayar_Leo%20Messi%20Barcelona_0.jpg?itok=moY7JlzF",
			buttonURL: "https://es.wikipedia.org/wiki/Lionel_Messi"
		},
		{
			titulo: "Carlos Gardel",
			descripcion:
				"Carlos Gardel fue un cantante, compositor y actor de cine uruguayo. Es el más conocido representante (del género) en la historia del tango. Iniciador y máximo exponente del tango canción,3​ fue uno de los intérpretes más importantes de la música popular mundial en la primera mitad del siglo xx,4​ por la calidad de su voz, por la cantidad de discos vendidos (como cantante y como compositor)",
			imagen:
				"https://upload.wikimedia.org/wikipedia/commons/f/fa/Gardel_color.jpg",
			buttonURL: "https://es.wikipedia.org/wiki/Carlos_Gardel"
		}
	];

	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="container ">
				<div className="row  justify-content-center">
					{personas.map((element, i) => {
						return (
							<Card
								key={i}
								titulo={element.titulo}
								descripcion={element.descripcion}
								imagen={element.imagen}
								buttonURL={element.buttonURL}
							/>
						);
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
}
