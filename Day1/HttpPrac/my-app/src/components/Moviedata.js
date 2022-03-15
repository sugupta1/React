import React,{useState,useRef} from "react";
const Moviedata = ()=>{
    const [movieData, setMovieData] = useState([]);
    const title = useRef();
    const director = useRef();
    const fetctData = async ()=>{
        const responce = await fetch('https://swapi.dev/api/films/');
        let data = await responce.json();
        data = data.results.map(item =>{ 
            return {title:item.title, director:item.director}
        })
        //console.log(data);
        setMovieData(data);
    } 
    const movieDataHandler = ()=>{
        // fetch('https://swapi.dev/api/films/')
        //     .then(responce=> responce.json())
        //     .then(data=> console.log(data));
        fetctData();
    }
    const updateData = async (updatMmovieData)=>{
        const responce  = await fetch('https://httptest-b1e0c-default-rtdb.firebaseio.com/movie.json'
        ,{
            method:'POST',
            body:JSON.stringify(updatMmovieData),
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(responce);
    }
    const addMovieHandler = ()=>{
        const movieUpdatedata = {title:title.current.value, director:director.current.value}
        updateData(movieUpdatedata);
    }
    return(
        <div>
            <label htmlFor="title">Title</label>
            <input id="titile" type='text' ref={title}/>
            <label htmlFor="dir">director</label>
            <input id="dir" type='text'ref={director}/>
            <button onClick={addMovieHandler}>Add Movie</button>
            <button onClick={movieDataHandler}>{'GetMovieData'}</button>
            <ul>
                {movieData.map(item=>{
                    return <li key={item.title}>{`${item.title} = ${item.director}`}</li>
                })}
            </ul>
        </div>
    );
}
export default Moviedata;