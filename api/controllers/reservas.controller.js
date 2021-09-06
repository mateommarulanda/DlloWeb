const express = require('express')
const router = express.Router()

const PostgresService = require('../services/postgres.service')
const _pg = new PostgresService()

/**
 * Crear una reserva en base de datos   
 * @param {*} reserva Reservas a guardar '{id,lugar,hora}'
 * @returns informacion de la ejecucion en base de datos
 */

 const crearReserva = async (reserva) => {
    const sql = 'INSERT INTO public.reservas (id, lugar, hora) VALUES($1, $2, $3); '
    const datos = [reserva.id, reserva.lugar, reserva.hora]
    //reservas.push(reserva)
    return await _pg.ejecutarQuery(sql, datos)
}

/**
 * Consultar todos los usuarios de la base de datos 
 */
const consultarReserva = async (id) => {
    let sql = 'SELECT id, lugar, hora  FROM reservas'
    if (id) {
        sql += `WHERE id = $1`
        const datos = [id]
        return await _pg.ejecutarQuery(sql, datos)
    } else {
        return await _pg.ejecutarQuery(sql)
    }
}

/**
 * Eliminar reserva de la base de datos
 * @param {*} id id de la reserva
 * @returns 
 */
const eliminarReserva = async (id) => {

    const sql = 'DELETE FROM public.reservas WHERE id=$1';
    const datos = [id]
    return await _pg.ejecutarQuery(sql, datos)
}


const modificarReserva = async (reserva) => {
    const sql = 'UPDATE public.reservas SET lugar=$1, hora=$2 WHERE id=$3;'
    const datos = [reserva.lugar, reserva.hora, reserva.id]
    return await _pg.ejecutarQuery(sql, datos)
}

module.exports = {crearReserva, consultarReserva, eliminarReserva, modificarReserva}
