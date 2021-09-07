import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <StaticImage
        alt="Uvas Conde"
        src="../images/uvasconde.jpg"
      />
      <title>Clan Conde</title>
      <h1>Mucho mas que un Clan.</h1>
      <h1>CONDE DONYO DIOS DE LA TIERRA Y DE LOS MARES CREADOR DEL UNIVERSO Y PADRE DE TODO LO EXISTENTE</h1>
      <h2>La página web esta en construcción, ponte en contacto con WinOp si quieres colaborar.</h2>
      <StaticImage
        alt="canibalismo"
        src="../images/canibales.jpg"
      />
      <p><h1>¿qué aportó España a America?</h1>
Es difícil hacer una valoración breve de la presencia española en América: hablamos de cuatro siglos, de 1492 a 1898, de una presencia que iba desde los fuertes en Alaska y Dakota hasta la Patagonia, de islas perdidas en el Caribe a montañas peruanas a 5.000 metros de altura, de la vida de muchos millones de hombres en 14 generaciones, en lengua española y en muchas lenguas americanas.  
Por otra parte, durante casi 4 siglos, mientras Europa se desangraba en guerras infinitas, la América Hispana, una vez pacificada, apenas vió guerras, ni siquiera civiles. 
Es cierto que hubo batallas siempre en la frontera apache y en la frontera con los araucanos; también había piratas y guerras en zonas costeras contra ingleses o franceses(y sus indios aliados). Y está la asombrosa batalla de Mbororé (1641), de indios "protegidos" por el rey de España, armados y entrenados por jesuitas, venciendo a un ejército de esclavistas brasileños. Pero en ciudades de interior como Lima o Asunción la paz fue continua durante siglos (mientras que en España las guerras eran frecuentes, y las naciones indias independientes guerreaban sin cesar entre sí).  
Después, cuando llegó la independencia, en el siglo XIX, las naciones hermanas hispanoamericanas emprendieron largas series de guerras entre ellas, entre vecinos que hablaban la misma lengua y tenían la misma religión y similar historia. Además, pueblos enteros de indios que habían sido protegidos durante siglos por la Corona española fueron exterminados por las nuevas repúblicas independientes. 
Si hay trasferencia de tecnología, se civiliza 
Al contrario que algunas fuerzas coloniales que solo buscaban saquear recursos, los españoles levantaban ciudades, estructuras y aportaban tecnología en beneficio de todos. 
Hay que tener en cuenta que en la América precolombina no había monturas, casi no había animales de carga (excepto en los Andes, que usaban llamas y alpacas) ni tampoco herramientas básicas como la rueda o la polea.  El trabajo caía enseguida sobre las espaldas de porteadores, esclavos o semiesclavos. 
Incluso Wikipedia es capaz de hacer un repaso sencillo de cosas útiles para una civilización:  
- Nuevos cultivos útiles para la alimentación: vid, olivos, legumbres, arroz, frutos secos, trigo, cítricos (limón, naranjas), manzanas, peras, melocotones, higos, plátanos, caña de azúcar... 
- Ganadería: ovejas y vacas, desconocidas en el continente
- El caballo, que revolucionó la comunicación y las culturas americanas; otras monturas como el burro, la mula, incluso el humilde asno, significaron un avance real 
- Materias útiles como lino, cáñamo, sebo y alquitrán 
- Soluciones mecánicas que lo cambiaban todo como la rueda y la polea
- La noria para regar y moler y el arado para sembrar
- el hierro y la metalurgia toledana, de lo más moderno de Europa
- las técnicas cerámicas valencianas (para vajillas y azulejos) 
- la pólvora
- el papel y la imprenta y la misma escritura, desconocida por muchas culturas americanas
- el reloj mecánico, para ordenar las horas 
- la navegación marítima: astilleros, barcos, instrumentos de navegación...
- la cartografía, el conocimiento geográfico de un mundo nuevo y enorme
- técnicas modernas de minería
- técnicas hidráulicas: embalses y acueductos, regadíos... es famoso el "Sistema hidráulico del acueducto del Padre Tembleque" en México (del s.XVI, Patrimonio de la Humanidad)
- el molino de agua
- el sistema financiero: dinero, la moneda, la banca, las letras de cambio, sociedades mercantiles, etc...
- tapices y marroquinería, repujado, damasquinado, esmaltería, azabachería, etc... 
- la industria del vidrio (y las vidrieras)
- pintura y música al estilo español... que dio origen a estilos propios hispanoamericanos
- ingeniería civil eficaz: las culturas precolombinas desconocían el arco, solo tenían puentes de cuerda; los españoles llenaron América de puentes, carreteras, calzadas, canales... el Camino Real de México a Santa Fe, de 2.500 kilómetros, es Patrimonio de la Humanidad 
- el contacto con Asia, con el galeón anual que conectaba México con Filipinas
- el contacto entre productos y culturas americanas: unos tenían maíz, otros cacao, otros tabaco; pero fue solo el comercio hispánico el que hizo que estos productos americanos se extendieran con eficaz por América (patata, cacahuete, aguacate, vainilla, tomate, caucho, etc...) 
Los españoles aportaron a América la urbanística planificada, que originó ciudades Patrimonio de la Humanidad como Potosí y Sucre, en Bolivia; Cartagena de Indias y centro histórico de Santa Cruz de Mompox, en Colombia; ciudad vieja de La Habana y sus fortificaciones, Trinidad, centro histórico de Cienfuegos, centro histórico de Camagüey, en Cuba; Viejo San Juan, en Puerto Rico; centros históricos de Quito y Cuenca, en Ecuador; centros históricos de México, Oaxaca, Puebla, San Miguel de Allende, Guanajuato, Morelia, Zacatecas y Campeche, en México; distrito histórico de Panamá; centros históricos de Cuzco, Lima y Arequipa, en Perú; Antigua Guatemala, en Guatemala; Coro, en Venezuela, y otras muchas ciudades coloniales construidas por los españoles y que hoy son candidatas a figurar en la lista de la Unesco: Salta, en Argentina; Villa de Leyva, en Colombia, etc. 
Los hospitales españoles 
España llenó de hospitales América, y es una verdad histórica. En ellos se curaban blancos y negros, indios y mulatos.  
Ya en 1503 Isabel la Católica prescribe al gobernador Ovando de Cuba que "haga en las poblaciones donde él viera que fuera más necesario casa para hospitales en que se acojan y curen los pobres, así de los cristianos como de los indios." En 1509, en la isla de La Española, ya funcionaban los hospitales de San Nicolás de Bari, de San Buenaventura y de Concepción de la Vega. Y en Nueva España, Hernán Cortés, en 1521, fundó y financió la construcción del hoy llamado Hospital de Jesús, que todavía está en pie y funcionando.  
Después, los españoles construyeron en ese mismo virreinato los hospitales de San Lázaro (1521), dedicado a los leprosos, el de San Juan de Letrán (1540), el Real de Nuestra Señora del Rosario (1562), el de la Caridad del Nombre de Dios (1562), el de la Santa Veracruz (1575), el de Nuestra Señora de Monserrat (1580), el Real de El Nombre de Jesús (1580), el de San Bartolomé (1582), el de San Juan de Dios (1582), y otros. Donde se fundaban ciudades y monasterios aparecían hospitales.  
Las universidades...¡también para indios! 
En las colonias inglesas en Norteamérica, la primera universidad fue la Universidad de Harvard que se fundó en 1636, y la segunda la de Pensilvania en 1765 como escuela médica.  
Antes de que se fundara Harvard, la América hispana ya contaba con 13 universidades: en Santo Domingo (La Española, 1538), Lima (Perú, 1551), México (1551), Santiago (1558, en La Española), Bogotá (Colombia, 1580), Quito (1586), Pontificia de Lima (1608), Córdoba (Argentina, 1613), Santiago de Chile (1619), San Miguel de Chile (1621), la Pontificia (jesuita) de Bogotá (1621), la jesuita de Quito (1622) y la de Sucre (Bolivia, 1624)...  
A las universidades y a los distintos tipos de colegios de estudios superiores podían acudir indios. A la de México, en el siglo XVII, de hecho, acudían incluso filipinos considerados "indios japones libres vasallos de Su Majestad", como reclamaba el estudiante filipino Manuel de Santa Fe. Un estudio ("Los indios, el sacerdocio y la Universidad en Nueva España, siglos XVI-XVIII") cuenta 134 indios realizando estudios superiores en el siglo XVIII en México: en el seminario, en los 7 colegios universitarios de Puebla, en los 3 centros de los jesuitas en Oaxaca y en la Universidad.  
Una ordenanza de Nueva España de 1697 ordenaba que una cuarta parte de las becas para estudiantes se dedicase a indios, hijos de caciques, "que sepan lengua mexica, otomí o mazahua". Muchos indios de familia noble (la nobleza tlaxcalteca y otras noblezas nativas se mantuvieron y respetaron hasta la independencia) estudiaban en los seminarios, no para ser sacerdotes -excepto algún caso-, pero sí para ser líderes locales y funcionarios de diverso grado en sus regiones. 
Los jefes indios escribían al Rey con quejas... y el rey respondía 
El noble tlaxcalteca Julián Cirilo Castilla Aquihualcteuhtle escribe al rey y a las autoridades con un plan para un colegio solo para indios en 1753 (que no llegó a cristalizar, pero se debatió).   
Llegará a haber  colegios para señoritas indias, como el Real Colegio de Indias Doncellas de Nuestra Señora de Guadalupe. Su patrocinadora, la india noble Anna Ventura Gómez, en 1790 escribe quejándose al Rey porque la rectora ha permitido ingresar en el Colegio a una española.  
Era común que todo tipo de caciques indios escribieran con quejas al Rey en España... y el Rey a veces contestaba. Don Patricio de Hinachuba, jefe indio en las misiones de los Apalaches, en Florida, que hablaba bien español, había escrito una carta al rey en 1699 denunciando ciertos abusos y el rey respondió en 1700 con órdenes para las autoridades civiles: "Deseo grandemente que estos pobres caciques y nativos sean bien tratados y que los ayudéis, protejáis y defendáis, como es vuestro deber y he ordenado en repetidas cédulas". Cinco años después, los ingleses destruían a sangre y fuego estas comunidades. No constan muchos casos de jefes indios o africanos escribiendo a las ciudades holandesas ni al rey de Inglaterra con reivindicaciones: simplemente, otras potencias europeas no los consideraban súbditos. 
Intentos de utopía
Tata Vasco de Quiroga en Michoacán con sus pueblos hospital, los jesuitas con sus reducciones en el Paraguay, los franciscanos con las misiones de California y Apalaches... inspirados por la literatura utópica del siglo XVI, los religiosos intentaban crear pueblos de indios fuera de la influencia nefasta del hombre blanco y sus ciudades, su alcohol y su ambición. Establecían horarios razonables, de 8 horas laborales al día, con numerosos descansos en festivos de santos, Semana Santa, domingos, Navidad... y días "de libre disposición", que podían usarse para salir de la misión e ir a cazar, pescar, ver parientes lejanos.... Las misiones jesuitas funcionaron bien 
Las misiones no producían "para los misioneros" sino que producían para la misión y los misionados: eran cooperativas y colectivos, aunque con propiedades familiares, además de las comunales. El libro de James A. Sandos "Converting California" dice que es injusto comparar las misiones españolas con las plantaciones francesas del Caribe o los estados del sur de EEUU. Esas plantaciones buscaban enriquecer a sus dueños, mientras que las misiones españolas buscaban alimentar y sostener a sus habitantes. "El propósito de una misión era organizar una comunidad religiosa aislada que pudiera nutrirse a sí misma física y espiritualmente. El excedente de producción se usaba para alimentar a otras misiones, presidios y pueblos. El ánimo de lucro no se consideraba, al contrario que en las plantaciones, donde era la razón de su existencia", afirma Sandos. 
La esclavitud de indios, prohibida
Ya Isabel la Católica prohibió esclavizar indios: solo se admitían los casos de cautivos por guerras. Un indio cristiano nunca podía ser esclavo. Se daban casos de barcos españoles que atrapaban barcos franceses en guerra, con indios esclavos de los franceses, y debían ponerlos en libertad. 
A veces empresarios sin escrúpulos raptaban indios para hacerlos trabajar como esclavos. Cuando las autoridades provinciales se enteraban lo castigaban y liberaban a los indios 
A mitad del siglo XVI las órdenes religiosas convencieron al Rey de que los indios no debían pagar diezmo para el sostenimiento de la Iglesia, algo que los españoles pagaban sistemáticamente desde el siglo XIII. 
Los esclavos negros fugados de territorios enemigos podían convertirse en súbditos libres españoles si se bautizaban católicos. En Florida apareció en el siglo XVIII el Fuerte Mosé, un fuerte de soldados negros y sus familias, mujeres e hijos, con capitán negro y capellán franciscano, muchos nacidos en África y fugados de las plantaciones inglesas, libres y autogobernados como súbditos españoles. Había negros libres en muchas ciudades hispanoamericanas, muchos de ellos por haber participado en el ejército o las milicias 
Fuerte Mosé era una población negra libre legal, autogobernada, de súbditos españoles; en la América de lengua inglesa no hubo nada parecido hasta el siglo XIX.  
Cambios sociales e imperio de la ley
En muchas culturas indias, antes de llegar los españoles, los jefes podían matar a sus súbditos sin causa alguna, o pagando multas menores. Muchos hombres podían matar a sus mujeres (de las cuales podía tener varias, a las que trataban de forma distinta, unas preferidas, otras casi esclavas) o a sus bebés e hijos. Las indias chumash en California tenían la costumbre de abortar su primer bebé pensando que eso les haría más fértiles para otros partos (obviamente, la realidad era la contraria: unas morían y otras quedaban estériles). Muchas culturas practicaban el infanticidio por distintas razones. 
Los españoles establecieron leyes que no trataban a todos igual, pero que no dejaban los crímenes sin juzgar y castigaban los homicidios. Había tribunales y audiencias para presentar denuncias y recursos. La justicia española podía ser lenta, farragosa y llena de papeleo... en  parte, porque intentaba tomar en serio cada caso.  
El noble guerrero de Tlaxcala, Acxotécatl, reconocido como aliado de los españoles contra los aztecas, mató a su hijo de 13 años, el niño mártir San Cristóbal de Tlaxcala, por hacerse cristiano, y también a la madre de él (una de sus mujeres) por intentar defenderlo. En la cultura pagana quizá habría quedado impune, en la española un hombre que mata a su mujer e hijo debe ser juzgado y castigado. 
La vida de los niños, la de los ancianos, la de los enfermos, los bebés, incluso los esclavos... todas las vidas estaban protegidas por la ley en la América Hispana, con todos los abusos y las ineficacias procesales y corruptelas que se quiera señalar. Pero se acabó con la idea de que es correcto que cualquier fuerte podía matar a un débil, enfermo o niño. Es el tipo de cambio social que podemos llamar civilizar. 
Una comparativa de la tecnología transferida, el tipo de leyes y sociedades creadas, la limitación de la guerra y la violencia, la mejora en alimentación y comunicaciones, las libertades, la protección de los débiles, la educación y formación, los avances sanitarios y médicos... todo esto dará un balance positivo a cualquier visión global de la presencia española en América.  
Documental norteamericano sobre la expedición Anza de 1775: un ejemplo de expedición colonizadora; se valora su realidad multiétnica, la búsqueda de soluciones pacíficas, su sentido civilizador y explorador, etc...</p>
<StaticImage
        alt="Equipo de Clan Conde os Saluda"
        src="../images/condeteam.png"
      />
<h3>Los miembros del Clan Conde os Saluda!</h3>
<p>si quieres mejorar la web, ponte en contacto con winop, la web tiene el codigo abierto via github</p>
    </main>
  )
}

export function Dino() {
  return <StaticImage src="../images/uvasconde.jpg" alt="Uvas del Clan Conde" />
}

export default IndexPage
