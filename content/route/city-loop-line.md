---
title: City Loop Line
title_zh: 三環綫
route_sign: [C]
branch_line: false
stations:
  - station_code: [C1]
    name: Winterland
    name_zh: 冬地
    transfer:
      - route_sign: [G,W]
  - station_code: [C2]
    name: Miraibridge
    name_zh: 美來橋
    transfer:
      - route_sign: [R,S]
  - station_code: [C3]
    name: Berryview
    name_zh: 啤梨山
    transfer:
      - route_sign: [D]
  - station_code: [C4]
    name: Mirai
    name_zh: 美來
    transfer:
      - route_sign: [G,Ac,D]
  - station_code: [C5]
    name: Downtown East
    name_zh: 市中心東
    transfer:
      - route_sign: [W,D]
  - station_code: [C6]
    name: Mount Austin
    name_zh: 柯士甸山
    transfer:
      - route_sign: [G]
custom_style: table{margin:0 auto}.station-code-bg{background-image:url(/img/bg/cityloopline.png);background-repeat:no-repeat;background-size:7px 101%;background-position:56px}
weight: 7
---