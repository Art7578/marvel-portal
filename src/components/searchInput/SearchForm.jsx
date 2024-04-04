import React, {useState} from "react";
import Loader from "../../components/Loader/Loader";
import css from "../componenets_css/SearchForm.module.css";

const SearchForm = ({onSearch, onClear, getData}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showClear, setShowClear] = useState(false);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        setShowClear(false);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const results = await getData(searchTerm);
            onSearch(results);
            setShowClear(true);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        onClear();
        setShowClear(false);
    };

    return (
        <div className={css.search_container}>
            <form onSubmit={handleSubmit}>
                <input type="text" className={css.search_input} value={searchTerm} onChange={handleChange} />
                {showClear ? (
                    <button className={css.search_button} type="button" onClick={handleClear}>Clear</button>    
                ) : (
                    <button className={css.search_button} type="submit" disabled={loading || searchTerm.trim() === ''}>Search</button>
                )}
            </form>
            {loading && <Loader/>}
            {error && <div>Error: {error}</div>}
        </div>
    );
};

export default SearchForm;