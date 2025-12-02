function User(props) {
    return (
        <div className="box" >
            <h2>{props.firstName} {props.surname}</h2>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default User