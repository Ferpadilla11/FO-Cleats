const productos = [
	{
		nombre: "Nike - Modelo 01",
		marca: "Nike",
		precio: 850,
		imagen: "imagenes/nike-azul.jpg"
	},
	{
		nombre: "Adidas - Modelo 01",
		marca: "Adidas",
		precio: 850,
		imagen: "imagenes/adidas-01.jpg"
	},
    
  {
    nombre: "Nike - Modelo 02",
    marca: "Nike",
    precio: 850,
    imagen: "imagenes/nike-02.jpg"
  },
  {
    nombre: "Nike - Modelo 03",
    marca: "Nike",
    precio: 850,
    imagen: "imagenes/nike-03.jpg"
  },
  {
    nombre: "Adidas - Modelo 02",
    marca: "Adidas",
    precio: 850,
    imagen: "imagenes/adidas-02.jpg"
  },
  {
    nombre: "Adidas - Modelo 03",
    marca: "Adidas",
    precio: 850,
    imagen: "imagenes/adidas-03.jpg"
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

function filtrar(marca) {
	const lista = marca === "Todas"
		? productos
		: productos.filter(p => p.marca === marca);

	mostrarProductos(lista);
}

mostrarProductos(productos);
