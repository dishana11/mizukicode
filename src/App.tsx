import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Loading } from './components/ui/Loading';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CourseGrid } from './components/CourseGrid';
import { CoursePage } from './components/CoursePage';
import { Footer } from './components/Footer';
import { ChatBubble } from './components/ChatBubble';

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  importance: string;
  salary: string;
  demand: string;
  price: string;
  originalPrice: string;
  link: string;
};

const courses: Course[] = [
  {
    id: 'fortran',
    title: 'Fortran Mastery',
    subtitle: 'Master Fortran for Scientific Supremacy',
    icon: '🚀',
    description: 'Fortran powers cutting-edge scientific simulations and high-performance computing, essential for fields like aerospace, climate modeling, and physics research.',
    importance: 'Companies like NASA, IBM, and Intel rely on Fortran experts, while FAANG giants such as Google (for tensor operations), Amazon (AWS simulations), Meta (data analysis), Apple (performance optimization), Netflix (streaming algorithms), and Microsoft (Azure HPC) actively hire Fortran-skilled engineers for roles paying $150K+.',
    salary: '$120K - $180K annually',
    demand: '89% increase in demand over 2 years',
    price: '$4.90',
    originalPrice: '$49.90',
    link: 'https://com.rpy.club/lmp/MHb1Lxln0s'
  },
  {
    id: 'cpp',
    title: 'C++ Excellence',
    subtitle: 'Build Performance-Critical Systems',
    icon: '⚡',
    description: 'C++ remains the backbone of system programming, game engines, and performance-critical applications across industries.',
    importance: 'Google uses C++ for Chrome and search algorithms, Amazon for high-frequency trading systems, Meta for backend infrastructure, Apple for macOS/iOS core systems, Netflix for video encoding, and Microsoft for Windows and Office. Salaries range from $130K-$200K.',
    salary: '$130K - $200K annually',
    demand: '76% of enterprise systems use C++',
    price: '$4.90',
    originalPrice: '$59.90',
    link: 'https://mizukicode.com/course/cpp'
  },
  {
    id: 'rust',
    title: 'Rust Security',
    subtitle: 'Memory-Safe Systems Programming',
    icon: '🔒',
    description: 'Rust combines system-level performance with memory safety, making it the future of secure system programming.',
    importance: 'Dropbox migrated storage systems to Rust, Discord uses it for performance-critical services, Meta adopted Rust for Libra blockchain, Microsoft for secure Windows components, and Amazon for AWS infrastructure. Rust engineers command $140K-$220K salaries.',
    salary: '$140K - $220K annually',
    demand: '235% growth in Rust job postings',
    price: '$4.90',
    originalPrice: '$69.90',
    link: 'https://mizukicode.com/course/rust'
  },
  {
    id: 'cuda',
    title: 'CUDA C Programming',
    subtitle: 'GPU-Accelerated Computing',
    icon: '🎯',
    description: 'CUDA C enables massive parallel computing on GPUs, essential for AI, machine learning, and scientific computing.',
    importance: 'NVIDIA, Tesla for autonomous driving, Google for TensorFlow operations, Amazon for AWS GPU instances, Meta for AI model training, Apple for Metal performance shaders, and Netflix for video processing hire CUDA experts at $160K-$250K.',
    salary: '$160K - $250K annually',
    demand: '312% increase with AI boom',
    price: '$4.90',
    originalPrice: '$79.90',
    link: 'https://mizukicode.com/course/cuda'
  },
  {
    id: 'julia',
    title: 'Julia Computing',
    subtitle: 'High-Performance Scientific Computing',
    icon: '🔬',
    description: 'Julia combines the ease of Python with the performance of C, perfect for numerical and scientific computing.',
    importance: 'MIT, Harvard, and Stanford use Julia for research. Companies like Amazon (for optimization), Google (for numerical computing), Microsoft (for Azure ML), and financial firms like BlackRock hire Julia developers for $135K-$190K roles.',
    salary: '$135K - $190K annually',
    demand: '189% growth in scientific computing',
    price: '$4.90',
    originalPrice: '$54.90',
    link: 'https://mizukicode.com/course/julia'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    subtitle: 'Build the Future with AI',
    icon: '🧠',
    description: 'Master AI algorithms, neural networks, and machine learning to create intelligent systems that shape tomorrow.',
    importance: 'Every major tech company is hiring AI engineers: Google for Search and Assistant, Amazon for Alexa and recommendations, Meta for content algorithms, Apple for Siri and ML, Netflix for personalization, Microsoft for Copilot. AI engineers earn $150K-$300K+.',
    salary: '$150K - $300K+ annually',
    demand: '497% increase in AI job postings',
    price: '$4.90',
    originalPrice: '$99.90',
    link: 'https://mizukicode.com/course/ai'
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Data-Driven Intelligence',
    icon: '📊',
    description: 'Transform data into insights with advanced machine learning algorithms and statistical modeling techniques.',
    importance: 'ML engineers are in massive demand: Google for ranking algorithms, Amazon for fraud detection, Meta for ad targeting, Apple for recommendations, Netflix for content discovery, Microsoft for Azure ML. Salaries range $140K-$280K.',
    salary: '$140K - $280K annually',
    demand: '423% growth in ML roles',
    price: '$4.90',
    originalPrice: '$89.90',
    link: 'https://mizukicode.com/course/ml'
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    subtitle: 'Neural Network Mastery',
    icon: '🌊',
    description: 'Deep learning powers the most advanced AI systems, from computer vision to natural language processing.',
    importance: 'Deep Learning specialists are the highest paid in tech: Google for DeepMind, Amazon for Alexa AI, Meta for Facebook AI, Apple for Core ML, Netflix for recommendation engines, Microsoft for Azure Cognitive Services. Salaries: $160K-$350K+.',
    salary: '$160K - $350K+ annually',
    demand: '567% increase in DL positions',
    price: '$4.90',
    originalPrice: '$109.90',
    link: 'https://mizukicode.com/course/dl'
  },
  {
    id: 'neuralink',
    title: 'Neuralink & BCI',
    subtitle: 'Brain-Computer Interface Programming',
    icon: '🧬',
    description: 'Pioneer the future of human-computer interaction with brain-computer interface programming and neural signal processing.',
    importance: 'Neuralink, Meta Reality Labs, Microsoft HoloLens team, Google X, Amazon Alexa Brain, Apple Health AI, and Netflix experiential tech divisions are hiring BCI developers. This emerging field offers $180K-$400K+ for specialized roles.',
    salary: '$180K - $400K+ annually',
    demand: '890% projected growth (emerging field)',
    price: '$4.90',
    originalPrice: '$149.90',
    link: 'https://mizukicode.com/course/neuralink'
  },
  {
    id: 'hpc',
    title: 'High-Performance Computing',
    subtitle: 'Supercomputing & Parallel Systems',
    icon: '⚡',
    description: 'Master parallel computing, distributed systems, and supercomputing for solving the worlds most complex problems.',
    importance: 'National labs, NASA, IBM, Intel, AMD, Google Cloud HPC, Amazon AWS HPC, Microsoft Azure HPC, Meta infrastructure, Apple silicon optimization, and Netflix content delivery networks hire HPC experts for $145K-$275K roles.',
    salary: '$145K - $275K annually',
    demand: '234% growth in HPC demand',
    price: '$4.90',
    originalPrice: '$84.90',
    link: 'https://mizukicode.com/course/hpc'
  },
  {
    id: 'r',
    title: 'R Statistical Computing',
    subtitle: 'Data Science & Statistics Mastery',
    icon: '📈',
    description: 'Master R for advanced statistical analysis, data visualization, and machine learning in research and industry.',
    importance: 'Pharmaceutical companies, financial institutions, Google for analytics, Amazon for business intelligence, Meta for user research, Apple for health data, Netflix for A/B testing, and Microsoft for Office analytics hire R experts for $125K-$220K roles.',
    salary: '$125K - $220K annually',
    demand: '167% increase in R data science roles',
    price: '$4.90',
    originalPrice: '$64.90',
    link: 'https://mizukicode.com/course/r'
  },
  {
    id: 's',
    title: 'S Programming Language',
    subtitle: 'Advanced Statistical Programming',
    icon: '🔢',
    description: 'S language mastery for advanced statistical computing, the foundation of modern data science and R programming.',
    importance: 'Research institutions, Bell Labs legacy systems, pharmaceutical research, Google research, Amazon science teams, Meta data infrastructure, and Microsoft research hire S language experts for specialized $130K-$240K positions.',
    salary: '$130K - $240K annually',
    demand: '89% specialized statistical computing growth',
    price: '$4.90',
    originalPrice: '$59.90',
    link: 'https://mizukicode.com/course/s'
  }
];

function App() {
  const { theme, isLoaded } = useTheme();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.title = currentPage === 'home' ? 'Mizuki Code - Unlock the Cosmos of Programming' : `${selectedCourse?.title} - Mizuki Code`;
  }, [currentPage, selectedCourse]);

  const handleCourseSelect = (course: Course) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCourse(course);
      setCurrentPage('course');
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('home');
      setSelectedCourse(null);
      setIsTransitioning(false);
    }, 300);
  };

  // Show loading screen while theme is loading
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loading size="lg" />
      </div>
    );
  }

  return (
    <div className={`min-h-screen text-white overflow-x-hidden relative theme-transition ${theme.background === 'gradient' ? 'bg-gradient-theme' : 'bg-minimal-theme'}`}>
      {/* Theme Settings */}
      <ThemeToggle />

      {/* Page Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <Loading size="lg" />
        </div>
      )}

      <Navigation currentPage={currentPage} onNavigate={handleBackToHome} />

      <main className="relative z-10">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <CourseGrid courses={courses} onCourseSelect={handleCourseSelect} />
          </>
        ) : selectedCourse ? (
          <CoursePage course={selectedCourse} onBack={handleBackToHome} />
        ) : null}
      </main>

      <Footer />
      <ChatBubble />
    </div>
  );
}

export default App;