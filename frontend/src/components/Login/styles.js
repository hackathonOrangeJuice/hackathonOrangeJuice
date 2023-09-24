import styled from "styled-components";

export const Container = styled.div`

    .Div-Login {
        position: absolute;
        top: 0;
        right: 0;
        width: 30rem;
        height: 100vh;
        background-color: white;
        padding: 2rem 4rem;
    }

    .Menu-Login {
        text-align: right;
    }

    .Menu-Login img {
        width: 1.6rem;
        cursor: pointer;
    }

    .Login {
        margin-top: 5rem;
        text-align: center;
    }

    .Login h2 {
        text-transform: uppercase;
        color: #ff9900;
        font-weight: 700;
        font-size: 2.8rem;
    }

    .Login p  {
        font-size: 1.3rem;
        font-weight: 400;
    }

    .Login-Inputs {
        margin-top: 3rem;
    }

    .Login-Inputs p {
        text-align: left;
        margin-left: 3.5rem;
        margin-bottom: .7rem;
    }

    #password {
        margin-top: 1.5rem;
    }

    .Login-Inputs input {
        font-family: "Raleway";
        padding: .5rem .8rem;
        width: 15rem;
        border-radius: .5rem;
        border: .05rem solid black;
    }

    .Login-Inputs .Register-Text {
        margin-top: .5rem;
        margin-left: 4.4rem;
        font-size: .8rem;
    }

    .Login-Inputs span {
        font-weight: 700;
        cursor: pointer;
    }

    .Login-Inputs button {
        margin-top: .5rem;
        width: 15rem;
        border-radius: .5rem;
        border: .05rem solid black;
        padding: .5rem;
        background-color: #ff9900;
        font-family: "Raleway";
        font-weight: 700;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .Networks-Login {
        margin-top: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Networks-Login img {
        width: 2.5rem;
        cursor: pointer;
    }

    .Networks-Login .insta {
        width: 2.7rem;
    }

    @media screen and (max-width: 800px) {

        .Div-Login {
            width: 100%;
        }

        .Login h2 {
            font-size: 2rem;
        }

        .Login p {
            font-size: 1rem;
        }

        .Login-Inputs p {
            font-size: 1rem;
            margin-left: 4.3rem;
        }

        .Login-Inputs input {
            padding: .3rem .5rem;
        }

        .Login-Inputs .Register-Text {
            font-size: .6rem;
        }

        .Login-Inputs button {
            padding: .3rem;
        }

        .Menu-Login img {
            width: 1.2rem;
            cursor: pointer;
        }


    }

`