import { useEffect } from "react";

const List = (props: any) => {
    let id: number = 0;

    function getLocal() {
        const storedData = localStorage.getItem("watched");
        if (storedData !== null) {
            props.setWatched(JSON.parse(storedData));
        }
    }

    useEffect(() => {
        getLocal();
    }, []);
    return (
        <div className="watchedList">
            <ul>
                {props.watched?.map((watched: any) => (
                    <li key={id++}>{watched}</li>
                ))}
            </ul>
        </div>
    );
};
export default List;
