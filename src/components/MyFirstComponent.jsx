import { use } from "react";

function MyFirstComponent() {

    const amount = 21;

    const user = {
        firstName: "Bob",
        lastName: "Smith",
    }

    const bannerStyle = {
        color: "#fff",
        background: "purple",
        border: "2px solid #fff",
        margin: "2rem",
        padding: "1rem",
    }

    return (
        <>
            <h3>Hello {user.firstName} {user.lastName} </h3>
            <h3>Total: {amount * 2}</h3>

            {/* this is a comment */}
            <div style={bannerStyle}>
                <p>This is a banner</p>
            </div>
        </>
    )
}

export default MyFirstComponent
