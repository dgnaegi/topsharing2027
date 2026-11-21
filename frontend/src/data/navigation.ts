export interface NavItem {
  id: string
  label: string
  previewOnly?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'kandidatur', label: 'Kandidatur' },
  { id: 'programm', label: 'Programm' },
  { id: 'stimmen', label: 'Stimmen', previewOnly: true },
  { id: 'unterstuetzen', label: 'Unterstützen' },
  { id: 'ueber-uns', label: 'Über uns' },
  { id: 'veranstaltungen', label: 'Veranstaltungen' },
  { id: 'pressespiegel', label: 'Pressespiegel' },
]
