import "./Error.css"

const Error = (props) => {
    return (
        <div>
            Uh oh! Something went a little wrong: <br /><br />
            <div className="error">
                {props.error}: {props.description}
            </div>
        </div>
    )
}

export default Error;