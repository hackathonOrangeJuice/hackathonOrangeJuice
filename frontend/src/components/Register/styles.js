import styled from "styled-components";

export const Container = styled.div`

    .Menu-Register {
        text-align: right;
    }

    .Menu-Register img {
        width: 1.6rem;
        cursor: pointer;
    }

    .Register h2 {
        text-transform: uppercase;
        color: #ff9900;
        font-weight: 700;
        font-size: 2.8rem;
    }

    .Register-Inputs input {
        font-family: "Raleway";
        padding: .5rem .8rem;
        width: 15rem;
        border-radius: .5rem;
        border: .05rem solid black;
    }

    .Register .Login-Text {
        margin-top: .5rem;
        margin-left: 4.4rem;
        font-size: .8rem;
    }

    .Register span {
        font-weight: 700;
        cursor: pointer;
    }

    .Register-Buttons button {
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

    .Networks-Register img {
        width: 2.5rem;
        cursor: pointer;
    }

    .Networks-Register .insta {
        width: 2.7rem;
    }

    .Div-Register {
        position: absolute;
        top: 0;
        right: 0;
        width: 45rem;
        height: 100vh;
        background-color: white;
        padding: 2rem 4rem;
    }

    .Register {
        margin-top: 5rem;
    }

    .Register p {
        font-size: 1.2rem;
        width: 23rem;
    }

    .Register-Inputs {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .Register-Inputs p {
        width: 15rem;
        margin-bottom: .7rem;
    }

    .Register .Login-Text {
        margin-left: 0;
    }

    .Register-Buttons {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .Networks-Register {
        margin-top: 7.5rem;
    }

    @media screen and (max-width: 800px) {

        .Div-Register {
            width: 100%;
        }

        .Register h2 {
            font-size: 2rem;
        }

        .Register-Inputs input {
            padding: .3rem .5rem;
        }

        .Register .Login-Text {
            font-size: .6rem;
        }

        .Register-Buttons button {
            padding: .3rem;
        }

        .Menu-Register img {
            width: 1.2rem;
            cursor: pointer;
        }

        .Div-Register {
            padding: 1rem;
            width: 100%;
        }

        .Register p {
            font-size: 1rem;
        }

        .Register-Inputs p {
            width: 12rem;
        }

        .Register-Inputs input {
            width: 12rem;
        }

        .Register-Inputs {
            gap: 1rem;
        }

        .Register-Buttons {
            gap: 1rem;
        }

        .Register-Buttons button {
            width: 12rem;
        }

        .Networks-Register {
            display: flex;
            align-items: center;
        }


    }

`;