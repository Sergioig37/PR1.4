
// obtengo el elemento root en una variable
    const raiz = document.querySelector(':root');
//extraigo una varible de root
    const valor_color = getComputedStyle(raiz).getPropertyValue("--color");
//muestro su valor
    console.log(valor_color)

// guardo el boton en una variable
    const boton=document.getElementById("boton");
// le añado el evento click y su función asociada    
    boton.addEventListener("click",cambioVariables)

function cambioVariables(){
    raiz.style.setProperty('--color', 'white');
    raiz.style.setProperty('--fondo', 'black');
    raiz.style.setProperty('--titulo', '100px');
    raiz.style.setProperty('--colorBorde', 'white');
    raiz.style.setProperty('--articulosImagen-color', 'white');
}


