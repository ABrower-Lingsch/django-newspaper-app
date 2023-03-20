import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

function AuthorArticle({ article }) {
  return (
    <li key={article.id} className="list author-list">
      <div className="article-info">
        <h3 className="aside-title">{article.title}</h3>
        <span>By {article.author_name} | </span>
        <Badge bg="secondary">{article.status}</Badge>
        <div className="view-button">
          <Link className="view-link" to={`/article/${article.id}`}>
            View Article
          </Link>
        </div>
      </div>
      <img className="aside-image" src={article.image} />
    </li>
  );
}

export default AuthorArticle;