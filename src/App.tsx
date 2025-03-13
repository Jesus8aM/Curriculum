import './App.css';

// Definimos el componente funcional App
function App() {
  return (
    
    <>{/* Inicio del Fragmento donde se encapsulan los elementos sin agregar un nodo extra en el DOM*/}
      
      <div>{/* Inicio del Contenedor principal del contenido del CV */}
        {/* Título del CV */}
        <h1 style={{ textAlign: "center", fontSize: "40px", fontFamily: "Arial" }}>
          CV DE FABIÁN DE JESÚS OCHOA MORALES
        </h1>
        
        {/* Sección de información personal con enlaces a redes sociales */}
        <h3 style={{ textAlign: "center" }}>
          <p>Cunduacán, Tabasco, México</p>
          
          {/* Enlace a LinkedIn */}
          <a href="https://www.linkedin.com/in/fabi%C3%A1n-ochoa-11310827b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" className="LinkedIn" alt="LinkedIn" style={{ width: "42px", height: "42px" }} />
          </a>
          
          {/* Enlace a GitHub */}
          <a href="https://github.com/Jesus8aM" target="_blank">
            <img src="https://www.pngall.com/wp-content/uploads/13/Github-Logo-PNG.png" className="GitHub" alt="GitHub" style={{ width: "42px", height: "42px" }} />
          </a>
          
          {/* Enlace a correo electrónico */}
          <a href="mailto:jo733656@gmail.com" target="_blank">
            <img src="https://th.bing.com/th/id/R.f96c85c30008f4e1924bcfd53a5c20dd?rik=WXdCaMere70g7A&pid=ImgRaw&r=0" className="Email" alt="Email" style={{ width: "45px", height: "42px" }} />
          </a>
          
          {/* Enlace a número de teléfono */}
          <a href="tel:+529931080343" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/6933/6933387.png" className='Phone' alt="Phone" style={{ width: "45px", height: "44px" }} />
          </a>
        </h3>

        {/* Sección de educación */}
        <h1>Educación</h1>
        <hr />
        <p style={{ textAlign: "justify" }}>
          {/* Lista de instituciones educativas y años de egreso */}
          ° Universidad Juárez Autónoma de Tabasco -- Carretera Cunduacán-Jalpa KM. 1 Col. La Esmeralda, Cunduacán, Tabasco, México. <br />
          ° Último Grado: 11vo Semestre <br />
          ° Año de Egreso: 2026 <br /><br /><br />
          {/* Información similar para cada nivel educativo previo */}
          ° Colegio de Bachilleres de Tabasco -- Vinicio Campos Landero s/n, 86690 Cunduacán, Tabasco, México. <br />
          ° Último Grado: 6to Semestre <br />
          ° Año de Egreso: 2020 <br /><br /><br />
          ° Secundaria Estatal General Lic. Manuel Sánchez Mármol -- Cerrada 18 de Marzo número 10, Colonia Centro, Cunduacán, Tabasco, México. <br />
          ° Último Grado: 3er Año <br />
          ° Año de Egreso: 2017 <br /><br /><br />
          ° Escuela Primaria Adán Pérez Rodríguez -- Calle Miguel Hidalgo y Costilla, Colonia Centro, Barrio Santiaguito, Cunduacán, Tabasco, México. <br />
          ° Último Grado: 6to Año <br />
          ° Año de Egreso: 2014
        </p>

        {/* Sección de experiencia laboral */}
        <h1>Experiencia Laboral</h1>
        <hr />
        <p style={{ textAlign: "justify" }}>
          {/* Detalles de cada empleo */}
          ° FOTOGRAFIA Y DISEÑO OCHOA -- Cunduacán, Tabasco <br />
          ° Diseñador -- Empresa Familiar desde 1998 <br />
          ° Actividades Realizadas <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Toma de fotos en distintos eventos <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Renta de Togas y Birretes de graduación <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Diseño, Restauracion y Ampliacion de Fotografias <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Cuadros, Albunes, Tablas, Llaveros, Tazas, Camisas <br />
          ° Tecnologias Usadas (PC con Windows 11 y Photoshop 2025, Camaras fotograficas Nikon, Impresoras de la marca Canon) <br /><br /><br />
          {/* Información de otros trabajos */}
          ° CEDIS SORIANA -- Villahermosa, Tabasco <br />
          ° Picker Almacenista -- Marzo/Mayo 2024 <br />
          ° Actividades Realizadas <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Manejo de Montacargas para el surtido de mercancia a todas las tiendas <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Manejo de Patin Hidraulico para el surtido de mercancia a todas las tiendas <br />
          ° Tecnologias Usadas (PC con Windows 10 para consulta de nomina y registros de entradas y salidas, Radio de Frecuencia para el escanéo de productos) <br /><br /><br />
          ° TIENDAS WALDO'S -- Cunduacán, Tabasco <br />
          ° Almacenista -- Noviembre/Diciembre 2023 <br />
          ° Actividades Realizadas <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Control de inventarios de productos <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Merma de productos <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Limpieza y acomodo <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Colocación de precios <br />
          ° Tecnologias Usadas (PC con Windows 10 para el registro de entradas y salidas)
        </p>

        {/* Sección de certificaciones */}
        <h1>Certificaciones</h1>
        <hr />
        <p style={{ textAlign: "justify" }}>
          ° CURADOR DE DATOS -- Cunduacán, Tabasco <br />
          ° Empresa Carlos Slim -- Septiembre 2024
        </p>
      </div> {/* Fin del Contenedor principal */}
    </> // Fin del Fragmento
  );
} // Fin del componente funcional App

// Exportamos el componente para su uso en otros archivos
export default App;



