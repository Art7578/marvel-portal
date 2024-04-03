import React, { useState } from 'react';
import { getSeriesByTitle } from '../../service';
import Loader from '../../components/Loader/Loader';
import css from "../componenets_css/SearchForm.module.css";

const SeriesSearchForm = ({ onSearchResults, onClearResults }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showClear, setShowClear] = useState(false);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        setShowClear(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const results = await getSeriesByTitle(searchTerm);
            onSearchResults(results);
            setShowClear(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        onClearResults();
        setShowClear(false);
    };

    return (
        <div className={css.search_container}>
            <form onSubmit={handleSubmit}>
                <input className={css.search_input} type="text" value={searchTerm} onChange={handleChange} />
                {showClear ? (
                    <button className={css.search_button} type="button" onClick={handleClear}>Clear</button>
                ) : (
                    <button className={css.search_button} type="submit" disabled={loading || searchTerm.trim() === ''}>Search</button>
                )}
            </form>
            {loading && <Loader />}
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default SeriesSearchForm;