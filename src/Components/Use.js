import react,{useState, useEffect,useRef} from 'react'


const UseRef = () => {
    
    const [myData, setMyData] = useState("")
    // const [count, setCount] = useState(0)

    const count = useRef(10);
    console.log("~ file:useRef.js ~line 11 ~ useRef ~count", count);

    useEffect(() => {
        // setCount(count+1)
        count.current = count.current + 1;
},)

    return (
        <>
            <input
                type='text'
                value={myData}
                onChange={(e) => setMyData(e.target.value)}
            />
        
            <p>The number of items render : {count.current}</p>
        
        
        </>




    )

}


export default UseRef


// import react, { useState, useRef } from 'react'

// const UseRef = () => {
//     const [myData, setMyData] = useState("")
    
//     const inputElement = UseRef("")

//     const changeStyle = () => {
//         console.log("~ file:useRef.js ~line 11 ~ useRef ~count", inputElement)
//     };
//     return (
//         <>
//             <input
//             ref = {inputElement}
//             type = "text"
//             value = {myData}
//             onChange={(e) => setMyData(e.target.value)}
//             />
//             const changeStyle: () => void
//         <button onClick={changeStyle}>Submit</button>
        
//         </>
//     )
// }

// export default UseRef
