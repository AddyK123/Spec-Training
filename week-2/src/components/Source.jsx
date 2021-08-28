function Source ({number, name, email}) {
    return (
        <>
        <div class = "input">
            <span>{number}: </span>
            <span>{name}</span>
            <span>{email}</span>
            <span class="DelButton">Delete</span>
        </div>
        <hr></hr>
        </>
    )
}

export default Source;
