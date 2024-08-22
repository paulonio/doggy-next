'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import BurgerMenu from '@/components/burger-menu';
import { LINKS_MOCK } from '@/constants/header';
import { isEqualStrings, removeLeadingSlash } from '@/utils/string-utils';

import { StyledHeader, StyledLink, StyledNav } from './styled';

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
