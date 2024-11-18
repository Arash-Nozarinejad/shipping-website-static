import NavbarLogo from "@/components/navbar/NavbarLogo";
import navbarLogoData from "@/../public/navbarLogoData.json";
import navbarLogoStyles from "@/styles/NavbarLogo.module.css";
import NavbarLinks from "@/components/navbar/NavbarLinks";
import navbarLinksData from "@/../public/navbarLinksData.json"
import navbarLinksStyles from "@/styles/NavbarLinks.module.css";

export default function TestPage() {
  return (
    <div className="flex flex-wrap">
      <NavbarLogo
        imageUrl={navbarLogoData.imageUrl}
        homeUrl={navbarLogoData.homeUrl}
        logoClass={navbarLogoStyles.logoClass}
      />
      <NavbarLinks
        items={navbarLinksData.items}
        navClass={navbarLinksStyles.navClass}
        itemClass={navbarLinksStyles.itemClass}
      />
    </div>
  )
}