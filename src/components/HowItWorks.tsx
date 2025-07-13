const HowItWorks = () => {
  return (
    <section style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2>How It Works</h2>
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
          Step 1: Request
        </div>
        <div
          style={{ border: "1px solid #ccc", padding: "20px", width: "200px" }}
        >
          Step 2: Ride
        </div>
        <div
          style={{ border: "1px solid #ccc", padding: "20px", width: "200px" }}
        >
          Step 3: Pay
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
