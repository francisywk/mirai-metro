---
title: Red Line
title_zh: 紅綫
route_sign: [R]
terminus_start: Fhoenix Hill
terminus_end: Portal Hill
branch_line: false
stations:
  - station_code: [R1]
    name: Fhoenix Hill
    name_zh: 飛利斯山
    first_station: true
  - station_code: [R2]
    name: Paradise Falls
    name_zh: 仙境瀑布
    transfer: 
      - route_sign: [B]
  - station_code: [R3]
    name: Under the Falls
    name_zh: 瀑布下
    transfer: 
      - route_sign: [W]
  - station_code: [R4]
    name: Downtown Core
    name_zh: 市中心
    transfer: 
      - route_sign: [G,W]
  - station_code: [R5]
    name: Portal Hill
    name_zh: 波打山
    last_station: true
custom_style: table{margin:0 auto}.station-code-bg-first{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:61px bottom}.station-code-bg{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 101%;background-position:61px}.station-code-bg-last{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:61px top}
weight: 1
---