---
title: Blue Line
title_zh: 藍綫
route_sign: [B]
branch_line: true
stations:
  - station_code: [B1]
    name: Victory Bay
    name_zh: 勝利灣
    transfer: 
      - route_sign: [V]
    first_station: true
  - station_code: [B2]
    name: UCHQ North
    name_zh: 聯總北
    transfer: 
      - route_sign: [Ac,D]
  - station_code: [B3]
    name: UCHQ South
    name_zh: 聯總南
    transfer: 
      - route_sign: [G,A]
  - station_code: [B4]
    name: Mugen
    name_zh: 無限
    transfer: 
      - route_sign: [V,W,D,P]
  - station_code: [B5]
    name: Paradise Falls
    name_zh: 仙境瀑布
    transfer:
      - route_sign: [R]
  - station_code: [B6]
    name: Zero Zero
    name_zh: 零零
    transfer:
      - route_sign: [W]
    branch_first: true
  - station_code: [B7]
    name: City Farm
    name_zh: 城市農場
    transfer:
      - route_sign: [G,P]
    branch_last: true
  - station_code: [B8]
    name: Hell's Gate
    name_zh: 地獄門
  - station_code: [B9]
    name: Spawn
    name_zh: 生成
    last_station: true
custom_style: table{margin:0 auto}.station-code-bg-first{background-image:url(/img/bg/blueline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:64px bottom}.station-code-bg{background-image:url(/img/bg/blueline.png);background-repeat:no-repeat;background-size:7px 101%;background-position:64px}.station-code-bg-last{background-image:url(/img/bg/blueline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:64px top}.station-code-bg-branch-first{background-image:url(/img/bg/blueline.png),url(/img/bg/blueline.png),url(/img/bg/blueline.png);background-repeat:no-repeat;background-size:7px 101%,50px 7px,7px 54.5%;background-position:64px,80px center,125px bottom}.station-code-bg-branch-last{background-image:url(/img/bg/blueline.png),url(/img/bg/blueline.png);background-repeat:no-repeat;background-size:7px 101%,7px 50%;background-position:64px,125px top}td.station-code-bg-branch-last{padding-left:109px!important;padding-right:0}
weight: 3
---