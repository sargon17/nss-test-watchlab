import Posts from "../data/instagramPosts";
export default function InstagramBannerComponent() {
  let [coverPost, ...posts] = Posts;

  return (
    <div className="container">
      <div className="instagram-container grid flex-lg flex-column">
        <div className="instagram-cover">
          <img src={coverPost.img} alt="instagram-cover" />
          <div className="instagram-cover-overlay"></div>
          <div className="instagram-cover-content text-center">
            <div>
              <h5 className="wl-pretitle text-color-white">Instagram</h5>
              <h3 className="wl-title text-color-white wl-title--small">
                Discover <br /> Watch Lab
              </h3>
            </div>
          </div>
        </div>
        <div className="instagram-posts grid">
          {posts.map((post) => {
            return (
              <div className="instagram-post" key={post.id}>
                <a href={post.link}>
                  <div className="instagram-post-overlay"></div>
                  <div className="instagram-post-content">
                    <h5 className="wl-pretitle text-color-white">See More</h5>
                  </div>
                  <img src={post.img} alt="instagram-post" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
