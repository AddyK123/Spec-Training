function CreateSource (){
    return(
        <form>
                <span>
                    <label for="name">Source Name: </label>
                    <input type = "text" id = "name" />
                </span>
                <span>
                    <label for="email">Source Email: </label>
                    <input type="text" id="email" />
                </span>
                <span class="SubButton">Submit</span>
        </form>
    )
}

export default CreateSource;