import axios from 'axios';

export const fetchUsers = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Could not fetch users. Please try again later.');
    }
};