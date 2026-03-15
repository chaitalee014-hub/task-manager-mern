import "../styles/home.css";

function Home(){

return(

<div className="home-container">

{/* HERO SECTION */}

<section className="hero">

<h1>Intern Task Management System</h1>

<p>
A simple platform for companies to manage internship tasks,
track progress, and monitor intern performance efficiently.
</p>


</section>


{/* COMPANY INTRO */}

<section className="company-section">

<div className="company-text">

<h2>About Our Company</h2>

<p>
Our company focuses on providing innovative solutions for managing
internship programs. With our task management platform, companies
can assign tasks, monitor intern progress, and evaluate performance
effectively.
</p>

<p>
This system helps interns stay organized and complete tasks within
their deadlines while providing transparency for mentors and managers.
</p>

</div>

<div className="company-image">

<img
src="https://images.unsplash.com/photo-1551434678-e076c223a692"
alt="Company"
/>

</div>

</section>


{/* FEATURES */}

<section className="features">

<h2>Platform Features</h2>

<div className="feature-grid">

<div className="feature-card">
<h3>Task Tracking</h3>
<p>Interns can track their assigned tasks and update progress easily.</p>
</div>

<div className="feature-card">
<h3>Admin Management</h3>
<p>Admins can manage interns and monitor all assigned tasks.</p>
</div>

<div className="feature-card">
<h3>Performance Monitoring</h3>
<p>Managers can evaluate intern productivity and task completion.</p>
</div>

</div>

</section>


{/* FOOTER */}

<footer className="footer">

<h3>Intern Task Manager</h3>

<p>
Helping companies organize internship programs efficiently.
</p>

<div className="footer-contact">

<p>Email: support@company.com</p>
<p>Phone: +91 98765 43210</p>

</div>

<p className="copyright">
© 2026 Company Name. All Rights Reserved.
</p>

</footer>


</div>

)

}

export default Home;