import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from 'next/navigation';

const MealPage = async ({ params }) => {
  const meal = await getMeal(params.mealsSlug);

  if (!meal) {
    //puts the user on not-found page
    notFound();
  }

  const instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>{" "}
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          //prevents you from xss
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealPage;
