import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  posts: any;
  constructor() { 
    this.posts = [
			{
				title: 'perros espaciales de la URSS',
				date: `Publicado el dia ${new Date().toLocaleDateString()}`,
				content:
					'Entre los años cincuenta y sesenta del siglo XX, la URSS estaba empeñada en batir a los EE UU en la carrera espacial —uno de los frentes donde se libraba la Guerra Fría—. Durante ambas décadas y antes de atreverse con astronautas humanos, lanzaron al espacio a más de medio centenar de perros, algunos de los cuales se convirtieron, merced a la propaganda, en héroes populares de fama mundial. Un libro recuerda ahora el impacto social de los Soviet Space Dogs (Perros espaciales soviéticos).',
			},
			{
				title: 'Laika',
				date: `Publicado el dia ${new Date().toLocaleDateString()}`,
				content:
					'El 3 de noviembre de 1957, Laika (en ruso, Ladradora) fue el primer ser vivo nacido en la Tierra en dar una vuelta en torno al planeta. La perrilla, de 3 años de edad, voló a bordo del Sputnik 2 y murió a bordo de la nave espacial unas horas después del lanzamiento a causa del sobrecalentamiento del ingenio. Aunque la URSS mantuvo en secreto el momento y las causas del fallecimiento hasta 2002 y sostuvo que la perra había viajado seis días en la nave hasta el agotamiento del oxígeno, el régimen presentó a Laika como un símbolo del "sacrificio patriótico".',
			},
			{
				title: 'Recogidos de las calles de Moscú',
				date: `Publicado el dia ${new Date().toLocaleDateString()}`,
				content:
					'Al igual que Laika, todos los demás astronautas caninos eran perros callejeros recogidos de las calles de Moscú —se les consideraba más valientes y resistentes que los de razá—,  robustos, de buen carácter, "fotogénicos" y de tamaño inferior a 35 centímetros de largo para que pudieran adaptarse a los minúsculos habitáculos en los que debían permenacer inmóviles —estaban atados por correajes y un arnés— cuando eran lanzados al espacio. Hubo una gran controversia mundial sobre el maltrato animal en torno al caso de Laika.',
			},
			{
				title: '"Legendarios"',
				date: `Publicado el dia ${new Date().toLocaleDateString()}`,
				content:
					'El libro Soviet Space Dogs, con un ensayo de Olesya Turkina, del State Russian Museum, quiere rendir homenaje "mediante la muestra de objetos efímeros" al "hecho trascendental" de que los perros astronautas de la URSS "se convirtieron en legendarios".',
			},
			{
				title: 'Carrera espacial',
				date: `Publicado el dia ${new Date().toLocaleDateString()}`,
				content:
					'El pleno auge de la Guerra Fría, el líder soviético, Nikita Kruschev, que asumió el mando de la Unión Soviética dos años después de la muerte de Joseph Stalin, se enroló en una carrera espacial contra Estados Unidos, una disputa de poder ampliamente expuestas en la propaganda de ambos países.',
			},
			{
				title: 'Perros espaciales',
				date: `Publicado el dia ${new Date().toLocaleDateString()}`,
				content:
					'La selección de perros que pudieran ser enviados al espacio siguió algunos criterios. Primero, debido al tamaño del cohete, el animal podría pesar un máximo de 7 kg. Los perros de raza y con pedigrí eran considerados demasiado mimados e incapaces de alcanzar buenos resultados en los cursos de "supervivencia en situaciones graves". Por tanto, el "escuadrón de perros cosmonautas" fue reclutado, principalmente, en las calles. Laika, por ejemplo, vagaba por las calles de Moscú cuando fue reclutada.',
			}
    ];
  }

  ngOnInit(): void {
		
  }

}
