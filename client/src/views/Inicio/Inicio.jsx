import React from 'react'
import s from "./Inicio.module.css"
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDisplay, getPokemons, getPokemonsAPI, getPokemonsDB, getType } from '../../actions/actions';
import { useEffect } from 'react';




export const Inicio = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.totalpokemons)
    /* const display = useSelector(state => state.displayPokemon) */
    

    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getPokemonsDB())
        dispatch(getPokemonsAPI())
        dispatch(getType())
    },[])

    const prueba = pokemon.slice(0.12)

    const handleClick =()=>{
        dispatch(getDisplay([prueba]))
        
    }
    return (
        <body className={s.Body}>
            <div className={s.Titulo}>
            <h1 className={s.H1}>PikaPoke  </h1>
            </div>
            <div className={s.container}>
                <NavLink exact to="/Home" ><button className={s.Boton} onClick={()=>handleClick}>Inicio</button></NavLink>
            </div>
        </body>
    )
}