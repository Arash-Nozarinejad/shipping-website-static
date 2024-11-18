import NavbarLogo from "@/components/navbar/NavbarLogo";
import navbarLogoData from "@/../public/navbarLogoData.json";
import styles from "@/styles/NavbarLogo.module.css";

export default function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <NavbarLogo
        imageUrl={navbarLogoData.imageUrl}
        homeUrl={navbarLogoData.homeUrl}
        logoClass={styles.logoClass}
      />
    </div>
  )
}