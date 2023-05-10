# React Guideline

##My vision have differences in the default stack react & redux.

###I like use "DI" pattern, I see more perspective on use this tool to build a app:
- this easy way to split logic and reuse code in other class (services). 
- if use rxjs library with "DI" we can do target render of component, if we subscribe in component on change data we can re-render component only if have changes or when we want do it. 
- I think we should split data and view state
- I mean data is data from server
- view state has responsibility just for how look view

###Naming convention
- {name}.scope.ts - it's file view create new DI container
- {name}.provider.ts - it's file with provide implementation {service, mapper, resource, etc...}
- {name}.router.ts - it's file with configuration of app routing
- {name}.service.ts - it's file with logic
- {name}.manager.ts - it's file with aggregation logic {services}
- {name}.resource.ts - it's file with request to data from 3rd party or api
- {name}.mapper.ts - it's file with implementation of transform data to another structure














план как переехать с текущей позиции проекта
1. вынести левое меню как отдельный модуль
2. вынести плашку в футере
3. и нотификации
4. создать монолит в2
5. сделать проксирование на в2 для определенных урлов
6. выбрать какой модуль мы хотим в нем использвовать как модуль федерейшен
7. выбранный модуль нужно верхне уроврено подготовить к интеграции его в мололит 2
8. затем можно глубже его рефаторить и польностью загонять в новую концепцию 
   сверху вниз начанать с сервисов больше логики в них выносить и агрегирвоать взаимодействие в 
   менеджерах и выделения других абстракций в отдельные реализации
9. 