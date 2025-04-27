'use client';

// Next.js has their own image component that works better than the usual <img> tag. Lazy loading, responsive, better performance, SEO, CDN optimization.
// Question here is, is next.js Image with koket.se's image proxy the best way, or would the html <img> be better. Thinking of the that next.js <Image> requires height and width attributes.
import styles from "./RecipeCard.module.scss";
import Image from "next/image";

interface RecipeCardProps {
    src: string; 
    alt: string;
    dishTitle: string;
    chef: string | null;
    sponsored: boolean;
    type: string;
}

const RecipeCard = ({ src, alt, dishTitle, chef, sponsored, type }: RecipeCardProps) => {
    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.tagWrapper} ${type === "recipe" ? styles.recipe : styles.article}`}>
                <span className={styles.tags}>
                    { type === "recipe" ? "Recept" : "Artikel" }
                </span>
                { sponsored ? <span>Sponsrad</span> : null }
            </div>
            <Image src={src} alt={alt} height={400} width={300}/>
            <div className={styles.recipeWrapper}>
                <h2>{dishTitle}</h2>
                <span>{chef}</span>
            </div>
        </div>
    )
}

export default RecipeCard;