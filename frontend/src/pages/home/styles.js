import styled from "styled-components";

export const Container = styled.div`

    .Wallpaper {
        position: absolute;
        width: 95rem;
        height: 55rem;
        z-index: -1;
    }

    .Wallpaper img {
        width: 100%;
        height: 100%;
        filter: brightness(0.7);
    }

    header {
        padding: 2rem 10rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Logo-Menu {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .Logo-Menu img {
        width: 2rem;
        cursor: pointer;
    }

    #logo {
        width: 3rem;
    }

    .Enter {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .Enter p {
        color: white;
        font-weight: 700;
        cursor: pointer;
        font-size: 1rem;
    }

    .Enter button {
        font-family: "Raleway";
        color: white;
        font-weight: 700;
        font-size: 1rem;
        background-color: #ff9900;
        border: none;
        padding: .4rem 1.5rem;
        border-radius: 2.5rem;
        cursor: pointer;
    }

    main {
        padding: 10rem 11rem;
    }

    main h1 {
        text-transform: uppercase;
        color: white;
        letter-spacing: .1rem;
        font-size: 3.2rem;
    }

    main span {
        color: #ff9900;
    }

    main p {
        margin-top: 1.5rem;
        font-size: 1rem;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        width: 23rem;
    }

    main button {
        display: flex;
        align-items: center;
        gap: .3rem;
        margin-top: 1rem;
        background-color: #ff9900;
        font-size: 1.1rem;
        font-family: "Raleway";
        font-weight: 700;
        color: white;
        padding: .6rem;
        border-radius: 1rem;
        border: none;
        cursor: pointer;
    }



`;