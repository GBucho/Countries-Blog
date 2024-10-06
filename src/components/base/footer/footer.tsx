import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.root}>
      © {new Date().getFullYear()} Simple Blog. All Rights Reserved
    </footer>
  );
}
