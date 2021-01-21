---
title: Red Line
title_zh: 紅綫
route_sign: [R]
branch_line: false
stations:
  - station_code: [R2]
    name: Miraibridge
    name_zh: 美來橋
    transfer: 
      - route_sign: [C,S]
    first_station: true
  - station_code: [R3]
    name: Fhoenix Hill
    name_zh: 飛利斯山
  - station_code: [R4]
    name: Paradise Falls
    name_zh: 仙境瀑布
    transfer: 
      - route_sign: [B]
  - station_code: [R5]
    name: Under the Falls
    name_zh: 瀑布下
    transfer: 
      - route_sign: [W,P]
  - station_code: [R6]
    name: Downtown
    name_zh: 下環
    transfer: 
      - route_sign: [G,W]
  - station_code: [R7]
    name: Cavehaven
    name_zh: 旗喜雲
    transfer: 
      - route_sign: [G,P]
  - station_code: [R8]
    name: Dimension Hill
    name_zh: 維度山
    last_station: true
custom_style: table{margin:0 auto}.station-code-bg-first{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:62px bottom}.station-code-bg{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 101%;background-position:62px}.station-code-bg-last{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:62px top}
weight: 1
---