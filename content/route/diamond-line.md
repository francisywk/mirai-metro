---
title: Diamond Line
title_zh: 鑽石綫
route_sign: [D]
branch_line: false
stations:
  - station_code: [D1]
    name: UCHQ North
    name_zh: 聯總北
    transfer:
      - route_sign: [B,Ac]
    first_station: true
  - station_code: [D2]
    name: Berryhills
    name_zh: 啤梨山
    transfer:
      - route_sign: [C]
  - station_code: [D3]
    name: Mirai
    name_zh: 美來
    transfer:
      - route_sign: [G,Ac,C]
  - station_code: [D4]
    name: Mugen
    name_zh: 無限
    transfer:
      - route_sign: [B,V,W,P]
  - station_code: [D5]
    name: Downtown East
    name_zh: 市中心東
    transfer:
      - route_sign: [W,C]
  - station_code: [D6]
    name: Diamond Hill
    name_zh: 鑽石山
    last_station: true
custom_style: table{margin:0 auto}.station-code-bg-first{background-image:url(/img/bg/diamondline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:52px bottom}.station-code-bg{background-image:url(/img/bg/diamondline.png);background-repeat:no-repeat;background-size:7px 101%;background-position:52px}.station-code-bg-last{background-image:url(/img/bg/diamondline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:52px top}
weight: 8
---