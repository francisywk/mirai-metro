---
title: Panda Express
title_zh: 熊貓快綫
mm_sign: [P]
branch_line: false
stations:
  - station_code: [P1]
    name: Panda Museum
    name_zh: 熊貓博物館
    placeholder_station: true
  - station_code: [P2]
    name: Miraiya Cave
    name_zh: 美來雅洞
    transfer:
      - mm_sign: [R,G]
    first_station: true
  - station_code: [P3]
    name: Mugen
    name_zh: 無限
    transfer:
      - mm_sign: [B,V,W,D]
  - station_code: [P4]
    name: Under the Falls
    name_zh: 瀑布下
    transfer:
      - mm_sign: [R,W]
  - station_code: [P5]
    name: City Farm
    name_zh: 城市農場
    transfer:
      - mm_sign: [G,B]
  - station_code: [P6]
    name: Oasis Point
    name_zh: 綠洲角
    transfer:
      - mm_sign: [W]
    last_station: true
  - station_code: [P8]
    name: Spawn
    name_zh: 生成
    placeholder_station: true
custom_style: table{margin:0 auto}.station-code-bg-first{background-image:url(/img/bg/pandaexpress.png);background-repeat:no-repeat;background-size:7px 50%;background-position:51px bottom}.station-code-bg{background-image:url(/img/bg/pandaexpress.png);background-repeat:no-repeat;background-size:7px 101%;background-position:51px}.station-code-bg-last{background-image:url(/img/bg/pandaexpress.png);background-repeat:no-repeat;background-size:7px 50%;background-position:51px top}
weight: 9
---