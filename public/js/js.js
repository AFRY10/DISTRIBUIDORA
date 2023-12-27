(function () {
    // Código de la función aquí
    window.addEventListener("scroll", function () {
        var header = document.querySelector("nav");

        header.classList.toggle("menu-fijo", window.scrollY > 0);
    })
})();


function buscar() {
    var searchInput = document.getElementById("searchInput");
    var productCards = document.querySelectorAll(".section-main_cards");

    var searchTerm = searchInput.value.toLowerCase();

    productCards.forEach(function (card) {
        var cardTitle = card.querySelector(".section--main_cards_title").textContent.toLowerCase();
        var isVisible = cardTitle.includes(searchTerm);
        card.style.display = isVisible ? "block" : "none";
    });
}
function modal(id) {

    const header = document.querySelector("header");
    const remove_quienes_somos = document.getElementsByClassName('remove')[0];
    remove_quienes_somos.classList.add('remove_quienes_somos');
    const quienes_somos = document.getElementById('quienes_somos');
    quienes_somos.classList.add('quienes_somos');
    const contenedor = document.getElementById('products');
    const buscador = document.getElementById('buscador');

    // Limpiar clases anteriores
    header.className = " ";

    if (id === 'tipo_1') {
        header.classList.add('img-licor');
        buscador.innerHTML = '<input type="text" id="searchInput" placeholder="Ejemplo Aguardiente litro tapa verde" oninput="buscar()">';

        const imagen_licor = [
            { src: '/image/licor/Aguardiente/Aguadiente-Media-Verde.jpg', alt: 'Aguardiente tapa verde', descripcion: 'Aguardiente Media tapa verde' },
            { src: '/image/licor/Aguardiente/Aguardiente-Litro-Verde-.jpg', alt: 'Aguardiente tapa verde', descripcion: 'Aguardiente Litro tapa verde' },
            { src: '/image/licor/Aguardiente/Aguardiente-Garrafa-Verde.jpg', alt: 'Aguardiente tapa verde', descripcion: 'Aguardiente Garrafa tapa verde' },
            { src: '/image/licor/Aguardiente/Aguardiente-Media-Azul.jpg', alt: 'Aguardiente tapa azul', descripcion: 'Aguardiente Media tapa azul' },
            { src: '/image/licor/Aguardiente/Aguardiente-Litro-Azul.jpg', alt: 'Aguardiente tapa azul', descripcion: 'Aguardiente Litro tapa azul' },
            { src: '/image/licor/Aguardiente/Aguardiente-Garrafa-Azul.jpg', alt: 'Aguardiente tapa azul', descripcion: 'Aguardiente Garrafa tapa azul' },
            { src: '/image/licor/Aguardiente/Aguardiente-Media-Rojo.jpg', alt: 'Aguardiente tapa roja', descripcion: 'Aguardiente Media tapa Rojo' },
            { src: '/image/licor/Aguardiente/Aguardiente-Litro-Rojo.jpg', alt: 'Aguardiente tapa roja', descripcion: 'Aguardiente Litro tapa Rojo' },
            { src: '/image/licor/Aguardiente/Aguardiente-Garrafa-Rojo.jpg', alt: 'Aguardiente tapa roja', descripcion: 'Aguardiente Garrafa tapa Rojo' },
            { src: '/image/licor/wisky/Whisky-Buchanans_Deluxe_375ml.jpg', alt: 'Whisky buchanans delux', descripcion: 'Whisky Media buchanans delux' },
            { src: '/image/licor/wisky/WHISKY-BUCHANANS-MASTER-BOTELLA-1-litro.jpg', alt: 'Whisky buchanans master', descripcion: 'Whisky Litro buchanans master ' },
            { src: '/image/licor/wisky/WHISKY-BUCHANANS-AnEJO-12-ANOS-LITRO.jpg', alt: 'Whisky buchanans anejo', descripcion: 'Whisky Litro buchanans anejo' },
       
        ];

        function generarImagenHTML(src, alt, descripcion) {
            return `                 
                    <div class="section-main_cards">
                        <figure class="section--main_cards_image section">
                            <img src="${src}" alt="${alt}">                    
                        </figure>
                        <span class="section--main_cards_title title ">${descripcion}</span>
                    </div>
                `;
        }

        function agregarImagenesAlContenedor(contenedor, imagen_licor) {
            let imagenesHTML = '';
            for (const imagen of imagen_licor) {

                imagenesHTML += generarImagenHTML(imagen.src, imagen.alt, imagen.descripcion);

            }
            contenedor.innerHTML = imagenesHTML;
        }

        agregarImagenesAlContenedor(contenedor, imagen_licor);


    } else if (id === 'tipo_2') {
        header.classList.add('img-vino');
    } else if (id === 'tipo_3') {
        header.classList.add('img-cerveza');
    } else if (id === 'tipo_4') {
        header.classList.add('img-bebidas-sin-alcohol');
    } else if (id === 'tipo_5') {
        header.classList.add('img-vaporizadores');
    } else if (id === 'tipo_6') {
        header.classList.add('img-confiteria');
    } else if (id === 'tipo_0') {
        quienes_somos.classList.remove('quienes_somos');
        remove_quienes_somos.classList.remove('remove_quienes_somos');

    }

}




