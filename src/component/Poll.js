import React from 'react'
import './Poll.css'
export default function Poll() {
  return (
   <>
   <div class="container">
  <div id="play">Play</div>
  <div id="equalizer">
    <span class="high" style="--index:10">700</span>
    <span class="high" style="--index:9">600</span>
    <span class="medium" style="--index:8">500</span>
    <span class="medium" style="--index:7">400</span>
    <span style="--index:6">300</span>
    <span style="--index:5">200</span>
    <span style="--index:4">100</span>
    <span style="--index:3">0</span>
    
  </div>
</div>

<div class="container">
  <div id="play">Play</div>
  <div id="equalizer">
     <span class="high" style="--index:10">700</span>
    <span class="high" style="--index:9">600</span>
    <span class="medium" style="--index:8">500</span>
    <span class="medium" style="--index:7">400</span>
    <span style="--index:6">300</span>
    <span style="--index:5">200</span>
    <span style="--index:4">100</span>
    <span style="--index:3">0</span>
  </div>
</div>

   
   </>
  )
}
