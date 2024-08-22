'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import BurgerMenu from '@/components/burger-menu';
import { isEqualStrings, removeLeadingSlash } from '@/utils/string-utils';

import { StyledHeader, StyledLink, StyledNav } from './styled';
import { LINKS_MOCK } from '@/constants/header';

const Header = () => {
  const path = usePathname();

  const [isBurgerMenuShown, setBurgerMenuShown] = useState(false);

  const handleToggleBurgerIcon = () => {
    setBurgerMenuShown(!isBurgerMenuShown);
  };

  const handleHideBurgerMenu = () => {
    setBurgerMenuShown(false);
  };

  return (
    <StyledHeader>
      <StyledNav $isActive={isBurgerMenuShown}>
        {LINKS_MOCK.map(({ href, text }) => (
          <StyledLink
            href={href}
            $isActive={isEqualStrings(path, href)}
            key={text}
            onClick={handleHideBurgerMenu}
            data-testid={removeLeadingSlash(href)}
          >
            {text}
          </StyledLink>
        ))}
      </StyledNav>
      <BurgerMenu
        isActive={isBurgerMenuShown}
        onToggle={handleToggleBurgerIcon}
        onHideBurgerMenu={handleHideBurgerMenu}
      />
    </StyledHeader>
  );
};

export default Header;
