import React from 'react';
import { 
  ArrowRight, Award, BookOpen, Headphones, Shield, Sparkles, Users 
} from 'lucide-react';
import '../Css/Home.css';

const Home = () => {
//   const stats = [
//     { number: "2.7Cr+", label: "PWD Citizens", icon: Users },
//     { number: "50+", label: "Govt Schemes", icon: BookOpen },
//     { number: "24/7", label: "Helpline", icon: Headphones },
//     { number: "21", label: "Disability Types", icon: Shield }
//   ];

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="bg-animated">
        <div className="circle pulse top-20 left-10 w-32 h-32" />
        <div className="circle bounce top-40 right-20 w-24 h-24" />
        <div className="circle ping bottom-20 left-1/4 w-16 h-16" />
        <div className="circle pulse bottom-40 right-1/3 w-20 h-20" />
        <div className="circle spin center w-40 h-40" />
      </div>

      <div className="hero-content">
        {/* <div className="tag animate-fade-in">
          <Award className="tag-icon" />
          Official Government Portal - Serving 2.7 Crore+ Citizens
          <Sparkles className="tag-icon" />
        </div> */}

        <h1 className="hero-heading">
          <span className="slide-up">Know Your Rights</span>
          <span className="slide-up delay-200 gradient-text">Access Your Benefits</span>
          <span className="slide-up delay-400 sub-heading">Government Schemes for PWD</span>
        </h1>

        <p className="hero-para animate-fade-in delay-600">
          Complete information about disability certificates, government schemes, benefits, and rights under the 
          <strong> Rights of Persons with Disabilities Act 2016</strong>. Access <strong>scholarships</strong>, 
          <strong> employment opportunities</strong>, and <strong> financial assistance</strong>.
        </p>

        <div className="hero-buttons animate-fade-in delay-800">
          <button className="primary-btn group">
            <span className="shine-layer"></span>
            Apply for Disability Certificate
            <ArrowRight className="btn-icon" />
          </button>
          <button className="secondary-btn group">
            <span className="overlay"></span>
            <span className="relative z-10">View All Schemes</span>
          </button>
        </div>

        {/* <div className="stats-grid animate-fade-in delay-1000">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card group">
              <div className="stat-icon-container">
                <stat.icon className="stat-icon" />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Home;
