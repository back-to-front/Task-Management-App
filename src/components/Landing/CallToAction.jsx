import { Link } from "react-router";
import "./Landing.css";

export default function CallToAction() {
  return (
    <section className='cta-section'>
      <div className='cta-container'>
        <div className='cta-content'>
          <h2 className='cta-title'>Ready to Get Organized?</h2>
          <p className='cta-description'>
            Join thousands of users who have transformed their productivity with
            Task Manager. Start organizing your tasks today - it's completely
            free!
          </p>
          <div className='cta-buttons'>
            <Link to='/todo' className='cta-btn primary'>
              Start Managing Tasks
            </Link>
            <Link to='/contact' className='cta-btn secondary'>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
