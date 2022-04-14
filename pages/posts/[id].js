function Post({data}) {
    return (
        <div>
           <h1>
               Post info
           </h1>
            <div>
                Title - {data.title}
            </div>
        </div>
    )
}

export async function getServerSideProps({query}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${query.id}`)
    const data = await res.json()

    return { props: { data } }
}

export default Post;
