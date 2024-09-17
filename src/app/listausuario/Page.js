"use client"
import React, { useEffect, useState} from 'react'
import Pagina from "../components/Pagina"
import Usuario from '../../linkUsuario/Usuario';
import {Col, Row} from "react-bootstrap"
import Usuario from "../Components/Usuario"

export default function Page() {
    const [usuario, setUsuarios]= useState([])
    useEffect(()=>{
        BuscaAxios()
    }, [])

    async function BuscarAxios(){
        const busca = await SiAxios.get("dummyjson.com/users" );

        const retorno = busca.data.users;

        console.log(retorno)
        setUsuarios(retorno)
    }
  return (
    <>
    <Pagina tirulo = "Usuários">
        <Row>
            {setUsuarios.map(pessoa =>{
                return(
                    <Col>
                    <Usuario propUsuario={pessoa}/>
                    </Col>
                )
            })}

        </Row>

    </Pagina>
      
    </>
  )
}
