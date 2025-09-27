import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function Post({ title, description }) {
  const [expanded, setExpanded] = useState(false);
  const shortText = description.length > 100 ? description.substring(0, 100) + "..." : description;

  return (
    <Card style={{ height: "100%",  borderRadius:"20px", overflow:"hidden",boxShadow:"0px 8px 20px rgba(0,0,0,0.1)"}} className="text-center">
      <Card.Body className="d-flex flex-column justify-content-between" style={{padding:"2rem"}}>
        <Card.Title className="text-center"  style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#5a3d5c" }}>{title}</Card.Title>
        <Card.Text className="flex-grow-1 text-center" style={{ color: "#444", margin: "1rem 0", flexGrow: 1 }}>
          {expanded ? description : shortText}
        </Card.Text>

        {description.length > 100 && (
          <div className="text-center">
            <Button variant="outline-primary" size="sm" onClick={() => setExpanded(!expanded)}
            style={{
              borderRadius: "20px",
              padding: "0.4rem 1.2rem",
              fontWeight: "500"
            }}
            >
              {expanded ? "Read Less" : "Read More"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Post;
