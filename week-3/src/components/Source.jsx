
function Source ({number, name, email, deleteSource}) {
    return (
        <>
        <div class = "input">
            <span>{number}: </span>
            <span>{name}</span>
            <span>{email}</span>
            <span class="DelButton" onClick={() =>deleteSource(number)}>Delete</span>
        </div>
        <hr></hr>
        </>
    )
}

export default Source;