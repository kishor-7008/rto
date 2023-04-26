import React from 'react'
import './speedometer2.css'
export default function SpeedoMeter2() {
  return (
    <>
    <div class='speed'>
      <div class='speed__wheel'>
        <div class='speed__tick'>
          <div class='tick' value='0'></div>
          <div class='tick' value='10'></div>
          <div class='tick' value='20'></div>
          <div class='tick' value='30'></div>
          <div class='tick' value='40'></div>
          <div class='tick' value='50'></div>
          <div class='tick' value='60'></div>
          <div class='tick' value='70'></div>
          <div class='tick' value='80'></div>
          <div class='tick' value='90'></div>
          <div class='tick' value='100'></div>
          <div class='tick' value='110'></div>
          <div class='tick' value='120'></div>
          <div class='tick' value='130'></div>
          <div class='tick' value='140'></div>
          <div class='tick' value='150'></div>
          <div class='tick' value='160'></div>
          <div class='tick' value='170'></div>
          <div class='tick' value='180'></div>
          <div class='tick' value='190'></div>
        </div>
        <div class='pointer'></div>
        <div class='endpoint'></div>
      </div>
    </div>
    </>
  )
}
