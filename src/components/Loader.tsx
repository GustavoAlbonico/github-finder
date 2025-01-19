import { FaSpinner } from "react-icons/fa";

import css from "./Loader.module.css";

const Loader = () => {
    return (
        <>
            <FaSpinner className={css.loader} />
        </>
    );
};

export default Loader;