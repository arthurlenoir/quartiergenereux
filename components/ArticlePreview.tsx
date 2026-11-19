import { Page } from "../types/page";
import style from "./ArticlePreview.module.css";
import { convert } from "html-to-text";

interface Props {
  article: Page;
}

export function ArticlePreview({ article }: Props) {
  const uri = article.uri.endsWith("/")
    ? article.uri.substring(0, article.uri.length - 1)
    : article.uri;
  const description = convert(article.content, {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "h2", format: "skip" },
    ],
    wordwrap: 250,
  }).split("\n")[0];
  return (
    <div className={style.container}>
      <h2>Dernière actualité</h2>
      <a href={uri} className={style.articlePreview}>
        {article.featuredImage && (
          <figure
            style={{
              backgroundImage: `url('${article.featuredImage.node.mediaItemUrl}')`,
            }}
          ></figure>
        )}
        <div className={style.content}>
          <h3>{article.title}</h3>
          <p>
            {description}{" "}
            <button className={style.button}>Lire la suite</button>
          </p>
        </div>
      </a>
    </div>
  );
}
