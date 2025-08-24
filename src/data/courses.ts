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
  bgClass?: string;
};

export const courses: Course[] = [
  {
    id: 'fortran',
    title: 'Fortran',
    subtitle: 'Numerical computing powerhouse',
    icon: '🧮',
    description: 'Master high-performance numerical computing with modern Fortran for scientific simulations, finance models, and weather prediction.',
    importance: 'Used by top research labs and HPC clusters. Interops with C and MPI/OpenMP.',
    salary: '$150K+ for HPC and quant roles',
    demand: 'Stable demand in HPC, climate, and quant finance at FAANG-adjacent teams.',
    price: '$4.90',
    originalPrice: '$59.00',
    link: 'https://com.rpy.club/lmp/MHb1Lxln0s',
    bgClass: 'bg-fortran'
  },
  { id: 'cpp', title: 'C++', subtitle: 'Systems and performance', icon: '⚙️', description: 'Build ultra-fast systems with modern C++ and memory-safe patterns.', importance: 'Critical for infra, browsers, game engines at FAANG.', salary: '$180K+', demand: 'Consistent need for low-latency engineers.', price: '$4.90', originalPrice: '$89.00', link: 'https://mizukicode.com/course/cpp', bgClass: 'bg-hpc' },
  { id: 'c', title: 'C', subtitle: 'Bare-metal mastery', icon: '🧩', description: 'Understand the foundations of computing and embedded systems.', importance: 'OS, drivers, kernels, and IoT.', salary: '$160K+', demand: 'Core systems roles at scale.', price: '$4.90', originalPrice: '$79.00', link: 'https://mizukicode.com/course/c', bgClass: 'bg-hpc' },
  { id: 'rust', title: 'Rust', subtitle: 'Memory safety, zero-cost', icon: '🦀', description: 'Write fearless concurrent software with Rust.', importance: 'Adopted by AWS, Microsoft, and Meta.', salary: '$180K+', demand: 'Growing rapidly across ecosystems.', price: '$4.90', originalPrice: '$99.00', link: 'https://mizukicode.com/course/rust', bgClass: 'bg-hpc' },
  { id: 'cuda', title: 'CUDA C', subtitle: 'GPU acceleration', icon: '🎛️', description: 'Accelerate compute with NVIDIA CUDA for AI and simulation.', importance: 'Backbone of AI infra and HPC.', salary: '$200K+', demand: 'Explosive growth with AI boom.', price: '$4.90', originalPrice: '$99.00', link: 'https://mizukicode.com/course/cuda', bgClass: 'bg-hpc' },
  { id: 'julia', title: 'Julia', subtitle: 'High-level, high-performance', icon: '📈', description: 'Modern language for numerical computing and ML.', importance: 'Gaining traction in research and fintech.', salary: '$170K+', demand: 'Rising among data scientists.', price: '$4.90', originalPrice: '$79.00', link: 'https://mizukicode.com/course/julia', bgClass: 'bg-hpc' },
  { id: 's', title: 'S', subtitle: 'Statistical foundations', icon: '📊', description: 'Learn the precursor to R for stats theory.', importance: 'Historical and foundational for statisticians.', salary: '$140K+', demand: 'Niche academic roles.', price: '$4.90', originalPrice: '$39.00', link: 'https://mizukicode.com/course/s', bgClass: 'bg-hpc' },
  { id: 'r', title: 'R', subtitle: 'Data analysis and visualization', icon: '📉', description: 'Data science, biostatistics, and reporting at scale.', importance: 'Used widely in healthcare and biotech.', salary: '$160K+', demand: 'Strong in analytics teams.', price: '$4.90', originalPrice: '$69.00', link: 'https://mizukicode.com/course/r', bgClass: 'bg-hpc' },
  { id: 'ai', title: 'AI', subtitle: 'Foundations to production', icon: '🤖', description: 'From classic AI to modern LLMs and agents.', importance: 'Ubiquitous across FAANG products.', salary: '$220K+', demand: 'Skyrocketing with GenAI.', price: '$4.90', originalPrice: '$129.00', link: 'https://mizukicode.com/course/ai', bgClass: 'bg-ai' },
  { id: 'ml', title: 'Machine Learning', subtitle: 'Supervised to self-supervised', icon: '📚', description: 'Core ML concepts, metrics, and deployment.', importance: 'Backs ranking, ads, and recommendations.', salary: '$210K+', demand: 'Massive across industries.', price: '$4.90', originalPrice: '$119.00', link: 'https://mizukicode.com/course/ml', bgClass: 'bg-ai' },
  { id: 'dl', title: 'Deep Learning', subtitle: 'Neural networks mastery', icon: '🧠', description: 'CNNs, RNNs, Transformers, training at scale.', importance: 'Critical for vision and NLP at FAANG.', salary: '$220K+', demand: 'Explosive with LLMs.', price: '$4.90', originalPrice: '$139.00', link: 'https://mizukicode.com/course/dl', bgClass: 'bg-ai' },
  { id: 'neuralink', title: 'Neuralink', subtitle: 'Brain-computer interfaces', icon: '🧠', description: 'Signals, decoding, and real-time systems.', importance: 'Frontier neurotech roles.', salary: '$230K+', demand: 'Emerging yet elite.', price: '$4.90', originalPrice: '$149.00', link: 'https://mizukicode.com/course/neuralink', bgClass: 'bg-neuralink' },
  { id: 'hpc', title: 'High-Performance Computing', subtitle: 'Scale the impossible', icon: '🚀', description: 'MPI, OpenMP, and distributed compute patterns.', importance: 'Powers simulations at Big Tech.', salary: '$220K+', demand: 'Strong in research + industry.', price: '$4.90', originalPrice: '$129.00', link: 'https://mizukicode.com/course/hpc', bgClass: 'bg-hpc' }
];

