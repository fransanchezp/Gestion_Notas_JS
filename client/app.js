import { Nota } from './classes/Nota.js';
import { NotasService } from './classes/NotasService.js';
import { UI } from './classes/UI.js';

const formulario = document.getElementById('formulario-nota');
const tipoInput = document.getElementById('tipo');
const contenidoInput = document.getElementById('contenido');

const filtroFormulario = document.getElementById('filtro-formulario');
const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const tipo = tipoInput.value;
    const contenido = contenidoInput.value;
    const nota = new Nota(tipo, contenido);
    await NotasService.crearNota(nota);
    UI.mostrarNotas();
    formulario.reset();
});

filtroFormulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const year = yearInput.value;
    const month = monthInput.value;
    const notasFiltradas = await NotasService.filtrarPorMes(year, month);
    UI.mostrarNotasFiltradas(notasFiltradas);
});

window.onload = UI.mostrarNotas;
