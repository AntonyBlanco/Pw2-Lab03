# Pw2-Lab02
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>
    <tbody>
        <tr><td colspan="3"><span style="font-weight:bold;">Formato</span>: Guía de Práctica de Laboratorio / Talleres / Centros de Simulación</td></tr>
        <tr><td><span style="font-weight:bold;">Aprobación</span>:  2022/03/01</td><td><span style="font-weight:bold;">Código</span>: GUIA-PRLD-001</td><td><span style="font-weight:bold;">Página</span>: 1</td></tr>
    </tbody>
</table>
</div>
<div align="center">
    <span style="font-weight:bold;"><h2>INFORME DE LABORATORIO</h2></span>
</div>


<table>
<theader>
    <tr><th colspan="6" style="width:50%; height:auto; text-align:center">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
    <tr>
        <td>ASIGNATURA:</td><td colspan="5">Laboratorio de Programación Web 2</td>
    </tr>
    <tr>
        <td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">Ajax y NodeJS</td>
    </tr>
    <tr>
        <td>NÚMERO DE PRÁCTICA:</td><td>03</td><td>AÑO LECTIVO:</td><td>2022 A</td><td>NRO. SEMESTRE:</td><td>III</td>
    </tr>
    <tr>
        <td colspan="2">FECHA DE PRESENTACIÓN:</td><td>16-May-2022</td><td colspan="2">HORA DE PRESENTACIÓN:</td><td>23:55</td>
    </tr>
    <tr>
        <td colspan="3">INTEGRANTES:
        <ol>
        <li>Blanco Trujillo, Antony Jacob</li>
        <li>Cahuana Aguilar, Josué Mathías Miguel</li>
        <li>Hancco Velásquez, Jessica Geraldine</li>
        <li>Mayta Nolasco, Oliver Alessandro</li>
        <li>Umasi Cariapaza, Carlos Daniel</li>
        </ol>
        </td>
        <td colspan="2"> NOTA:</td>
        <td>     </td>
    </tr>
    <tr>
        <td colspan="6">DOCENTE:<br>
        Mg. Richart Smith Escobedo Quispe
        </td>
    </tr>
</tdbody>
</table>

<table>
    <theader>
        <tr>
            <th style="text-align:center">SOLUCIÓN Y RESULTADOS</th>
        </tr>
    </theader>
    <tbody>
        <tr>
            <td>
            I. SOLUCIÓN DE EJERCICIOS/PROBLEMAS
            <ol>
                <li>En grupos de 3 a 5 personas implemente una aplicación web que navegue sobre archivos Markdown y permita:</li>
                <ul>
                    <li>Listas los archivos Markdown disponibles</li>
                    <li>Ver el contenido de un archivo Markdown traducido a HTML</li>
                    <li>Crear nuevos archivos MarkDown y almacenarlos en el servidor</li>
                </ul>
                <li>La comunicación entre el cliente y el servidor tiene que ser usando JSON sólamente. El cliente debe usar AJAX para sus peticiones El servidor debe usar NodeJS Su aplicación debe ser de página única, es decir que sólo habrá un archivo index.html y nada más.</li>
                <li>Si los enlaces proporcionado en esta guía no le son suficientes, puede revisar códigos en Internet que le ayuden con cosas como ejemplos: listar un directorio en NodeJS; pero deberá incluir los enlaces correspondientes en sus archivos como comentarios y sólo podrá usar código de stackoverflow, incluir código de cualquier otra fuente está prohibido y se considerará actitud deshonesta.</li>
            </ol>
            </td>
        </tr>
        <tr>
            <td>
            II. SOLUCIÓN DEL CUESTIONARIO<br>
            <ul>
                <li>
                    <b>En el Ejemplo "Hola Mundo" con NodeJS. ¿Qué pasó con la línea: "Content type ….."?</b><br>
                    “método realiza muchas tareas útiles para respuestas simples que no son de transmisión: por ejemplo, asigna automáticamente el campo de encabezado de respuesta HTTP Content-Length (a menos que se haya definido previamente) y proporciona soporte automático de actualización de caché HEAD y HTTP.”. Extraído de la pagina oficial de Express en el módulo de: res.send()
                </li>
                jnjnjn
                <li>
                    <b>En los ejercicios. ¿En qué lugar debería estar el archivo poema.txt?</b><br>
                    Dentro de la carpeta estática que se definió en la línea “app.use(express.static('pub'))”, en este caso es la carpeta “./pub” en referencia de la ubicación actual del archivo del servidor.
                </li>
                <li>
                    <b>¿Entiende la expresión regular en el código y se da cuenta de para qué es útil?</b><br>
                    Reemplaza los saltos de línea(/n)  por <br> para hacer saltos en html lo cual ayuda a que se vea mejor el poema al renderizarse en el DOM.
                </li>
                <li>
                    <b>Note que la respuesta del servidor está en formato JSON, ¿Habrá alguna forma de verla directamente?</b><br>
                    La comunicación entre el cliente y el servidor es de strings principalmente, por lo tanto en vez de enviar un json podríamos enviar una texto directamente, pero esto no facilita la comunicación entre cliente y servidor porque la información no está organizada
                </li>
            </ul>
            </td>
        </tr>
        <tr>
            <td>
            III. CONCLUSIONES<br>
                <ul>
                    <li>Saber manejar y controlar los objetos de tipo JSON son de mucha importancia ya que a la hora de recibir la información la recibimos en forma de cadena, pero para manejar dicha información debemos pasarla a formato JSON, y si no conocemos la forma de manejar el json pues tampoco manejaremos adecuadamente la respuesta .</li>
                    <li>Se puede utilizar javascript en varios aspectos, desde su creación que se utilizaba para el front end y con la ayuda de node y express se puede crear un servidor y trabajar con javascript en el backend.</li>
                    <li>El uso de ajax es una ventaja para comunicarse con el servidor, y podemos tomar ventaja de ello en una gran mayoría de servidores que utilizan http y por lo tanto los métodos post y get.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <theader>
        <tr>
            <th style="text-align:center">RETROALIMENTACIÓN GENERAL</th>
        </tr>
    </theader>
    <tbody>
        <tr>
            <td>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <theader>
        <tr>
            <th style="text-align:center">REFERENCIAS Y BIBLIOGRAFÍA</th>
        </tr>
    </theader>
    <tbody>
        <tr>
            <td>
                <ul>
                    <li><a href="https://www.w3schools.com/nodejs/nodejs_intro.asp">https://www.w3schools.com/nodejs/nodejs_intro.asp</a></li>
                    <li><a href="https://nodejs.org/en/docs/guides/getting-started-guide/">https://nodejs.org/en/docs/guides/getting-started-guide/</a></li>
                    <li><a href="https://nodejs.dev/learn">https://nodejs.dev/learn</a></li>
                    <li><a href="https://www.w3schools.com/js/js_api_fetch.asp">https://www.w3schools.com/js/js_api_fetch.asp</a></li>
                    <li><a href="https://expressjs.com/es/">https://expressjs.com/es/</a></li>
                    <li><a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch">https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch</a></li>
                    <li><a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction">https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>