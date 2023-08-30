import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function NavItem({text, href, active}) {
    return (
      <Link href={href} className={utilStyles.navItem}>
        {text}
      </Link>
    );
}