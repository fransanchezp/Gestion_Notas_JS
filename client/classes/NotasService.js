export class NotasService {
    static API_URL = 'http://localhost:3000/api/notas';

    static async obtenerNotas() {
        const respuesta = await fetch(this.API_URL);
        return await respuesta.json();
    }

    static async crearNota(nota) {
        await fetch(this.API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nota)
        });
    }

    static async filtrarPorMes(year, month) {
        const respuesta = await fetch(`${this.API_URL}/filtrar/${year}/${month}`);
        return await respuesta.json();
    }
}
