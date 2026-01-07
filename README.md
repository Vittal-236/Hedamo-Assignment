# HEDAMO Product Disclosure Registry

A high-fidelity, institutional-grade product registry interface designed for transparency and neutrality. This application allows users to view, search, and filter producer-declared product information with a focus on restrained design and precise semantic language.

## 🚀 Features

- **Product Registry Grid**: Clean, grid-based view of products with key metadata.
- **Deep Filtering**: Instant search (Name/Producer) and filtering (Category, Status) functionality.
- **Granular Details**: Slide-over panel for comprehensive product disclosure history and evidence tracking.
- **Institutional Design System**: a "Stone" neutral color palette, restrained typography, and intentional spacing.
- **Accessibility**: Full keyboard navigation support (Focus traps, ARIA labels, Tab indexing).
- **Strict Semantics**: Language enforcement to ensure all data is presented as "Producer Declared" rather than system verified.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS v4 (with `lucide-react` for iconography)
- **Language**: TypeScript
- **State**: React Hooks (no external state management libraries for simplicity)

## 📦 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd hedamo
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Visit `http://localhost:3000` to view the application.

## 📐 Design Decisions & Assumptions

### 1. Verification vs. Disclosure
**Assumption**: The core constraint is legal neutrality.
**Decision**: The UI strictly avoids "green tick" iconography or "verified" badges. Instead, it uses neutral language like "Submitted", "Published", and "Declared". The "CheckCircle" icon is used *only* in context of "Disclosure Summary" (i.e., the *act* of disclosure is complete, not the content).

### 2. Interaction Model
**Assumption**: Users are professional auditors or procurement officers.
**Decision**: Animations are kept between 150-250ms to feel responsive but not "game-like". Hover states use a subtle lift and border darken rather than glow effects to maintain professionalism.

### 3. Visual Hierarchy
**Decision**:
- **Primary**: Product Name (Black/Stone-900)
- **Secondary**: Metadata Labels (Stone-500)
- **Tertiary**: Borders/Backgrounds (Stone-200/50)
- **Accent**: Status Badges (Muted Emerald/Amber) used sparingly to guide the eye without overwhelming the grid.

### 4. Accessibility
**Decision**: Mouse and Keyboard are treated with parity. The detail panel implements a focus trap (in `useEffect`) and standard `Escape` key behavior to ensure power users can navigate efficiently.

## ⚠️ Compliance & Standards

This project adheres to strict frontend evaluation criteria:
- **Zero Tolerance Policy**: No usage of "Verified", "Certified", or "Approved".
- **Visuals**: No arbitrary values; spacing follows a 4px grid.
- **Typography**: Uses a single font family with clear weight differentiation.
