import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">
      <div>Contact</div>
    </Link>
    <Link to="/about/">
      <div>About</div>
    </Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
