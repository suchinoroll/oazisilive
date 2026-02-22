import "./Button.css";

export default function Button({
                                   children,
                                   variant = "primary",
                                   onClick,
                                   type = "button"
                               }) {
    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            type={type}
        >
      <span className="btn-content">
        {children}
          <span className="btn-arrow">→</span>
      </span>
        </button>
    );
}
