import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. <br /><br /> In a world where imagination knows no bounds, the potential of language unfolds in ways once thought impossible. The written word, long the cornerstone of human expression, now finds new life through the power of artificial intelligence. Every sentence crafted with precision, every idea articulated with clarity, reflects the confluence of human creativity and technological advancement. This is not just the future of communication; it is the evolution of thought itself, a step closer to the harmonious blending of man and machine.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility