import { useEffect, useState  } from "react"
import "../App.css";

const App =() =>{

    const [data, setData] = useState("")

   //skeleton react to load a page or react spinners as a load bar
    // Runs handleFetch just once, componentDidMount equivalant
    useEffect(()=> {
        handleFetch()
    },  [])

    // log the data has changed when DATA has been change
    useEffect(() =>{
        console.log("the datas has change")
    }, [data])



    const handleFetch = async () =>{
        const response = await fetch(`https://catfact.ninja/fact`, {
            method: "GET",
          })
        // console.log(response)
        const data = await response.json()
        //console.log(data.fact)
        setData(data)
        
    }



    return (
        <div>
            <h1>bojo</h1>
            {/* //check if data fact it exist if does return data.fact */}
            <p>{data.fact  ? data.fact: "click ioiuthe button ljdgdklto get your quote"}</p> 
            <button onClick = {handleFetch}>click</button>


        </div>
    )
}


export default App