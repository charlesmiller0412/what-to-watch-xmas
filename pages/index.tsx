import Head from "next/head";
import Image from "next/image";
import { movies } from "../components/movies";
import { useEffect, useState } from "react";
import { Button } from "../components/button";
import List from "../components/list";
import { watch } from "fs";

export default function Home() {
    const [currentMovie, setCurrentMovie] = useState<any>(null);
    const [watched, setWatched] = useState<any>([]);
    let x: number;

    function newMovie() {
        x = Math.floor(Math.random() * movies.length);
        setCurrentMovie(movies[x]);
    }

    function getMovie() {
        newMovie();
        // if watched length > 0 check to see if new movie is in watched. else set movie
        if (watched.length > 0) {
            if (watched.includes(movies[x])) {
                newMovie();
            } else setCurrentMovie(movies[x]);
        } else setCurrentMovie(movies[x]);
    }

    // *reroll button and watched button to add that number to watched list
    function addWatched() {
        if (!watched.includes(currentMovie)) {
            setWatched([...watched, currentMovie]);
        }
        saveStorage();
    }

    // * clear watched movies list
    function clearWatched() {
        setWatched([]);
        localStorage.setItem("watched", JSON.stringify([]));
    }

    // * save storage
    function saveStorage() {
        localStorage.setItem("watched", JSON.stringify(watched));
    }

    // * get movie on load
    useEffect(() => {
        getMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.getElementById("addMovie")?.addEventListener("click", () => {
            localStorage.setItem("watched", JSON.stringify(watched));
        });
    });

    return (
        <div>
            <Head>
                <title>What-to-Watch | Christmas</title>
                <meta
                    name="What-to-Watch Christmas"
                    content="A random Christmas move generator to help ease your decisions."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="imgContainer">
                    <Image
                        src="/assets/AdobeStock_509904378.png"
                        alt="christmas lights"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="title">
                    <h2>
                        What-to-Watch <span>Christmas</span>
                    </h2>
                </div>
                <div className="display">
                    <div id="movieTitle">{currentMovie}</div>
                </div>
                <div className="buttons">
                    <Button
                        className="btn"
                        text="New Movie"
                        onClick={newMovie}
                    />
                    <Button
                        className="btn"
                        text="Add to watched"
                        onClick={addWatched}
                    />
                </div>
                <List watched={watched} setWatched={setWatched} />
                <Button
                    className="btn clear"
                    text="Clear Watched List"
                    onClick={clearWatched}
                />
            </main>

            <footer></footer>
        </div>
    );
}
