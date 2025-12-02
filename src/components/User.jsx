function User(props) {
    return (
        <>
            <h2>{props.firstName} {props.surname}</h2>
            <p>Age: {props.age}</p>
        </>
    )
}

export default User