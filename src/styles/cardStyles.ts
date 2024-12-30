// Inline styles for simplicity
export const cardStyles: Record<string, React.CSSProperties> = {
    ul: {
      display: "flex",
      flexWrap: "wrap" as "wrap", // Explicitly set the type
      listStyle: "none",
      padding: 0,
      margin: 0,
      gap: "1rem",
    },
    li: {
      flex: "0 0 auto",
      cursor: "pointer",
      border: "1px solid #ccc",
      borderRadius: "8px",
      overflow: "hidden",
      transition: "transform 0.2s",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "0.5rem",
      backgroundColor: "#fff",
    },
    userCard: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    image: {
      borderRadius: "50%",
      width: "50px",
      height: "50px",
    },
    info: {
      display: "flex",
      flexDirection: "column",
    },
  };