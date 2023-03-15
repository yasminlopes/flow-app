export interface NavItem{
    label: string,
    link: string
}

export const NAV_ITEMS: NavItem[] = [
    { label: 'Entrada', link: '/entrada' },
    { label: 'Saída', link: '/saida' },
    { label: 'Resumo', link: '/resumo' },
  ];