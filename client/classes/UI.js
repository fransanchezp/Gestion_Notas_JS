import { NotasService } from './NotasService.js';

export class UI {
    static async mostrarNotas() {
        const listaNotas = document.getElementById('listaNotas');
        listaNotas.innerHTML = '';
        const notas = await NotasService.obtenerNotas();
        notas.forEach((nota) => {
            const notaElemento = document.createElement('div');
            notaElemento.classList.add('nota');
            notaElemento.innerHTML = `
        <p><strong>Tipo:</strong> ${nota.tipo}</p>
        <p><strong>Contenido:</strong> ${nota.contenido}</p>
        <p><strong>Fecha de Creación:</strong> ${new Date(nota.fechaCreacion).toLocaleString()}</p>
      `;
            listaNotas.appendChild(notaElemento);
        });
    }

    static mostrarNotasFiltradas(notas) {
        const listaNotas = document.getElementById('listaNotas');
        listaNotas.innerHTML = '';
        notas.forEach((nota) => {
            const notaElemento = document.createElement('div');
            notaElemento.classList.add('nota');
            notaElemento.innerHTML = `
            <p><strong>Tipo:</strong> ${nota.tipo}</p>
            <p><strong>Contenido:</strong> ${nota.contenido}</p>
            <p><strong>Fecha de Creación:</strong> ${new Date(nota.fechaCreacion).toLocaleString()}</p>
          `;
            listaNotas.appendChild(notaElemento);
        });
    }
}
