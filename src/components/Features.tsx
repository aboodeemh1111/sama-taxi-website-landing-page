const Features = () => {
  return (
    <section style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2>Features</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{ border: "1px solid #ccc", padding: "20px", width: "200px" }}
        >
          24/7 Service
        </div>
        <div
          style={{ border: "1px solid #ccc", padding: "20px", width: "200px" }}
        >
          GPS Tracking
        </div>
        <div
          style={{ border: "1px solid #ccc", padding: "20px", width: "200px" }}
        >
          Easy Payments
        </div>
      </div>
    </section>
  );
};

export default Features;
