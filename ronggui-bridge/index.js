parse_panorama({
  "bridge": {
    "sides": [
      "images/1.front.jpg",
      "images/1.right.jpg",
      "images/1.back.jpg",
      "images/1.left.jpg",
      "images/1.top.jpg",
      "images/1.bottom.jpg"
    ],
    "lon": 180,
    "autorotate": 0,
    "infobox": "<b>Ronggui Bridge</b><br>You can walk close to the bridge pier.",
    "touch": true,
    "gyro": false,
    "hotspots": [
      {
        "type": "nav",
        "face": 1,
        "x": 900,
        "y": 500,
        "name": "Bridge pier (bottom)",
        "value": "pier_bottom"
      },
      {
        "type": "nav",
        "face": 1,
        "x": 950,
        "y": 130,
        "name": "Bridge pier (top)",
        "value": "pier_top"
      },
      {
        "type": "nav",
        "face": 3,
        "x": 520,
        "y": 500,
        "name": "Outside",
        "value": "outside"
      }
    ]
  },
  "pier_bottom": {
    "sides": [
      "images/2.front.jpg",
      "images/2.right.jpg",
      "images/2.back.jpg",
      "images/2.left.jpg",
      "images/2.top.jpg",
      "images/2.bottom.jpg"
    ],
    "lon": 250,
    "autorotate": 0,
    "infobox": "<b>Bridge pier (bottom)</b><br>Look up and go to the top.",
    "touch": true,
    "gyro": false,
    "hotspots": [
      {
        "type": "nav",
        "face": 4,
        "x": 650,
        "y": 500,
        "name": "Bridge pier (top)",
        "value": "pier_top"
      },
      {
        "type": "nav",
        "face": 2,
        "x": 900,
        "y": 500,
        "name": "Bridge",
        "value": "bridge"
      },
      {
        "type": "nav",
        "face": 2,
        "x": 550,
        "y": 500,
        "name": "Outside",
        "value": "outside"
      }
    ]
  },
  "pier_top": {
    "sides": [
      "images/3.front.jpg",
      "images/3.right.jpg",
      "images/3.back.jpg",
      "images/3.left.jpg",
      "images/3.top.jpg",
      "images/3.bottom.jpg"
    ],
    "lon": 120,
    "autorotate": 0,
    "infobox": "<b>Bridge pier (top)</b><br>You may go down or stay for a minute.",
    "touch": true,
    "gyro": false,
    "hotspots": [
      {
        "type": "nav",
        "face": 2,
        "x": 650,
        "y": 850,
        "name": "Bridge",
        "value": "bridge"
      },
      {
        "type": "nav",
        "face": 5,
        "x": 450,
        "y": 550,
        "name": "Bridge pier (bottom)",
        "value": "pier_bottom"
      },
      {
        "type": "nav",
        "face": 2,
        "x": 380,
        "y": 630,
        "name": "Outside",
        "value": "outside"
      }
    ]
  },
  "outside": {
    "sides": [
      "images/4.front.jpg",
      "images/4.right.jpg",
      "images/4.back.jpg",
      "images/4.left.jpg",
      "images/4.top.jpg",
      "images/4.bottom.jpg"
    ],
    "lon": 100,
    "autorotate": 0,
    "infobox": "<b>Outside</b><br>Walk close the biggest pier.",
    "touch": true,
    "gyro": false,
    "hotspots": [
      {
        "type": "nav",
        "face": 0,
        "x": 200,
        "y": 500,
        "name": "Bridge",
        "value": "bridge"
      },
      {
        "type": "nav",
        "face": 0,
        "x": 230,
        "y": 400,
        "name": "Bridge pier (top)",
        "value": "pier_top"
      }
    ]
  }
});
