const productos = [
	{
		nombre: "Nike - Phantom GT2 FG",
		marca: "Nike",
        superficie: "FG",
		precio: 850,
		imagen: "imagenes/nike-azul.jpg"
	},
	{
		nombre: "Adidas - Predator Edge FG",
		marca: "Adidas",
        superficie: "FG",
		precio: 850,
		imagen: "imagenes/adidas-01.jpg"
	},
    
  {
    nombre: "Nike - phantom GT2 FG rosadas",
    marca: "Nike",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/nike-02.jpg"
  },
  {
    nombre: "Nike - Mercurial Vapor 15 Elite FG",
    marca: "Nike",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/nike-03.jpg"
  },
  {
    nombre: "Adidas - Adidas F50 Messi FG",
    marca: "Adidas",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/adidas-02.jpg"
  },
  {
    nombre: "Adidas - Adidas X Speedflow.1 FG",
    marca: "Adidas",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/adidas-03.jpg"
  },
  {
    nombre: "Nike - Superfly Elite FG",
    marca: "Nike",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/nike-04.jpg"
  },
  {
    nombre: "Nike - Tiempo legend 9 Elite FG",
    marca: "Nike",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/nike-05.jpg"
  },
  {
    nombre: "Nike - Tiempo Legend 10 Elite FG",
    marca: "Nike",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/nike-06.jpg"
  },
  {
    nombre: "Adidas - copa sense.1 fg",
    marca: "Adidas",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/adidas-04.webp"
  },
  {
    nombre: "Adidas - F50 crazyfast fg",
    marca: "Adidas",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/adidas-05.webp"
  },
  {
    nombre: "Adidas - F50 adizero fg",
    marca: "Adidas",
    superficie: "FG",
    precio: 850,
    imagen: "imagenes/adidas-06.webp"
  },
  
{
  nombre: "Nike Turf - Modelo 01",
  marca: "Nike",
  superficie: "TF",
  precio: 650,
  imagen: "imagenes/nike-01 TF.jpg"
},
{
  nombre: "Nike Turf - Modelo 02",
  marca: "Nike",
  superficie: "TF",
  precio: 650,
  imagen: "imagenes/nike-02 TF.webp"
},
{
  nombre: "Nike Turf - Modelo 03",
  marca: "Nike",
  superficie: "TF",
  precio: 650,
  imagen: "imagenes/nike-03 TF.jpg"
},
{
  nombre: "Adidas Turf - Modelo 01",
  marca: "Adidas",
  superficie: "TF",
  precio: 650,
  imagen: "imagenes/adidas-01 TF.jpg"
},
{
  nombre: "Adidas Turf - Modelo 02",
  marca: "Adidas",
  superficie: "TF",
  precio: 650,
  imagen: "imagenes/adidas-02 TF.jpg"
},
{
  nombre: "Adidas Turf - Modelo 03",
  marca: "Adidas",
  superficie: "TF",
  precio: 650,
  imagen: "imagenes/adidas-03 TF.webp"
}



];

function mostrarProductos(lista) {
	const contenedor = document.getElementById("productos");
	contenedor.innerHTML = "";

	lista.forEach((producto) => {
		const tarjeta = document.createElement("article");
		tarjeta.className = "producto";

		const titulo = document.createElement("h3");
		titulo.textContent = producto.nombre;

		const imagen = document.createElement("img");
		imagen.src = producto.imagen;
		imagen.alt = producto.nombre;

		const precio = document.createElement("p");
		precio.className = "precio";
		precio.textContent = `Bs ${producto.precio}`;

		const selector = document.createElement("select");

		const inicial = document.createElement("option");
		inicial.value = "";
		inicial.textContent = "Seleccionar talla";
		selector.appendChild(inicial);

		[40, 41, 42, 43, 44].forEach(talla => {
			const opcion = document.createElement("option");
			opcion.value = talla;
			opcion.textContent = `EUR ${talla}`;
			selector.appendChild(opcion);
		});

		const boton = document.createElement("a");
		boton.href = "#";
		boton.textContent = "CONSULTAR POR WHATSAPP";

		boton.addEventListener("click", (evento) => {
			evento.preventDefault();

			if (!selector.value) {
				alert("Selecciona una talla primero.");
				return;
			}

			const mensaje =
				`Hola FO CLEATS, quiero consultar por ` +
				`${producto.nombre}, talla EUR ${selector.value}, ` +
				`precio Bs ${producto.precio}. ` +
				`¿Está disponible?`;

			const url = "https://wa.me/59169200541?text=" +
				encodeURIComponent(mensaje);

			window.open(url, "_blank", "noopener,noreferrer");
		});

		tarjeta.append(imagen, titulo, precio, selector, boton);
		contenedor.appendChild(tarjeta);
	});
}


let marcaSeleccionada = "Todas";
let superficieSeleccionada = "Todas";

function actualizarCatalogo() {
  const lista = productos.filter(producto => {
    const coincideMarca =
      marcaSeleccionada === "Todas" ||
      producto.marca === marcaSeleccionada;

    const coincideSuperficie =
      superficieSeleccionada === "Todas" ||
      producto.superficie === superficieSeleccionada;

    return coincideMarca && coincideSuperficie;
  });

  mostrarProductos(lista);
}

function filtrar(marca) {
  marcaSeleccionada = marca;
  actualizarCatalogo();
}

function filtrarSuperficie(superficie) {
  superficieSeleccionada = superficie;
  actualizarCatalogo();
}


mostrarProductos(productos);
