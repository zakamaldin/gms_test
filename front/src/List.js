import React, { useState, useEffect } from 'react';

const List = () => {
    const URL = "http://localhost:5000/api/police_report"
    const [listItems, setListItems] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        fetchData()
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreData();
    }, [isFetching]);


    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    function fetchData() {
        fetch(URL)
            .then((res) => {
                return res.json()
            })
            .then(data => setListItems(data))
    }

    function fetchMoreData() {
        fetch(`${URL}?get_more=true`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setListItems(prevState => ([...prevState, ...data]));
                setIsFetching(false)
            })
    }

    return (
        <table className="table">
            <tbody>
            {listItems && listItems.map(row =>
                <tr key={row}>
                    {row.map(col =>
                        <td key={col}>{col}</td>
                    )}
                </tr>
            )}
            {isFetching && 'Fetching more list items...'}
            </tbody>
        </table>
    );
};

export default List;