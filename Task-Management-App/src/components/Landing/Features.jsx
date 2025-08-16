import "./Landing.css";

export default function Features() {
  const features = [
    {
      title: "Easy Task Creation",
      description: "Quickly add new tasks with our intuitive form interface",
      icon: "✓",
    },
    {
      title: "Smart Filtering",
      description: "View all tasks, only completed ones, or just active items",
      icon: "🔍",
    },
    {
      title: "Local Storage",
      description:
        "Your tasks are saved locally and persist across browser sessions",
      icon: "💾",
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on desktop, tablet, and mobile devices",
      icon: "📱",
    },
  ];

  return (
    <section className='features-section'>
      <div className='features-container'>
        <div className='features-header'>
          <h2>Why Choose Task Manager?</h2>
          <p>Everything you need to stay organized and productive</p>
        </div>
        <div className='features-grid'>
          {features.map((feature, index) => (
            <div key={index} className='feature-card'>
              <div className='feature-icon'>{feature.icon}</div>
              <h3 className='feature-title'>{feature.title}</h3>
              <p className='feature-description'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
