export interface NavItem{
    label: string,
    link: string
}

export const NAV_ITEMS: NavItem[] = [
    { label: 'Overview', link: '/home' },
    { label: 'Entrada', link: '/entrada' },
    { label: 'Saída', link: '/saida' },
  ];