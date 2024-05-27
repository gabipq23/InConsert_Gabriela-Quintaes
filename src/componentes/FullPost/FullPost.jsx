import { useEffect, useState } from 'react'

export default function FullPost ({id}) {

    const baseUrl = 'https://inconsert-pb-13d11-default-rtdb.asia-southeast1.firebasedatabase.app/'

    const [ post, setPost ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ message, setMessage ] = useState(null)

   //consulta apenas um post
    useEffect(() => {
        fetch(`${baseUrl}postList/${id}.json`)
        .then(res => res.json())
        .then(post => setPost(post))
        .catch( error => setMessage(error.message))
        .finally(setIsLoading(false))
    }, [id])
    // ele direciona para o id correto
    // mas não exibe as informações
    // problema no fetch ???

  return (
    <div>
    
        {isLoading && <p>Carregando...</p>}
        {message && <p>{message}</p>}
        {post && (
          <section>
             
            <h1>{post.titulo}</h1>
            <p>{post.artista}</p>
            <p>{post.local}</p>
            <p>{post.descricao}</p>
          </section>
        )}
    </div>
  )
}

