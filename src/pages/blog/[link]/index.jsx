import Image from 'next/image';
import { getPostLink } from '../../../services/apiBlog';

export async function getServerSideProps({ params }) {
    const post = await getPostLink(params.link);

    return { props: { post } };
}

const PostBlog = ({ post }) => (
    <div>
        <h2>{post.title}</h2>
        <h4>{post.description}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <Image src={post.image} alt="Imagem do post" className="saved-post-image" width={1500} height={800} priority={true} />
    </div>
);

export default PostBlog;
