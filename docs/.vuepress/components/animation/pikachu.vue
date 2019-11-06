<template>
  <div :style="{'height':height}" class="pikachu">
    <svg
      enable-background="new 0 0 800 600"
      version="1.1"
      viewBox="0 0 800 600"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      y="0px"
    >
      <defs>
        <clipPath id="dreamClip">
          <path
            d="M193.988,152.65c0.743-3.669,2.725-6.771,5.422-8.959c1.131-5.449,5.583-9.356,10.811-10.057
    c2.582-4.873,8.137-7.688,13.817-6.538c0.324,0.066,0.637,0.154,0.95,0.243c4.445-4.45,10.961-6.663,17.587-5.321
    c3.947,0.799,7.368,2.744,9.99,5.417c2.545-1.007,5.387-1.354,8.278-0.829c4.453,0.808,8.084,3.492,10.26,7.08
    c0.079,0.013,0.157,0.016,0.236,0.031c5.438,0.987,9.427,5.285,10.301,10.436c3.767,3.479,5.739,8.741,4.755,14.16
    c-0.756,4.166-3.115,7.633-6.321,9.895c-0.032,0.273-0.057,0.546-0.107,0.82c-1.115,6.141-6.449,10.446-12.47,10.486
    c-0.989,1.085-2.125,2.016-3.374,2.771c-2.769,2.156-6.4,3.18-10.125,2.504c-1.73-0.314-3.314-0.963-4.699-1.867
    c-4.265,3.165-9.791,4.595-15.407,3.458c-2.634-0.533-5.033-1.577-7.118-3.007c-2.563,0.953-5.409,1.242-8.286,0.659
    c-4.29-0.869-7.775-3.475-9.902-6.93c-4.596-1.237-7.978-4.869-9.065-9.262C195.126,164.328,192.794,158.546,193.988,152.65z"
          />
        </clipPath>
      </defs>
      <ellipse cx="376.014" cy="326.511" fill="#CAEBFF" id="shadow" rx="127.865" ry="34.905" />
      <ellipse cx="172.313" cy="337.736" fill="#CAEBFF" id="ballShadow" rx="17.893" ry="7.107" />
      <g id="ball">
        <circle cx="171.658" cy="324.788" fill="#E0E2E2" r="16.16" />
        <path
          d="M155.556,326.089c0,0.019,6.948,0.018,15.873,0.018c8.925,0,16.334,0.008,16.334-0.011
        c0.048-0.436,0.065-0.876,0.055-1.308c0,0-8.578-0.206-16.694-0.1c-7.724,0.101-15.626,0.1-15.626,0.1
        C155.494,325.216,155.526,325.671,155.556,326.089z"
        />
        <path
          d="M187.818,324.788c0-8.925-7.235-16.16-16.16-16.16c-8.925,0-16.16,7.235-16.16,16.16"
          fill="#FC4642"
        />
        <circle cx="171.658" cy="324.788" r="6.016" />
        <circle cx="171.658" cy="324.788" fill="#E0E2E2" r="4.549" />
      </g>
      <g id="pika">
        <g id="earR">
          <path
            d="M358.285,227.431c54.21-6.194,67.539-26.063,67.539-26.063c-37.934-11.819-70.835,2.06-85.276,10
			l-2.239,1.404c-1.364,0.865-2.188,5.676-1.829,7.661c0.867,4.456,3.808,6.366,8.188,6.813
			C349.977,227.786,353.915,227.931,358.285,227.431z"
            fill="#F9CC17"
          />
          <path
            d="M378.336,198.194c0,0,17.615,4.468,14.714,22.286c0.582-0.128,24.303-7.73,32.774-19.112
			C425.824,201.368,407.914,193.499,378.336,198.194z"
            fill="#191919"
          />
        </g>
        <path
          d="M322.401,298.65c-0.252-0.061-0.507-0.114-0.764-0.158c-9.554-1.619-36.293-4.285-60.53,10.625
		l-0.368,0.323c-0.116,0.125-0.272,0.204-0.441,0.225l-2.578,0.311c-0.704,0.085-0.895,1.016-0.282,1.372l1.785,1.036
		c0.413,0.24,0.493,0.802,0.164,1.148l-1.759,1.845c-0.354,0.372-0.231,0.983,0.241,1.187l1.403,0.609
		c0.453,0.196,0.589,0.773,0.272,1.151l-1.632,1.948c-0.34,0.406-0.155,1.028,0.353,1.181l3.181,0.96
		c0.48,0.145,0.679,0.716,0.393,1.128l-1.103,1.59c-0.366,0.528,0.07,1.239,0.706,1.152l3.968-0.54
		c0.537-0.073,0.968,0.439,0.803,0.955l-0.642,2.016c-0.222,0.696,0.595,1.257,1.165,0.8l2.138-1.712
		c0.123-0.098,0.274-0.155,0.431-0.161l1.263-0.05c0,0,28.671,2.151,53.825-11.787C335.291,309.763,334.505,301.607,322.401,298.65z"
          fill="#F9CC17"
        />
        <ellipse cx="369.778" cy="320.488" fill="#FFDA03" rx="11.651" ry="8.239" />
        <g id="tail">
          <path
            d="M490.233,272.082l23.5,3.279c0.897,0.125,1.602,0.832,1.723,1.73l4.31,31.763
			c0.07,0.519,0.339,0.99,0.75,1.314l35.735,28.218c1.276,1.008,0.9,3.033-0.652,3.516l-32.717,10.177
			c-1.375,0.428-1.874,2.114-0.954,3.221l19.897,23.947c0.951,1.144,0.381,2.888-1.061,3.251l-82.37,20.74
			c-0.781,0.197-1.6-0.084-2.091-0.722c-4.743-6.166-28.884-37.907-32.096-49.297c-0.395-1.403,0.798-2.74,2.241-2.533
			l77.431,11.118c1.336,0.192,2.48-0.954,2.287-2.29l-2.256-15.609c-0.133-0.919,0.377-1.809,1.236-2.16l18.261-7.453
			c1.404-0.573,1.7-2.43,0.545-3.411l-14.821-12.588c-0.442-0.375-0.702-0.923-0.712-1.503l-0.517-27.81
			c-0.017-0.916-0.648-1.706-1.537-1.925l-18.476-4.553c-1.083-0.267-1.745-1.36-1.479-2.443l1.581-6.456
			C488.237,272.596,489.206,271.939,490.233,272.082z"
            fill="#FFDA03"
          />
          <polygon
            fill="#010000"
            points="488.107,271.823 505.449,274.196 510.349,277.347 505.277,278.32 510.435,280.872 
			504.641,282.199 509.833,284.912 503.941,286.459 485.972,282.098"
          />
        </g>
        <g id="bodyGroup">
          <g id="body">
            <path
              d="M352.185,254.619c16.327-11.502,104.119-68.647,138.718,6.149c0.053,0.115,16.654,29.811-6.606,52.364
			c-6.124,5.938-13.819,10.001-22.085,12.105l-21.886,5.569c-31.952,8.185-106.762-6.696-106.539-12.457l2.016-52.152
			c0.214-5.526,4.817-9.861,10.346-9.743h0C348.306,256.5,350.421,255.861,352.185,254.619z"
              fill="#FFDA03"
            />
            <path
              d="M387.728,234.5c0,0,17.517,19.417,18.073,35.55c0,0,11.958-18.735,5.783-43.981
			C411.584,226.07,395.69,230.282,387.728,234.5z"
              fill="#B3671C"
            />
            <path
              d="M411.584,226.07c0,0,9.675,11.31,7.477,42.454c0,0,19.055-17.483,14.395-45.689
            C433.457,222.835,420.42,223.526,411.584,226.07z"
              fill="#B3671C"
            />
          </g>
          <path
            d="M492.343,264.011c-28.828-0.524-44.64,17.7-51.361,28.249c-3.32,5.211-7.715,10.647-12.948,13.932
			l-2.187,1.373c-4.882,3.064-13.487,6.56-19.145,7.663c-7.248,1.413-14.718,1.59-21.637-0.771
			c-4.381-4.441-3.179-10.528-2.435-12.994c14.874-25.8,3.788-49.415,3.788-49.415c-15.064,0.251-20.92,24.771-20.92,24.771
			s-0.265,19.976,2.758,30.157c-5.749-2.755-10.191-5.039-10.356-5.285c0,0-24.311,3.575-9.772,16.446
			c4.543,4.022,10.01,7.081,15.379,9.387c11.001,4.724,22.97,6.75,34.934,6.291c6.762-0.259,14.38-0.658,17.351-0.908
			c0.452,4.656,4.375,8.295,9.149,8.295h46.529c5.078,0,9.195-4.117,9.195-9.195v0c0-2.759-1.221-5.227-3.145-6.912
			c4.012-2.88,7.382-6.69,9.719-11.257C503.186,282.684,492.343,264.011,492.343,264.011z M376.179,310.676
			c0.116-0.128,0.235-0.268,0.353-0.408l0.154,0.638C376.517,310.83,376.348,310.753,376.179,310.676z"
            fill="#F9CC17"
            id="bodyShadow"
          />
        </g>
        <path
          d="M359.488,317.218c-0.249-0.073-0.501-0.138-0.756-0.193
		c-9.469-2.059-36.056-5.958-60.957,7.816l-0.383,0.306c-0.122,0.119-0.281,0.192-0.451,0.204l-2.59,0.191
		c-0.707,0.052-0.941,0.973-0.345,1.357l1.736,1.117c0.402,0.258,0.456,0.824,0.111,1.154l-1.842,1.761
		c-0.371,0.355-0.276,0.971,0.185,1.197l1.374,0.673c0.443,0.217,0.553,0.799,0.219,1.163l-1.72,1.87
		c-0.359,0.39-0.202,1.02,0.298,1.196l3.133,1.106c0.473,0.167,0.645,0.746,0.341,1.145l-1.176,1.537
		c-0.39,0.51,0.012,1.241,0.652,1.184l3.989-0.356c0.54-0.048,0.946,0.483,0.758,0.992l-0.734,1.984
		c-0.254,0.685,0.536,1.283,1.127,0.853l2.215-1.611c0.127-0.093,0.281-0.142,0.438-0.141l1.264,0.008
		c0,0,28.541,3.474,54.312-9.286C371.85,328.915,371.442,320.731,359.488,317.218z"
          fill="#F9CC17"
          id="pawFront"
        />
        <path
          d="M326.217,204.685c-0.713-0.037-1.429-0.063-2.148-0.077c-41.556,0.494-62.5,28.654-62.5,64
        c0,0.727,0.012,1.452,0.035,2.174c0.081,2.492,0.322,4.932,0.683,7.327h-11.219v16.727c0,6.49,2.591,12.715,7.204,17.304h0
        c12.696,12.632,29.835,19.852,47.788,20.131l20.716-1.863c1.245-0.049,2.411-0.194,3.66-0.273
        c8.766-0.936,17.445-3.684,25.431-8.291c23.361-13.475,24.279-26.033,28.102-41.416
        C391.522,242.92,364.426,206.683,326.217,204.685z"
          fill="#FFDA03"
          id="head"
        />
        <circle cx="325.982" cy="296.41" fill="#E22C20" r="15.206" />
        <path
          d="M251.069,278.109c0,3.233,2.763,6.285,5.881,6.285c3.118,0,5.645-2.621,5.645-5.853
        c0-3.233-0.851-6.146-0.851-6.146C258.625,272.395,251.069,274.876,251.069,278.109z"
          fill="#010000"
          id="nose"
        />
        <g id="eye">
          <circle cx="296.622" cy="262.091" fill="#010000" r="9.652" />
          <circle cx="292.622" cy="263.57" fill="#FFFFFF" id="iris" r="2.916" />
          <path
            d="M296.601,252.022c5.532,0,10.016,4.485,10.016,10.016s-4.484,10.016-10.016,10.016
        s-10.016-4.484-10.016-10.016S291.069,252.022,296.601,252.022z"
            fill="#F9CC17"
            id="eyeLid"
          />
        </g>
        <path
          d="M291.185,208.734c0,0-8.652,6.578-11.702,12.884c-2.939,6.077,9.294,0.122,9.294,0.122L291.185,208.734z"
          fill="#FFDA03"
        />
        <path
          d="M297.316,206.649c0,0-6.316,3.301-9.395,9.552c-3.079,6.251,6.923,4.068,6.923,4.068L297.316,206.649z"
          fill="#FFDA03"
        />
        <path
          d="M254.664,305.579
        c0.832-0.807,1.61-1.318,2.708-1.69c1.097-0.372,2.358-0.37,3.37,0.196c0.944,0.527,2.279,2.312,4.787,2.252
        c2.238-0.054,3.157-0.599,4.409-1.982"
          fill="none"
          id="mouth"
          stroke="#645200"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <g id="leg">
          <path
            d="M471.895,342.952h-52.248c-5.078,0-9.195-4.117-9.195-9.195l0,0c0-5.078,4.117-9.195,9.195-9.195h52.248
            c5.078,0,9.195,4.117,9.195,9.195l0,0C481.09,338.835,476.974,342.952,471.895,342.952z"
            fill="#FFDA03"
          />
          <path
            d="M427.853,332.671c0,0,9.929-66.103,65.719-66.103c0,0,11.039,18.867-4.907,50.02
            c-5.644,11.027-17.238,17.724-29.617,17.258L427.853,332.671z"
            fill="#FFDA03"
          />
          <path
            d="M489.552,314.389l-1.599,4.022c-1.961,4.932-4.153,9.769-6.568,14.495l-1.569,3.07l-18.854-0.923
            l12.736-32.749L489.552,314.389z"
            fill="#FFDA03"
          />
        </g>
        <g id="earL">
          <path
            d="M354.441,250.402c62.638,14.495,90.785-5.392,90.785-5.392c-32.772-21.343-73.57-18.31-92.113-15.409
            c-3.712,1.237-5.354,2.889-6.106,5.633c-0.538,1.965-0.435,4.051,0.13,6.008l1.074,3.725
            C349.252,247.7,351.592,249.742,354.441,250.402z"
            fill="#FFDA03"
          />
          <path
            d="M397.482,228.615c0,0,18.023,10.117,9.929,26.728c0.604,0.015,25.652-1.64,37.815-10.333
            C445.226,245.01,428.036,231.991,397.482,228.615z"
            fill="#010000"
          />
          <path
            d="M408.838,251.584c-31.771,1.424-60.463-6.256-60.463-6.256c0.753,3.929,6.303,5.323,8.647,5.741
			c1.085,0.193,2.174,0.399,3.254,0.621c19.1,3.922,34.757,4.506,47.146,3.653c0,0,0.785-1.733,0.941-2.252
			C408.364,253.091,408.801,251.865,408.838,251.584"
            fill="#F9CC17"
          />
          <path
            d="M408.838,251.584c0,0,26.513-3.406,36.388-6.574c0,0-10.529,8.498-37.803,10.333
			C407.409,255.296,408.191,253.853,408.838,251.584z"
            fill="#191919"
          />
        </g>
      </g>
      <g id="lightning">
        <path
          d="
    M416.924,375.609c0,0-14.134,0.949-17.628-2.985c-3.494-3.934-6.797,1.164-6.797,1.164l-3.34,8.232
    c-0.503,1.241-1.762,2-3.095,1.867c-1.629-0.163-3.651-0.278-4.225,0.067c-1.006,0.604-4.577,0.354-5.937-1.909
    c-0.765-1.273-0.511-2.833-0.142-3.954c0.372-1.131,0.254-2.364-0.252-3.441c-0.894-1.903-2.365-4.89-3.989-7.593
    c0,0-2.241-5.155,4.146-8.478c0,0,5.931-3.049,4.951-6.053c0,0-5.116-9.7-4.804-10.722c0.313-1.022,1.55-5.285,1.55-5.285
    s0.407-3.487-3.748-5.623s-20.066-12.126-20.066-12.126"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M328.701,297.975c0,0,3.144,3.842,12.131,0.115l9.864-2.411c0,0,2.417-1.899,5.259-0.028c0.655,0.431,1.51,0.356,2.068-0.196
        c1.428-1.413,4.085-3.213,5.533,1.028c0,0,1.681,4.311,6.138,4.165"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M323.315,303.737c0,0-3.333,2.658-4.162,7.806c-0.126,0.781-0.424,1.531-0.907,2.158c-0.36,0.467-0.713,1.03-0.713,1.442
        c0,0.841,0.788,3.101-0.946,5.413s-3.048,4.888-2.838,6.517"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M317.417,299.91c0,0-4.712-0.319-9.225,2.774c-0.968,0.663-2.103,1.038-3.274,0.964c-1.145-0.072-2.584-0.037-3.509,0.461
        c-1.416,0.763-3.255,2.43-5.641,2.974c-1.189,0.271-2.234,0.976-2.941,1.969c-0.908,1.273-1.915,2.908-1.915,3.805"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M332.251,288.586c0,0,1.216-4.135,3.952-4.743s1.885-4.013,1.885-4.013"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M320.201,291.083c0,0-2.268-0.866-4.247,0.289s-3.794-3.299-3.794-3.299s-3.67-1.113-5.072-0.866c0,0,0.289-1.897,0-1.938
        c-0.289-0.041-1.567-1.32-3.876-1.402"
          fill="none"
          stroke="#FFEA8D"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M341.461,284.194c0,0,3.224-0.941,5.366-4.445c0.325-0.532,0.767-0.989,1.306-1.301c0.402-0.233,0.827-0.538,0.95-0.838
        c0.251-0.613,0.352-2.496,2.308-3.663c1.955-1.167,3.683-2.651,4.017-3.902"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M309.833,320.528c0,0-1.216,4.135-3.952,4.743c-2.736,0.608-1.885,4.013-1.885,4.013"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M330.642,306.116c0,0,1.497,1.911,3.788,1.943c2.291,0.031,1.549,4.783,1.549,4.783s2.57,2.846,3.899,3.358
        c0,0-1.226,1.476-0.999,1.66c0.226,0.184,0.662,1.939,2.598,3.2"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M294.609,280.869c0,0-9.036-1.312-9.921-4.14s-4.622-14.768-4.622-14.768s-3.667-1.443-4.946-0.932
        c-1.279,0.511-9.671-16.429-9.912-17.198c-0.241-0.769-4.612-0.162-6.001,1.878l-10.089-8.754c0,0-7.161,1.143-8.848,2.769
        s-5.514,4.513-7.198,4.533c-1.049,0.012-1.334,1-1.399,1.742c-0.045,0.508-0.415,0.929-0.905,1.072l-3.12,0.911l-4.101,2.551
        c0,0-5.82,10.015-13.87,1.3l-0.861-2.753c0,0-5.563-5.627,0.357-8.578l1.702-1.04c0,0-1.518-6.199,0.559-8.2
        s4.673-3.152,4.673-3.152l1.074-7.094c0,0-2.092-8.169-11.6-5.059c-0.854,0.279-1.556,0.943-1.825,1.801
        c-0.887,2.831-1.069,6.612-1.069,6.612s0.593,2.433,2.574,1.475"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M202.565,413.247c0,0,10.452-0.463,12.564-4.581c1.427-2.783,7.789-6.994,11.761-9.43c2.199-1.349,4.861-1.751,7.346-1.058
        c3.004,0.837,6.754,2.36,7.899,4.91c2.003,4.462,16.141,9.954,22.03,0.62l-0.159-1.922c-0.103-1.248,0.591-2.425,1.733-2.939
        l1.828-0.822c0.53-0.238,0.886-0.742,0.94-1.32c0.2-2.13,1.326-7.351,7.502-8.878c7.823-1.935,1.803-11.156-1.896-11.282
        c-3.267-0.11-13.23-1.519-16.793-4.252c-0.606-0.464-0.719-1.311-0.32-1.961c0.527-0.859,0.955-2.456-0.261-5.03
        c-1.019-2.157-1.77-3.691-2.263-4.679c-0.404-0.811-0.26-1.782,0.365-2.437c1.719-1.8,4.747-5.701,3.326-9.679
        c-1.94-5.428,17.856-2.712,17.856-2.712s5.346-0.095,8.242-7.178c1.703-4.165,5.917-6.881,10.372-6.256
        c0.737,0.103,1.464,0.297,2.161,0.607"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M364.867,261.674l7.452-7.061c0,0,5.815,1.163,8.257,0c2.442-1.163,1.396-3.722,5.931-2.326c4.536,1.396,11.514,3.14,15.003,8.723
        c2.036,3.258,7.875,6.12,12.384,7.938c3.659,1.475,7.749,1.464,11.398-0.038c3.198-1.317,6.941-3.096,8.899-4.876"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="
        M328.701,276.407l4.962-9.845c0,0-2.402-6.449,1.222-7.777c3.624-1.328,7.634-7.528,7.634-7.528s-0.066-0.66-0.107-1.672
        c-0.109-2.7-0.044-7.907,1.911-9.807c2.687-2.613,4.766-3.073,5.098-5.19c0.333-2.117,2.015-5.919,2.015-5.919
        s3.699,2.343,5.556,0.873s4.683-3.06,6.584-2.219c1.901,0.841,4.088,1.591,4.088,1.591s4.694-6.583,8.892-7.414
        s1.164-7.408,1.164-7.408l-2.155-4.405c0,0,1.417-3.844,3.464-3.929c0,0,1.187-4.965,5.388-0.645c0,0,5.335,3.143,7.89,3.273
        c2.555,0.13,3.345,4.592,3.345,4.592"
          fill="none"
          stroke="#FFCB4A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </g>
      <g id="cloudGroup">
        <g id="cloudBubbles">
          <circle cx="268.708" cy="205.781" fill="#FFFFFF" r="2.434" />
          <circle cx="258.953" cy="202.281" fill="#FFFFFF" r="3.5" />
          <circle cx="248.648" cy="195.196" fill="#FFFFFF" r="4.044" />
        </g>
        <g id="cloudL">
          <circle cx="237.745" cy="167.363" fill="#FFFFFF" r="19.404" />
          <circle cx="221.504" cy="169.155" fill="#FFFFFF" r="15.181" />
          <circle cx="211.915" cy="164.785" fill="#FFFFFF" r="12.775" />
          <circle cx="209.185" cy="155.728" fill="#FFFFFF" r="15.505" />
          <circle cx="211.915" cy="146.287" fill="#FFFFFF" r="12.775" />
          <circle cx="221.504" cy="139.618" fill="#FFFFFF" r="12.775" />
        </g>
        <g id="cloudR">
          <circle cx="238.725" cy="141.037" fill="#FFFFFF" r="19.404" />
          <circle cx="258.133" cy="141.544" fill="#FFFFFF" r="15.181" />
          <circle cx="269.059" cy="146.287" fill="#FFFFFF" r="12.775" />
          <circle cx="271.142" cy="155.545" fill="#FFFFFF" r="15.505" />
          <circle cx="267.401" cy="166.748" fill="#FFFFFF" r="12.775" />
          <circle cx="256.282" cy="172.222" fill="#FFFFFF" r="12.775" />
          <circle cx="256.282" cy="169.309" fill="#FFFFFF" r="15.181" />
        </g>
      </g>
      <g clip-path="url(#dreamClip)" id="foodGroup">
        <g id="ketchup">
          <path
            d="M246.109,151.615c0,0-3.055-6.394-2.875-10.437l-3.179,0.195l-2.965-0.195
            c0.18,4.043-2.875,10.437-2.875,10.437c-3.89,8.256-0.926,15.667-0.183,17.281c0.294,1.209,2.924,2.155,6.126,2.155
            c3.173,0,5.784-0.929,6.118-2.122C246.994,167.384,250.026,159.927,246.109,151.615z"
            fill="#6E030D"
          />
          <rect fill="#B6DAD0" height="2.026" width="6.14" x="237.091" y="139.744" />
          <ellipse cx="240.161" cy="139.742" fill="#B6DAD0" rx="3.07" ry="0.863" />
          <rect fill="#B6DAD0" height="1.539" width="0.623" x="239.756" y="137.829" />
          <ellipse cx="240.068" cy="137.834" fill="#B6DAD0" rx="0.312" ry="0.219" />
          <rect
            fill="#B6DAD0"
            height="5.751"
            transform="matrix(0.8146 0.58 -0.58 0.8146 124.9969 -116.2821)"
            width="0.853"
            x="243.975"
            y="134.519"
          />
          <ellipse
            cx="244.161"
            cy="137.011"
            fill="#B6DAD0"
            rx="2.704"
            ry="0.453"
            transform="matrix(0.5808 -0.8141 0.8141 0.5808 -9.18 256.1956)"
          />
          <ellipse
            cx="244.828"
            cy="137.523"
            fill="#B6DAD0"
            rx="2.735"
            ry="0.453"
            transform="matrix(0.5808 -0.8141 0.8141 0.5808 -9.3175 256.9534)"
          />
        </g>
        <g id="apple">
          <path
            d="M240.476,152.132c0,0-0.086-4.331,1.541-5.703l-0.771-0.26c0,0-1.536,4.488-1.244,5.962H240.476z"
            fill="#6B4329"
          />
          <path
            d="M249.453,154.393c-1.231-7.948-9.211-3.99-9.211-3.99l0,0c-1.358-0.697-7.613-3.478-9.214,3.498
            c-0.897,3.909,0.194,6.954,1.513,9.025c1.505,2.362,4.479,3.914,7.278,3.996c0.115,0.003,0.429-0.002,0.455-0.003
            c3.567-0.104,5.823-1.31,7.224-3.373C248.846,161.561,250.09,158.51,249.453,154.393z"
            fill="#CD1419"
          />
        </g>
      </g>
    </svg>
  </div>
</template>
<script>
import { TweenMax } from 'gsap/TweenMax'
import { CustomEase } from 'gsap/all'

export default {
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    this.height = window.innerHeight - 58 + 'px'

    TweenMax.set('svg', { visibility: 'visible', y: 50 })
    TweenMax.set('#ball', { x: 30 })
    TweenMax.set('#ballShadow', { x: 30 })
    TweenMax.set('#lightning path', { drawSVG: '0%' })

    const eyeOpenPath =
      'M296.601,252.022c5.532,0,10.016,4.485,10.016,10.016s-4.484,7.016-10.016,7.016s-10.016-1.484-10.016-7.016S291.069,252.022,296.601,252.022z'
    const eyeAnnoyedPath =
      'M296.601,252.022c5.532,0,10.016,4.485,10.016,10.016s-4.928,0.918-10.46,0.918s-9.573,4.614-9.573-0.918S291.069,252.022,296.601,252.022z'
    const mouthAngryPath =
      'M253.164,301.979c9.506-0.563,13.444,4.778,15.329,9.148'
    const eyeClosedPath =
      'M296.601,252.022c5.532,0,10.016,4.485,10.016,10.016s-4.484,10.016-10.016,10.016s-10.016-4.484-10.016-10.016S291.069,252.022,296.601,252.022z'

    const rollBall = () => {
      const tl = new TimelineMax()
      tl.timeScale(0.6)
    }
    // breathe
    const breatheTl = new TimelineMax({
      repeat: -1
    })
    breatheTl
      .to(
        '#body',
        1,
        {
          scaleY: 1.03,
          transformOrigin: 'center bottom',
          ease: Sine.easeInOut
        },
        0
      )
      .to(
        '#tail',
        1,
        {
          x: 2.5,
          rotation: -3,
          transformOrigin: 'left center',
          ease: Sine.easeInOut
        },
        0
      )
      .to(
        '#earR',
        1,
        {
          x: -2,
          rotation: -4,
          ease: Sine.easeInOut
        },
        0
      )
      .to(
        '#earR',
        1,
        {
          x: 0,
          rotation: 0
        },
        1.1
      )
      .to(
        '#earL',
        1,
        {
          x: -2,
          rotation: -2,
          ease: Power1.easeInOut
        },
        0
      )
      .to(
        '#earL',
        1,
        {
          x: 0,
          rotation: 0
        },
        1
      )
      .to(
        '#body',
        1,
        {
          scaleY: 1,
          transformOrigin: 'center bottom',
          ease: Sine.easeInOut
        },
        1.25
      )
      .to(
        '#tail',
        1,
        {
          x: 0,
          rotation: 0,
          ease: Sine.easeInOut
        },
        1.25
      )
      .to(
        '#mouth',
        1,
        {
          rotation: 4,
          x: -1,
          y: -1,
          transformOrigin: 'center bottom',
          ease: Power1.easeInOut
        },
        0
      )
      .to(
        '#mouth',
        1,
        {
          rotation: 0,
          x: 0,
          y: 0,
          transformOrigin: 'center bottom',
          ease: Back.easeInOut.config(2)
        },
        1.28
      )
      .to(
        '#nose',
        1,
        {
          rotation: 7,
          x: 1,
          y: -2,
          transformOrigin: 'center top',
          ease: Power2.easeInOut
        },
        0
      )
      .to(
        '#nose',
        1,
        {
          rotation: 0,
          x: 0,
          y: 0,
          transformOrigin: 'center top',
          ease: Back.easeInOut.config(4)
        },
        1.28
      )
      .add(rollBall, 1.68)

    // Clouds
    const cloudRGroup = document.querySelector('#cloudR')
    const cloudLGroup = document.querySelector('#cloudL')
    const cloudsR = document.querySelectorAll('#cloudR circle')
    const cloudsL = document.querySelectorAll('#cloudL circle')
    const cloudBubbles = document.querySelectorAll('#cloudBubbles circle')
    TweenMax.set(cloudBubbles, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center'
    })
    TweenMax.set(cloudsR, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center'
    })
    TweenMax.set(cloudsL, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center'
    })
    // Cloud objects inside mask
    TweenMax.set('#apple', { opacity: 0, transformOrigin: 'center center' })
    TweenMax.set('#ketchup', {
      x: 60,
      opacity: 0,
      transformOrigin: 'center center'
    })

    // food in tl
    const foodInTl = new TimelineMax({ paused: true })

    foodInTl
      .set('#apple', { opacity: 1 })
      .to('#apple', 0.4, { x: -60, y: 5, ease: Power3.easeIn }, 0.8)

    const foodTl = new TimelineMax({
      repeat: -1,
      paused: true,
      repeatDelay: 0.4
    })
    foodTl
      .fromTo(
        '#ketchup',
        0.4,
        { x: 60, y: 5 },
        { scale: 1, x: 0, y: 0, opacity: 1, ease: Power3.easeIn }
      )
      .to('#ketchup', 0.4, { x: -60, y: 5, ease: Power3.easeIn }, 1.2)
      .fromTo(
        '#apple',
        0.4,
        { x: 60, y: 5, immediateRender: false },
        { scale: 1, x: 0, y: 0, opacity: 1, ease: Power3.easeIn },
        1.8
      )
      .to('#apple', 0.4, { x: -60, y: 5, ease: Power3.easeIn }, 3.2)

    const animateClouds = () => {
      for (let i = 0; i < cloudsR.length - 1; i++) {
        const tl = new TimelineMax({ repeat: -1 })
        let delayT = i * 0.05
        tl.to(
          cloudsR[i],
          0.25,
          { scale: 1.12, ease: Linear.easeNone, delay: delayT },
          'in'
        )
          .to(
            cloudsR[i],
            0.25,
            { scale: 1, ease: Linear.easeNone, delay: delayT },
            'out'
          )
          .to(
            cloudsL[i],
            0.25,
            { scale: 1.12, ease: Linear.easeNone, delay: delayT },
            'in'
          )
          .to(
            cloudsL[i],
            0.25,
            { scale: 1, ease: Linear.easeNone, delay: delayT },
            'out'
          )
      }
    }

    const animateCloudTl = new TimelineMax({ repeat: -1, paused: true })
    animateCloudTl
      .to(
        cloudRGroup,
        0.3,
        {
          scale: 1.05,
          transformOrigin: 'center center',
          ease: Linear.easeNone
        },
        'in'
      )
      .to(
        cloudLGroup,
        0.3,
        {
          scale: 1.05,
          transformOrigin: 'center center',
          ease: Linear.easeNone
        },
        'in'
      )
      .to(
        cloudRGroup,
        0.3,
        { scale: 1, transformOrigin: 'center center', ease: Linear.easeNone },
        'out'
      )
      .to(
        cloudLGroup,
        0.3,
        { scale: 1, transformOrigin: 'center center', ease: Linear.easeNone },
        'out'
      )

    const cloudTl = new TimelineMax({ delay: 0 })

    cloudTl
      .staggerTo(
        cloudBubbles,
        0.4,
        { scale: 1, opacity: 1, ease: Back.easeOut.config(3) },
        0.1,
        'in'
      )
      .staggerTo(
        cloudsL,
        0.3,
        { scale: 1, opacity: 1, ease: Back.easeOut.config(4) },
        0.07,
        'in+=0.30'
      )
      .staggerTo(
        cloudsR,
        0.3,
        { scale: 1, opacity: 1, ease: Back.easeOut.config(4) },
        0.07,
        'in+=0.50'
      )
      .add(animateClouds, 'in+=0.86')
      .add(animateCloudTl.play(), 'in+=0.86')
      .add(foodInTl.play(), 'in+=0.62')
      .add(foodTl.play(), 'in+=2.12')

    const restartCloudsTl = () => {
      const tl = new TimelineMax()

      tl.staggerFromTo(
        cloudBubbles,
        0.4,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, ease: Back.easeOut.config(3) },
        0.1,
        'in'
      )
        .staggerFromTo(
          cloudsL,
          0.3,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, ease: Back.easeOut.config(4) },
          0.07,
          'in+=0.2'
        )
        .staggerFromTo(
          cloudsR,
          0.3,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, ease: Back.easeOut.config(4) },
          0.07,
          'in+=0.4'
        )
        .set('#foodGroup', { opacity: 1 }, 'in+=0.5')
        .add(foodTl.play(), 'in+=0.8')
    }
    // masterTl
    const masterTl = new TimelineMax()

    masterTl.add(breatheTl.play(), 0)

    let clickCount = 0
    let playing = false

    document.querySelector('#pika').addEventListener('click', () => {
      if (clickCount < 2 && playing === false) {
        clickCount++
        playing = true
        const tl = new TimelineMax({
          onComplete: () => {
            playing = false
          }
        })
        tl.to(
          '#eye',
          0.4,
          { y: -2, scaleY: 0.95, transformOrigin: 'center bottom' },
          'open'
        )
          .to('#eyeLid', 0.4, { attr: { d: eyeOpenPath } }, 'open')
          .to('#iris', 0.4, { x: 1, y: 4 }, 'open')
          .to(
            '#eye',
            0.4,
            { y: 0, scaleY: 1, transformOrigin: 'center bottom' },
            'move'
          )
          .to('#iris', 0.26, { x: 5 }, 'move')
          .to('#iris', 0.26, { x: 1 }, 'move+=0.45')
          .to('#eyeLid', 0.4, { attr: { d: eyeClosedPath } })
      }
      if (clickCount >= 2 && playing === false) {
        clickCount++
        playing = true
        // STOP CLOUDS/FOOD TL
        TweenMax.set('#cloudGroup', {
          opacity: 0,
          onComplete: () => {
            cloudTl.stop()
          }
        })
        TweenMax.set('#foodGroup', { opacity: 0 })
        TweenMax.set('#apple', { opacity: 0 })

        // Light it up
        const lightningTl = new TimelineMax({
          onComplete: () => {
            const tl = new TimelineMax({})
            tl.set(
              '#lightning path',
              { drawSVG: '0%', opacity: 1, strokeWidth: 0 },
              'in'
            )
              .to('#eyeLid', 0.3, { attr: { d: eyeClosedPath } }, 'in+=0.3')
              .set('#iris', { x: 0, y: 4 }, 'in+=0.75')

              .set(
                '#cloudGroup',
                {
                  opacity: 1,
                  onComplete: () => {
                    restartCloudsTl()
                  }
                },
                'in+=0.75'
              )

            playing = false
            clickCount = 0
          }
        })

        lightningTl
          // animatie path length
          .staggerTo(
            '#lightning path',
            0.25,
            { drawSVG: '25% 100%', opacity: 1, strokeWidth: 2 },
            0.01,
            'in'
          )
          .to(
            '#lightning path',
            0.1,
            { drawSVG: '50% 75%', ease: Linear.easeNone },
            'in+=0.4'
          )
          // animate lightning path opacity
          .to('#lightning path', 0.1, { opacity: 0 }, 'in+=0.6')
          // scale lightning path
          .to(
            '#lightning path',
            0.3,
            { scale: 1.25, transformOrigin: 'center center' },
            'in'
          )
          .to(
            '#lightning path',
            0.3,
            { scale: 1, transformOrigin: 'center center' },
            'in+=0.7'
          )
          // morph eyelid path
          .to('#eyeLid', 0.3, { attr: { d: eyeAnnoyedPath } }, 'in')
          .to('#iris', 0.3, { x: 0, y: 0 }, 'in')
          .to('#mouth', 0.3, { attr: { d: mouthAngryPath } }, 'in')

        lightningTl.timeScale(1.5)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.pikachu {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e3f2fd;
}
svg {
  width: 100%;
  height: 100%;
  visibility: hidden;
}
#pika {
  cursor: pointer;
}
</style>