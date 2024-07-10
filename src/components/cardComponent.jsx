import React, { useContext } from 'react';
import { AppProvider} from '../appContexts/appContext';

const CardComponent = () => {
    const { posts, currentPage, postsPerPage, removeCard } = useContext(AppContext);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="flex flex-wrap justify-center">
            {currentPosts.map(post => (
                <div key={post.id} className="border border-gray-300 rounded p-4 m-4 w-80">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                    <button 
                        onClick={() => removeCard(post.id)} 
                        className="text-red-500 mt-2"
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
