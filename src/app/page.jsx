import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  const { category } = searchParams;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.container}>
        <CardList page={page} category={category} />
        <Menu />
      </div>
    </div>
  );
}
