# AquaReuse - Smart Water Management System

AquaReuse is a modern web application designed to help restaurants and food establishments analyze and manage their vegetable wash water quality efficiently. The application provides instant analysis, reuse recommendations, and sustainability tracking.

![AquaReuse Dashboard](https://images.unsplash.com/photo-1548839140-29a749e7172f?q=80&w=1000)

## Features

### 1. Water Quality Analysis

- Real-time water quality assessment
- Photo-based analysis system
- Comprehensive parameter tracking:
  - Turbidity
  - pH Level
  - Total Dissolved Solids (TDS)
  - Temperature

### 2. Quality Classification System

- **Excellent (85-100%)**: Safe for most non-food contact purposes
- **Good (70-84%)**: Suitable for limited reuse applications
- **Moderate (50-69%)**: Restricted use recommended
- **Poor (0-49%)**: Not recommended for reuse

### 3. Smart Features

- Automated quality scoring
- Personalized reuse recommendations
- Historical data tracking
- Sustainability metrics

### 4. User Management

- User authentication
- Profile customization
- Restaurant-specific settings
- Multi-language support

## Project Structure

```
src/
├── components/
│   ├── analysis/
│   │   ├── components/
│   │   │   ├── AnalysisGuide.jsx
│   │   │   ├── AnalysisResults.jsx
│   │   │   └── ImageCapture.jsx
│   │   ├── constants/
│   │   │   ├── qualityLevels.js
│   │   │   └── waterParameters.js
│   │   └── utils/
│   │       └── qualityUtils.js
│   ├── auth/
│   ├── dashboard/
│   ├── rewards/
│   ├── settings/
│   └── statistics/
├── assets/
└── App.jsx
```

## Technology Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & Heroicons
- **Build Tool**: Vite
- **Type Checking**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/aquareuse.git
cd aquareuse
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

1. Create a production build:

```bash
npm run build
```

2. Preview the production build:

```bash
npm run preview
```

## Key Components

### WaterAnalysis

The main analysis component that handles:

- Image capture/upload
- Water quality analysis
- Results display
- Reuse recommendations

### Dashboard

Provides an overview of:

- Latest analysis results
- Water savings metrics
- Upcoming scheduled analyses
- Quick action shortcuts

### Settings

Manages user preferences including:

- Profile settings
- Notification preferences
- Language settings
- App configuration

## Water Quality Parameters

### Turbidity

- Excellent: < 2.0 NTU
- Good: 2.0-3.0 NTU
- Moderate: 3.0-5.0 NTU
- Poor: > 5.0 NTU

### pH Level

- Excellent: 6.5-7.5
- Good: 6.0-8.0
- Moderate: 5.5-8.5
- Poor: < 5.5 or > 8.5

### Total Dissolved Solids (TDS)

- Excellent: < 500 ppm
- Good: 500-1000 ppm
- Moderate: 1000-1500 ppm
- Poor: > 1500 ppm

### Temperature

- Excellent: 20-25°C
- Good: 15-30°C
- Moderate: 10-35°C
- Poor: < 10°C or > 35°C

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/) and [Heroicons](https://heroicons.com/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
