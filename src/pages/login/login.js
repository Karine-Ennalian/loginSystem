import React, { useState } from "react";
import Input from "../../components/input/input";
import Button from "../../components/buton/button";
import useAuth from "../../hooks/useAuth";

import * as C from "./styles";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
        setError("Preencha todos os campos");
        return;
    }

    const res = login(email, senha);

    if (res) {
        setError(res);
        return;
    }

    navigate("/home");
    };

    return (
        <C.Container>
        <C.Label>SISTEMA DE LOGIN</C.Label>
        <C.Content>
            <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.labelError>{error}</C.labelError>
            <Button Text="Entrar" onClick={handleLogin} />
            <C.LabelSignup>
            Não tem uma conta?
            <C.Strong>
                <Link to="/signup">&nbsp;Registre-se</Link>
            </C.Strong>
            </C.LabelSignup>
        </C.Content>
        </C.Container>
    );
};

export default Login;