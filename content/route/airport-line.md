---
title: Airport Line
title_zh: 空港綫
route_sign: [Ac]
branch_line: false
stations:
  - station_code: [Acomu1]
    station_code_2: [Aex1]
    name: Mirai
    name_zh: 美拉
    transfer:
      - route_sign: [G,C,D]
    first_station: true
  - station_code: [A2]
    name: UCHQ South
    name_zh: 聯總南
    transfer:
      - route_sign: [G,B]
  - station_code: [A3]
    name: UCHQ East
    name_zh: 聯總東
  - station_code: [Acomu4]
    station_code_2: [Aex4]
    name: Mirai City Airport
    name_zh: 美拉城市空港
    transfer:
      - route_sign: [V]
  - station_code: [Acomu5]
    station_code_2: [Aex5]
    name: UCHQ North
    name_zh: 聯總北
    transfer:
      - route_sign: [B,D]
    last_station: true
custom_style: table{margin:0 auto}.station-code-bg-first{background-image:url(/img/bg/airportline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:69px bottom}.station-code-bg{background-image:url(/img/bg/airportline.png);background-repeat:no-repeat;background-size:7px 101%;background-position:69px}.station-code-bg-last{background-image:url(/img/bg/airportline.png);background-repeat:no-repeat;background-size:7px 50%;background-position:69px top}.station-code-bg-express-first{background-image:url(/img/bg/airportexpress.png);background-repeat:no-repeat;background-size:7px 50%;background-position:56px bottom}.station-code-bg-express-last{background-image:url(/img/bg/airportexpress.png);background-repeat:no-repeat;background-size:7px 50%;background-position:56px top}.station-code-bg-express,.express-route-bypass{background-image:url(/img/bg/airportexpress.png);background-repeat:no-repeat;background-size:7px 101%;background-position:56px}
weight: 4
---