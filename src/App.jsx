


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import Post from './components/Post';

function App() {
  const posts = [
    {
        "id": 1,
        "title": "Start Small",
        "description": "Great journeys begin with tiny steps. Don’t wait to be ready—take action now, and the path will reveal itself."
    },
    {
        "id": 2,
        "title": "Never Settle",
        "description": "Comfort is the enemy of progress. Push beyond the ordinary and demand more from yourself every day."
    },
    {
        "id": 3,
        "title": "Adaptability",
        "description": "Change is constant. The ones who thrive aren’t the strongest—they’re the ones who bend, adjust, and move forward."
    },
    {
        "id": 4,
        "title": "Bold Moves",
        "description": "The biggest risk is not taking one. Step boldly into opportunities, even if you can’t see the full outcome."
    },
    {
        "id": 5,
        "title": "Inner Strength",
        "description": "Strength doesn’t come from success. It grows in moments of struggle when you refuse to give up."
    },
    {
        "id": 6,
        "title": "Continuous Learning",
        "description": "Knowledge is a journey, not a destination. Keep learning, experimenting, and growing every single day."
    },
    {
        "id": 7,
        "title": "Patience",
        "description": "Rushing yields regret. Great things take time. Trust the process and keep moving steadily toward your goals."
    },
    {
        "id": 8,
        "title": "Vision",
        "description": "See beyond today. Your imagination is the blueprint; your actions build the reality that others will one day admire."
    },
    {
        "id": 9,
        "title": "Resilience",
        "description": "Obstacles aren’t stop signs—they’re stepping stones. Each challenge you overcome makes you unstoppable."
    },
    {
        "id": 10,
        "title": "Legacy",
        "description": "Your life is a story. Live it so fully, so passionately, that others find guidance, hope, and courage in your journey."
    }
  ]


  return (
    <div style={{background:"linear-gradient(135deg,#fbc2eb 0%,#a6c1ee 100%)",minHeight:"100vh"}}>
      <NavbarComponent/>

      <section id="posts" style={{ padding: "3rem 1rem"}}>
        <h2 className="mb-5 text-center" style={{fontWeight:"bold",fontSize:"2rem",color:"#4a4a4a",letterSpacing:"1px"}}>All Blog Posts</h2>
        <Container>
          <Row>
            {posts.map((post) => (
              <Col key={post.id} sm={12} md={6} lg={4} className="mb-4">
                <Post title={post.title} description={post.description} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default App;


