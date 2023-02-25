import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../shared/types";

type LinkProps = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    const handleSelect = () => {
      setSelectedPage(lowerCasePage);
    }

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage} ? "text-primary-500" : "" transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={handleSelect}
        >
        {page}
    </AnchorLink>
  )
}

export default Link;
