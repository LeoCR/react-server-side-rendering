import React from 'react'; 
const SubtitleAbout=(props)=> { 
        return(
            <svg className='subtitle_content' width="100%"
             height="100%" viewBox="0 0 1000 350" version="1.1" 
             xmlns="http://www.w3.org/2000/svg">
                <g className="preload_bg_subtitle"
                transform="matrix(3.52033,0,0,1.14524,-33.3636,130.202)" 
                style={{opacity:0}}>
                    <path d="M292.684,21.653L10.449,21.653L28.178,78.015L10.449,135.167L292.684,135.167L275.859,78.914L292.684,21.653Z" 
                    style={{fill:'rgb(34,34,34)'}}/>
                    <path d="M275.859,78.914L292.684,135.167L10.449,135.167L28.178,78.015L10.449,21.653L292.684,21.653L275.859,78.914ZM11.119,22.527L28.572,78.011L11.112,134.294L292.036,134.294L275.474,78.919L292.044,22.527L11.119,22.527Z" 
                    style={{fill:'rgb(34,34,34)'}}/>
                </g>
                <g className="last_bg_left" 
                    transform="matrix(0.687482,0,0,1,-4.46813,-0.7)">
                    <path d="M370.001,285.7L20.901,285.7L96.282,220.248L20.901,155.7L370.001,155.7L370.001,285.7Z" 
                        style={{fill:'rgb(34,34,34)',
                        stroke:'rgb(34,34,34)',strokeWidth:'1.17px'}}/>
                </g>
                <g className="last_bg_right" transform="matrix(0.683956,0,0,1,151.458,-0.7)">
                    <path d="M1220.9,285.7L870.001,285.7L870.001,155.7L1220.9,155.7L1149.37,221.277L1220.9,285.7Z"
                     style={{fill:'rgb(34,34,34)',stroke:'rgb(1,1,1)',
                     strokeWidth:'1.17px'}}/>
                </g>
                <g className="left_ribbon" transform="matrix(1.35614,0,0,1,-214.927,0)">
                    <path d="M276.476,209.175L343.41,285.813L343.41,194.506L276.476,209.175Z"
                     style={{fill:'rgb(218,218,218)'}}/>
                    <path d="M343.41,285.813L276.476,209.175L343.41,194.506L343.41,285.813ZM278.178,209.814L342.673,283.66L342.673,195.68L278.178,209.814Z" 
                    style={{fill:'rgb(218,218,218)'}}/>
                </g>
                <g className="right_ribbon" transform="matrix(-1.35614,0,0,1,1211.5,0)">
                    <path d="M275.088,208.612L343.41,285.813L343.41,194.506L275.088,208.612Z" 
                    style={{fill:'rgb(218,218,218)'}}/>
                    <path d="M275.088,208.612L343.41,285.813L343.41,194.506L275.088,208.612ZM342.673,283.678L276.819,209.266L342.673,195.669L342.673,283.678Z"
                     style={{fill:'rgb(218,218,218)'}}/>
                </g>
                <g className="bg_title" transform="matrix(1.76591,0,0,1.14318,-257.897,-23.8693)">
                    <rect x="235.497" y="64.618" width="387.367" 
                    height="139.961"/>
                </g>
                <g className="txt_mision"
                 transform="matrix(6.88704,0,0,6.88704,-3012.45,-600.827)">
                    <text x={props.xSvg} y="109.371px" 
                    className="txt-subtitle-about" 
                    style={{fontFamily:'Poppins',fontSize:'12px',
                    fill:'white',stroke:'white',strokeWidth:'0.15px',
                     strokeLinecap:'butt',strokeLinejoin:'round',
                     strokeMiterlimit:1.41421}}>
                        {props.txtSubTitle}
                    </text>
                </g>
            </svg>
        )
}
export default  SubtitleAbout;
