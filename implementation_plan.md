# Hedamo Product Listing Interface Implementation Plan

## Goal
Create a production-ready Product Listing Interface with a "institutional, calm, and premium" design.

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS
- TypeScript
- Lucide React

## Design System
- **Colors**: Neutral grays/slates. `Emerald-700/800` for "Published" (Muted Emerald).
- **Spacing**: 4px, 8px, 16px.
- **Typography**: Geist Sans (Default Next.js).
- **Language**: "Declared by", "Published". NO "Verified".

## Components
1.  **Utils**: `cn` helper in `src/lib/utils.ts`.
2.  **UI Components** (`src/components/ui/`):
    - `Badge`: For status indications.
    - `Button`: Primary/Secondary variants.
    - `Card`: Container for lists or details.
    - `Input`: Search bar.
    - `Headings/Text`: Standardized typography.
3.  **Feature Components** (`src/components/hedamo/`):
    - `ProductList`: Table/List view.
    - `ProductDetail`: Side panel (Sheet) or Modal.
    - `StatusFilter`: Dropdown or tabs.
    - `WarningBanner`: The yellow compliance banner.

## Data
- `src/data/mock.ts`: 5-8 items with:
    - ID
    - Name (e.g., "Organic Cotton Bale")
    - Producer
    - Status (Draft, Submitted, Published)
    - Evidence Count
    - Version History (Array of dates/actions)
    - Description

## Steps
1.  **Setup**: Create `utils.ts` and global styles overrides if needed.
2.  **Data**: Create mock data.
3.  **Components**: Build basic UI components (Badge, Button, etc.).
4.  **Main View**: Implement `page.tsx` with Layout, Search, Filter, and List.
5.  **Detail View**: Implement the clicking interaction (likely state-driven in `page.tsx` or a client component).
6.  **Review**: Check compliance (Banner, Language).

## Compliance Check
- [ ] Yellow Warning Banner present in detail view?
- [ ] No "Verified" or "Approved" words?
- [ ] "Declared by" used?
