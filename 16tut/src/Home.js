import Feed from './Feed';

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display now.
                </p>
            )}
        </main>
    )
}

export default Home
