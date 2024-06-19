function showRecipeDetails(recipe) {
    let message;
    switch (recipe) {
        case 'paella':
            message = 'Ingredientes: arroz, mariscos, azafrán, pimiento, aceite de oliva. Instrucciones: cocinar a fuego medio durante 20 minutos.';
            break;
        case 'cesar':
            message = 'Ingredientes: lechuga, crutones, queso parmesano, pollo, aderezo César. Instrucciones: mezclar todos los ingredientes y servir frío.';
            break;
        default:
            message = 'Receta no encontrada.';
            break;
    }
    alert(message);
}
