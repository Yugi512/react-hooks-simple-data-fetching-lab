import {React , useState , useEffect} from "react";


function App({ }){
    const [dogImage, setDogImage] = useState("")
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() =>{

        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {
                setDogImage(data.message)
                setLoaded(!isLoaded)
        })



    },[])

    if (!isLoaded) return <p>Loading...</p>;

    return (
        <div>
            <img src={dogImage} alt="A Random Dog"></img>
        </div>
    )
}

export default App;
