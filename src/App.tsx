import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Target, 
  TrendingUp, 
  Users, 
  Building, 
  Lightbulb, 
  BarChart3,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  Globe,
  X,
  Star,
  Clock
} from 'lucide-react'
import './App.css'

const sections = [
  {
    id: 'value-prop',
    title: 'Value Proposition & Core Offerings',
    icon: Target,
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    description: 'Tech-enabled Lean/process improvement services aligned with organizational strategy'
  },
  {
    id: 'framework',
    title: 'Consulting Framework',
    icon: BarChart3,
    color: 'from-slate-600 to-slate-700',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-900',
    description: 'Structured 6-stage approach for sustainable transformation'
  },
  {
    id: 'go-to-market',
    title: 'Go-to-Market Strategy',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    description: 'Targeted vertical approaches for Healthcare and Manufacturing'
  },
  {
    id: 'brand-building',
    title: 'Brand Building & Thought Leadership',
    icon: Lightbulb,
    color: 'from-gray-600 to-gray-700',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-900',
    description: 'Digital presence and authority building initiatives'
  },
  {
    id: 'capability',
    title: 'Capability Development',
    icon: Users,
    color: 'from-slate-500 to-slate-600',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-900',
    description: 'Recruitment and upskilling for consulting and tech teams'
  },
  {
    id: 'measurement',
    title: 'Measurement & Continuous Improvement',
    icon: Award,
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    description: 'ROI tracking and systematic feedback loops'
  }
]

const coreModules = [
  { name: 'PDCA Module', desc: 'Structured project documentation and improvement tracking' },
  { name: 'Huddle Board', desc: 'Daily problem solving and team accountability' },
  { name: 'LeanFlow', desc: 'Capture, standardize, and share Standard Operating Procedures' },
  { name: 'Rounding Module', desc: 'Leadership visibility, barrier removal, and action tracking' },
  { name: 'Success Story Sharing', desc: 'Disseminate best practices across the enterprise' },
  { name: 'Balanced Scorecard', desc: 'Link improvement ROI with strategic goals' }
]

const frameworkStages = [
  { 
    stage: 'Strategic Alignment', 
    desc: 'Assess alignment of improvement needs with overall strategy', 
    tools: 'Balanced Scorecard',
    benefit: 'Ensure 100% alignment with business objectives',
    roi: '15-25% faster time-to-value'
  },
  { 
    stage: 'Diagnostic', 
    desc: 'Analyze root causes, map processes, and quantify opportunities', 
    tools: 'Consulting + Lean365',
    benefit: 'Identify hidden inefficiencies and waste',
    roi: 'Average 20-30% cost reduction potential'
  },
  { 
    stage: 'Solution Design', 
    desc: 'Co-design solutions, prioritize initiatives, and roadmap delivery', 
    tools: 'Framework Workshops',
    benefit: 'Stakeholder buy-in and clear roadmap',
    roi: '40% reduction in change resistance'
  },
  { 
    stage: 'Implementation', 
    desc: 'Deploy Lean365 modules and consulting support on prioritized issues', 
    tools: 'PDCA, Huddle Board, etc.',
    benefit: 'Real-time visibility and accountability',
    roi: '25-35% faster implementation cycles'
  },
  { 
    stage: 'Sustainability', 
    desc: 'Build capability, transfer knowledge, and embed continuous improvement habits', 
    tools: 'Rounding, Success Story',
    benefit: 'Self-sustaining improvement culture',
    roi: '3x higher long-term success rate'
  },
  { 
    stage: 'Measurement & Review', 
    desc: 'Monitor results, celebrate wins, and recalibrate as needed', 
    tools: 'Balanced Scorecard, PDCA',
    benefit: 'Continuous optimization and scaling',
    roi: 'Compound 10-15% year-over-year gains'
  }
]

const sectionBenefits = {
  'value-prop': [
    { icon: Star, title: 'Proven ROI', desc: 'Average 25-40% efficiency gains within 6 months' },
    { icon: Clock, title: 'Rapid Deployment', desc: 'Get started in weeks, not months with modular approach' },
    { icon: TrendingUp, title: 'Scalable Impact', desc: 'Solutions that grow with your organization' },
    { icon: Award, title: 'Expert Support', desc: 'Dedicated Lean consultants guide your transformation' }
  ],
  'go-to-market': [
    { icon: Building, title: 'Industry Expertise', desc: 'Deep knowledge of healthcare and manufacturing challenges' },
    { icon: Target, title: 'Focused Approach', desc: 'Tailored solutions for specific vertical pain points' },
    { icon: TrendingUp, title: 'Market Validation', desc: 'Proven success in target industries' },
    { icon: Users, title: 'Partnership Network', desc: 'Strategic alliances with industry leaders' }
  ]
}

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentStage, setCurrentStage] = useState(0)

  return (
    <div className="app-container">
      <div className="main-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="header-section"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ padding: '0.75rem', background: '#2563eb', borderRadius: '0.5rem', marginRight: '1rem' }}>
              <Zap style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
            </div>
            <h1 className="main-title">
              Lean365 <span className="title-highlight">Growth Strategy</span>
            </h1>
          </div>
          <div className="divider"></div>
          <p className="subtitle">
            Comprehensive plan for tech-enabled Lean transformation and sustainable business growth
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid-container">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`strategy-card ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
            >
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="card-icon-container" style={{ background: section.bgColor || '#f3f4f6' }}>
                  <section.icon style={{ width: '2rem', height: '2rem', color: section.textColor || '#374151' }} />
                </div>
                <h3 className="card-title">{section.title}</h3>
                <p className="card-description">{section.description}</p>
                <div className="card-action">
                  <span style={{ marginRight: '0.5rem' }}>Explore details</span>
                  <motion.div
                    animate={{ x: activeSection === section.id ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight style={{ width: '1rem', height: '1rem' }} />
                  </motion.div>
                </div>
              </div>
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                right: 0, 
                width: '6rem', 
                height: '6rem', 
                borderRadius: '50%', 
                background: section.bgColor || '#f3f4f6', 
                opacity: 0.3, 
                marginRight: '-3rem', 
                marginTop: '-3rem' 
              }}></div>
            </motion.div>
          ))}
        </div>

        {/* Modals */}
        <AnimatePresence>
          {activeSection && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setActiveSection(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                {activeSection === 'value-prop' && (
                  <>
                    <div className="modal-header">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ 
                          width: '3rem', 
                          height: '3rem', 
                          background: '#2563eb', 
                          borderRadius: '0.5rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          marginRight: '1rem' 
                        }}>
                          <Target style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                        </div>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#111827' }}>Core Solutions Platform</h2>
                      </div>
                      <button className="close-button" onClick={() => setActiveSection(null)}>
                        <X style={{ width: '1.25rem', height: '1.25rem' }} />
                      </button>
                    </div>
                    <div className="modal-body">
                      <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
                        Our integrated platform combines expert consulting with modular software tools for sustainable transformation.
                      </p>
                      
                      <div className="modules-grid">
                        {coreModules.map((module, index) => (
                          <motion.div
                            key={module.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="module-card"
                          >
                            <div className="module-header">
                              <div className="module-icon">
                                <CheckCircle style={{ width: '1rem', height: '1rem', color: 'white' }} />
                              </div>
                              <h4 className="module-title">{module.name}</h4>
                            </div>
                            <p className="module-description">{module.desc}</p>
                          </motion.div>
                        ))}
                      </div>
                      
                      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginTop: '3rem', marginBottom: '1.5rem' }}>Key Benefits</h3>
                      <div className="benefit-grid">
                        {sectionBenefits['value-prop'].map((benefit, index) => (
                          <div key={index} className="benefit-item">
                            <div className="benefit-icon">
                              <benefit.icon style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} />
                            </div>
                            <div className="benefit-content">
                              <h4>{benefit.title}</h4>
                              <p>{benefit.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeSection === 'framework' && (
                  <>
                    <div className="modal-header">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ 
                          width: '3rem', 
                          height: '3rem', 
                          background: '#64748b', 
                          borderRadius: '0.5rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          marginRight: '1rem' 
                        }}>
                          <BarChart3 style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                        </div>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#111827' }}>6-Stage Consulting Framework</h2>
                      </div>
                      <button className="close-button" onClick={() => setActiveSection(null)}>
                        <X style={{ width: '1.25rem', height: '1.25rem' }} />
                      </button>
                    </div>
                    <div className="modal-body">
                      <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
                        Our proven methodology ensures systematic transformation with measurable results at every stage.
                      </p>
                      
                      {/* Framework Stepper */}
                      <div className="framework-stepper">
                        {frameworkStages.map((stage, index) => (
                          <div key={index} className="step-item">
                            <div className={`step-number ${
                              index === currentStage ? 'active' : 
                              index < currentStage ? 'completed' : 'pending'
                            }`}>
                              {index + 1}
                            </div>
                            <div style={{ minWidth: '150px' }}>
                              <p style={{ fontWeight: '600', color: '#111827', fontSize: '0.875rem' }}>{stage.stage}</p>
                            </div>
                            {index < frameworkStages.length - 1 && (
                              <div className={`step-connector ${index < currentStage ? 'completed' : ''}`}></div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Current Stage Details */}
                      <div className="framework-content">
                        <motion.div
                          key={currentStage}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>
                            {frameworkStages[currentStage].stage}
                          </h3>
                          <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            {frameworkStages[currentStage].desc}
                          </p>
                          
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                              <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Tools & Methods</h4>
                              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{frameworkStages[currentStage].tools}</p>
                            </div>
                            <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                              <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Key Benefit</h4>
                              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{frameworkStages[currentStage].benefit}</p>
                            </div>
                            <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                              <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Expected ROI</h4>
                              <p style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{frameworkStages[currentStage].roi}</p>
                            </div>
                          </div>
                          
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <button
                              onClick={() => setCurrentStage(Math.max(0, currentStage - 1))}
                              disabled={currentStage === 0}
                              style={{ 
                                padding: '0.75rem 1.5rem', 
                                background: currentStage === 0 ? '#f1f5f9' : '#e2e8f0', 
                                border: 'none', 
                                borderRadius: '0.5rem', 
                                cursor: currentStage === 0 ? 'not-allowed' : 'pointer',
                                opacity: currentStage === 0 ? 0.5 : 1,
                                fontWeight: '500'
                              }}
                            >
                              Previous
                            </button>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              {frameworkStages.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentStage(index)}
                                  style={{
                                    width: '0.75rem',
                                    height: '0.75rem',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: index === currentStage ? '#2563eb' : index < currentStage ? '#10b981' : '#d1d5db',
                                    cursor: 'pointer'
                                  }}
                                />
                              ))}
                            </div>
                            <button
                              onClick={() => setCurrentStage(Math.min(frameworkStages.length - 1, currentStage + 1))}
                              disabled={currentStage === frameworkStages.length - 1}
                              style={{ 
                                padding: '0.75rem 1.5rem', 
                                background: currentStage === frameworkStages.length - 1 ? '#f1f5f9' : '#2563eb', 
                                color: currentStage === frameworkStages.length - 1 ? '#6b7280' : 'white',
                                border: 'none', 
                                borderRadius: '0.5rem', 
                                cursor: currentStage === frameworkStages.length - 1 ? 'not-allowed' : 'pointer',
                                opacity: currentStage === frameworkStages.length - 1 ? 0.5 : 1,
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                              }}
                            >
                              Next <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </>
                )}

                {activeSection === 'go-to-market' && (
                  <>
                    <div className="modal-header">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ 
                          width: '3rem', 
                          height: '3rem', 
                          background: '#2563eb', 
                          borderRadius: '0.5rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          marginRight: '1rem' 
                        }}>
                          <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                        </div>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#111827' }}>Go-to-Market Strategy</h2>
                      </div>
                      <button className="close-button" onClick={() => setActiveSection(null)}>
                        <X style={{ width: '1.25rem', height: '1.25rem' }} />
                      </button>
                    </div>
                    <div className="modal-body">
                      <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
                        Focused vertical approaches leveraging deep industry expertise and proven methodologies.
                      </p>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '2rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ 
                              width: '3rem', 
                              height: '3rem', 
                              background: '#dc2626', 
                              borderRadius: '0.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              marginRight: '1rem' 
                            }}>
                              <Building style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>Healthcare</h3>
                          </div>
                          <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#374151' }}>
                              <div style={{ 
                                width: '1.5rem', 
                                height: '1.5rem', 
                                background: '#dc2626', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                marginRight: '0.75rem' 
                              }}>
                                <CheckCircle style={{ width: '1rem', height: '1rem', color: 'white' }} />
                              </div>
                              Compliance & Patient Safety
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#374151' }}>
                              <div style={{ 
                                width: '1.5rem', 
                                height: '1.5rem', 
                                background: '#dc2626', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                marginRight: '0.75rem' 
                              }}>
                                <CheckCircle style={{ width: '1rem', height: '1rem', color: 'white' }} />
                              </div>
                              Operational Efficiency
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', color: '#374151' }}>
                              <div style={{ 
                                width: '1.5rem', 
                                height: '1.5rem', 
                                background: '#dc2626', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                marginRight: '0.75rem' 
                              }}>
                                <CheckCircle style={{ width: '1rem', height: '1rem', color: 'white' }} />
                              </div>
                              Staff Engagement
                            </div>
                          </div>
                        </div>
                        
                        <div style={{ padding: '2rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ 
                              width: '3rem', 
                              height: '3rem', 
                              background: '#2563eb', 
                              borderRadius: '0.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              marginRight: '1rem' 
                            }}>
                              <Globe style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>Manufacturing</h3>
                          </div>
                          <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#374151' }}>
                              <div style={{ 
                                width: '1.5rem', 
                                height: '1.5rem', 
                                background: '#2563eb', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                marginRight: '0.75rem' 
                              }}>
                                <CheckCircle style={{ width: '1rem', height: '1rem', color: 'white' }} />
                              </div>
                              Productivity & Quality
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#374151' }}>
                              <div style={{ 
                                width: '1.5rem', 
                                height: '1.5rem', 
                                background: '#2563eb', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                marginRight: '0.75rem' 
                              }}>
                                <CheckCircle style={{ width: '1rem', height: '1rem', color: 'white' }} />
                              </div>
                              Waste Reduction
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', color: '#374151' }}>
                              <div style={{ 
                                width: '1.5rem', 
                                height: '1.5rem', 
                                background: '#2563eb', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                marginRight: '0.75rem' 
                              }}>
                                <CheckCircle style={{ width: '1rem', height: '1rem', color: 'white' }} />
                              </div>
                              Frontline Engagement
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '1.5rem' }}>Strategic Advantages</h3>
                      <div className="benefit-grid">
                        {sectionBenefits['go-to-market'].map((benefit, index) => (
                          <div key={index} className="benefit-item">
                            <div className="benefit-icon">
                              <benefit.icon style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} />
                            </div>
                            <div className="benefit-content">
                              <h4>{benefit.title}</h4>
                              <p>{benefit.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center pt-16 border-t border-gray-100"
        >
          <p className="text-gray-500 text-lg">Built for sustainable client impact and business growth</p>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default App
