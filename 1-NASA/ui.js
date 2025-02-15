export function mostrarDatos(resultado) {
    let h_title = document.getElementById("titulo");
    let p_date = document.getElementById("fecha");
    let p_desc = document.getElementById("descripcion");
    let div_img = document.getElementById("c_multimedia");

    h_title.textContent = resultado.title;
    p_date.textContent = resultado.date;
    p_desc.textContent = resultado.explanation;

    let img = document.createElement("img");
    img.setAttribute("src", resultado.url);
    div_img.replaceChildren(img);
}