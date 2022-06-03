import React from 'react'

const Footer = ({length}) => {
return <footer class="footer">
<div class="container">
  <span class="text-muted">{length}</span>
</div>
</footer>
}

export default Footer