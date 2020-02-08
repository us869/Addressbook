import React from "react";
import "./AppFooter.css";

export default function AppFooter({ year, website, company }) {
  return (
    <div>
      <p className="app-footer">
        &copy; {year} - All rights reserved by <a href={website}>{company}</a>
      </p>
    </div>
  );
}
