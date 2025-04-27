'use client'

import styles from "./page.module.css";
import RecipeList from "./components/RecipeList/RecipeList";

const App = () => {
  return (
    <div className={styles.container}>
      <RecipeList />
    </div>
  )
}

export default App;