import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div
            className="container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "60%",
                alignItems: "center",
                marginLeft: "20%",
                marginRight: "20%",
                marginTop: "40px",
            }}
        >
            <h2>Welcome Back!</h2>

            <TextField
                id="outlined-basic"
                label="email"
                variant="outlined"
                type="text"
                style={{ margin: "5px" }}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                type="text"
                style={{ margin: "5px" }}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />

            <Button
                style={{ marginTop: "20px" }}
                variant="contained"
                onClick={() => {
                    fetch("http://localhost:3001/user/login", {
                        method: "POST",
                        body: JSON.stringify({ email, password }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then((data) => {
                            console.log(data);
                            localStorage.setItem("token", data.token);
                        });
                }}
            >
                login
            </Button>
        </div>
    );
}
