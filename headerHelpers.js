function handleNavItems(navLink) {
    return navLink.map(el => ({
      ...el,
      customClass: window.location.pathname.indexOf(el.activeLocation) !== -1 ? 'active' : '',
    }));
  }
  
  export default function prepareHeader(header) {
    return {
      ...header,
      navLink: handleNavItems(header.navLink),
    };
  }