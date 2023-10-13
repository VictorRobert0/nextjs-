import { getCookie } from "cookies-next"
import { useEffect } from "react"
import {verifica} from '../services/user'

export default function Home() {

  return (
    <div>
      Pagina segura - Perfil do usuário
    </div> 
  )
}

export const getServersideProps = async ({req, res}) =>{
  try {
    const token = getCookie('authorization', {req, res })
    if(!token) throw new Error('Token inválido')

    verifica(token)
    return {
        props:{}
    }
    } catch (err) {
      return{
        redirect:{
          permanent: false,
          destination: '/login'
        },
        props:{}
    }
    }
}