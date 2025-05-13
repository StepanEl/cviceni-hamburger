import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setOpened] = useState(true)
  const [pageTitle, setPageTitle] = useState('Domů')
  const handleSelectItem = (page) => {
    setOpened(!menuOpened)
    setPageTitle(page)
  }

  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu menu--closed"}>
          <button
            onClick={()=>setOpened(!menuOpened)}
            className="menu__btn">
          </button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};
