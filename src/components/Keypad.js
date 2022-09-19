// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type='Password' onChange={e => {
                console.log("Entering password...");
            }} />
        </div>
    )
}

export default Keypad;