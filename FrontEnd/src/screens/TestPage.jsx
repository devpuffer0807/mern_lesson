import React from "react";

const Page = () => {

    const inputRef = React.useRef();

    const someValue = React.useMemo(() => {
        someValue = doExpensiveCompute(a, b);
    }, [a, b]);

    const someValue = React.useEffect(() => {
        someValue = doExpensiveCompute(a, b);
    }, [a, b]);

    return (
        <div>
            <input onKeyDown={(e) => {
                inputRef.current.focus();
            }} />

            <input ref={inputRef} />
        </div>
    )
}