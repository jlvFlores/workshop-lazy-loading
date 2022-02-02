const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const accion = (entry) => {
    const nodo = entry.target;
    console.log("hola");

    observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(accion);
});

export const registerImage = (imagen) => {
    observer.observe(imagen);
};
