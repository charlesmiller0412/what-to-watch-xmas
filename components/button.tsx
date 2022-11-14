export const Button = (props: any) => {
    return (
        <div className={props.className} onClick={props.onClick}>
            {props.text}
        </div>
    );
};
