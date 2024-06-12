import { useState, useEffect } from 'react';
import { fetchUsers } from '../Lib/Api';
import styles from '../styles/Home.module.css';

const ITEMS_PER_PAGE = 5;

export async function getServerSideProps() {
    try {
        const users = await fetchUsers();
        console.log('Total Users fetched:', users.length); // Debugging
        return {
            props: {
                users,
            },
        };
    } catch (error) {
        return {
            props: {
                users: [],
                error: error.message,
            },
        };
    }
}

const HomePage = ({ users, error }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

    return ( <
        div className = { styles.container } > {
            error ? ( <
                p > { error } < /p>
            ) : ( <
                >
                <
                input type = "text"
                placeholder = "Search users"
                value = { searchTerm }
                onChange = { e => setSearchTerm(e.target.value) }
                className = { styles.searchBar }
                /> <
                ul > {
                    paginatedUsers.map(user => ( <
                        li key = { user.id }
                        className = { styles.userItem } > { user.name } < /li>
                    ))
                } <
                /ul> <
                div className = { styles.pagination } > {
                    Array.from({ length: totalPages }, (_, i) => ( <
                        button key = { i }
                        onClick = {
                            () => setCurrentPage(i + 1)
                        }
                        disabled = { i + 1 === currentPage } > { i + 1 } <
                        /button>
                    ))
                } <
                /div> < / >
            )
        } <
        /div>
    );
};

export default HomePage;