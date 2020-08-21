---
title: Red Line
title_zh: 紅綫
mm_sign: [R]
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
      - mm_sign: [B]
  - station_code: [R3]
    name: Under the Falls
    name_zh: 瀑布下
    transfer: 
      - mm_sign: [W,P]
  - station_code: [R4]
    name: Downtown Core
    name_zh: 市中心
    transfer: 
      - mm_sign: [G,W]
  - station_code: [R5]
    name: Miraiya Cave
    name_zh: 美來雅洞
    transfer: 
      - mm_sign: [G,P]
  - station_code: [R6]
    name: Highlands
    name_zh: 高原
    last_station: true
custom_style: table{margin:0 auto}.station-code-bg-first{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:61px bottom}.station-code-bg{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 101%;background-position:61px}.station-code-bg-last{background-image:url(/img/bg/redline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:61px top}
weight: 1
---