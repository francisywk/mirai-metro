---
title: {{ replace .Name "-" " " | title }}
title_zh: 綫
route_sign: [{{ substr .Name 0 1 | upper }}]
terminus_start: 
terminus_end: 
branch_line: false
stations:
  - station_code: []
    name: 
    name_zh: 
    transfer:
      - route_sign: []
    first_station: true
custom_style:
weight: 
---